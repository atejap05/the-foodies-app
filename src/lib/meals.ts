import sql from "better-sqlite3";
import fs from "node:fs";
import slugify from "slugify";
import xss from "xss";
import { TMealItemProps } from "@/shared/types/@meals";

const db = sql("meals.db");

// Get All Meals
export async function getMeals(): Promise<TMealItemProps[]> {
  await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate slow network
  return db.prepare("SELECT * FROM meals").all() as TMealItemProps[];
}

// Get Meal by Slug
export async function getMeal(slug: string): Promise<TMealItemProps> {
  await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate slow network
  return db
    .prepare("SELECT * FROM meals WHERE slug = ?")
    .get(slug) as TMealItemProps;
}

// Create Meal
export async function createMeal(
  meal: TMealItemProps
): Promise<TMealItemProps> {
  await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate slow network

  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  // handle image upload
  const timestamp = Date.now().toString();
  const imageExtension = meal.image.name.split(".").pop();
  const imageFileName = `${meal.slug}_${timestamp}.${imageExtension}`;
  const imagePath = `public/images/${imageFileName}`;

  const stream = fs.createWriteStream(imagePath);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), error => {
    if (error) {
      throw new Error("Could not save image");
    }
  });
  stream.end();

  meal = {
    ...meal,
    image: {
      name: `/images/${imageFileName}`,
      arrayBuffer: function (): Promise<ArrayBuffer> {
        throw new Error("Function not implemented.");
      },
    },
  };

  // Check if the meal already exists
  const existingMeal = db
    .prepare("SELECT * FROM meals WHERE slug = ?")
    .get(meal.slug);

  if (existingMeal) {
    throw new Error("Meal already exists");
  }
  // insert meal into database
  const { changes } = db
    .prepare(
      "INSERT INTO meals (title, summary, instructions, image, creator, creator_email, slug)" +
        "VALUES (@title, @summary, @instructions, @image, @creator, @creator_email, @slug)"
    )
    .run(meal);

  // Check if the meal was inserted
  if (changes !== 1) {
    throw new Error("Could not create meal");
  }

  // return the created meal
  return meal;
}
