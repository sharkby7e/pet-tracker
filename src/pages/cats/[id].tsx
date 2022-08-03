import { NextPage } from "next";
import { useRouter } from "next/router";

const Cat: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Hello {id}</h1>;
};

export default Cat;

export async function getStaticProps() {}
