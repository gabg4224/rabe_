import { Catalog, ItemsTable } from "@/components/catalog";

export default function Admin({info}) {

    console.log(info)
    return (
        <Catalog view={"homePageAdmin"} info={info}></Catalog>

    );
}

export const getServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/api/products');
    const info = await res.json();
    return { props: { info } };
  };