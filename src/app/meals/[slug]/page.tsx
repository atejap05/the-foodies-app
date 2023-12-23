import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

const MealsDetails = (props: Props) => {
  const { slug } = props.params;
  return (
    <>
      <h1>MealsDetails {slug}</h1>
    </>
  );
};

export default MealsDetails;
