import sql from "better-sqlite3";
import type { TMealItemProps } from "@/shared/types/@meals";

const db = sql("meals.db");

export async function getMeals(): Promise<TMealItemProps[]> {
  await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate slow network
  return db.prepare("SELECT * FROM meals").all() as TMealItemProps[];
}

export async function getMeal(slug: string): Promise<TMealItemProps> {
  await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate slow network
  return db
    .prepare("SELECT * FROM meals WHERE slug = ?")
    .get(slug) as TMealItemProps;
}
