import React from "react";
import classes from "./meals-grid.module.css";
import MealItem from "../MealItem/MealItem";
import { TMealItemProps } from "@/shared/types/@meals";

type TMealsGridProps = {
  meals: TMealItemProps[];
};

const MealsGrid = (props: TMealsGridProps) => {
  const { meals } = props;
  return (
    <ul className={classes.meals}>
      {meals.map(meal => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
