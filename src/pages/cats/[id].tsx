import { NextPage } from "next";
import { useRouter } from "next/router";
import Biography from "../../components/Biography";

const Cat: NextPage = () => {
  const id = useRouter().query.id as string;
  return (
    <div>
      <h1>Hello {id}</h1>
      <Biography bio="I am cute" name={id}>
        My name is {id}
      </Biography>
    </div>
  );
};

export default Cat;

// export async function getStaticProps() {}
