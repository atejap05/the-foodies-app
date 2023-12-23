import { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/Meals/GridComponent/MealsGrid";
import { getMeals } from "@/lib/meals";

// TODO: Try to implement an Squelton Loading Component for the MealsGrid

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

type Props = {};

const MealsPage = (props: Props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Loading...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
