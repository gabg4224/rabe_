
import Banner from "@/components/banner";
import { useState } from "react";
import { getItems,getItemsShowed } from "./services/items";
import {Catalog} from "@/components/catalog";



export default function Home({ info }) {

 
  return (
    <>
      <Banner></Banner>
      <Catalog view={"homePage"} info={info}></Catalog>
    </>
  );
}

export async function getStaticProps() {
  
  const info = await getItems();
  //const info2 = await getItemsShowed(first)
 
 
  return {
    props: {
     info
    }, // will be passed to the page component as props
  };
}
