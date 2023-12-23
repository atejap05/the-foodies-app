import classes from "./loading.module.css";

export default function LoadingMealsPage() {
  return <p className={classes.loading}>Loading...</p>;
}

// TODO: This approach is no longer needed, as we are using Suspense at the page level
// This why i named this file loading-out.tsx instead of loading.tsx
