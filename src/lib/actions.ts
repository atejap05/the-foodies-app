"use server";

import { createMeal } from "./meals";
import type { TMealItemProps } from "@/shared/types/@meals";

export const onShareMeal = async (formData: FormData) => {
  const meal: TMealItemProps = {
    id: "",
    slug: "",
    title: formData.get("title") || "",
    summary: formData.get("summary") || "",
    instructions: formData.get("instructions") || "",
    image: formData.get("image") || "",
    creator: formData.get("name") || "",
    creator_email: formData.get("email") || "",
  };

  await createMeal(meal);
};
