import { NextPage } from "next";
import { useRouter } from "next/router";
import Biography from "../../components/Biography";

const Cat: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(router.query);
  console.log(id);
  console.log(typeof id);
  return (
    <div>
      <h1>Hello {id}</h1>
      <Biography bio="I am cute" name="Basil">
        My name is {id}
      </Biography>
    </div>
  );
};

export default Cat;

// export async function getStaticProps() {}
