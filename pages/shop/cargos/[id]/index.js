import { getInfoProducts, getPathsFromId } from "@/utils/utilsFunctions";
import { useState } from "react";
import CartButton from "@/components/cartButton";
export default function CargosDinamic({ info }) {
  const [item, setItem] = useState({
    id: info.id,
    title: info.title,
    price: info.price,
    color: info.colors[0].colorName,
    size: info.sizes[0].sizeName,
  });

  return (
    <>
      <div className="w-full h-screen pt-4 flex justify-center">
        <div className="flex h-full w-[80%]">
          <div className=" flex basis-7/12   bg-zinc-600 h-full  ">
            <div className="h-full w-full"> asd</div>
          </div>
          <div className="flex flex-col grow px-4 ">
            <div className=" flex flex-col h-2/5 justify-between pb-3 border-b-2 border-yellow-200 ">
              <div className="h-16 flex flex-col justify-between ">
                <div className="flex justify-between ">
                  <h1 className="text-xl">{item.title}</h1>
                  <h3 className="text-lg">{item.color}</h3>
                </div>
                <div className="flex justify-between">
                  <div className="flex ">
                    <h2>Color</h2>
                    <div></div>
                  </div>
                  <h2 className="text-lg font-semibold">
                    $ {item.price.toFixed(2)}
                  </h2>
                </div>
              </div>
              <div className="flex justify-between">
                <h3>Talla:</h3>
                <h3>Posible size chart</h3>
              </div>
              <div className="flex w-full h-4 bg-blue-400"></div>
              <div className="">
                <CartButton item={item}></CartButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getPathsFromId();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const info = await getInfoProducts(id);
  //const info2 = await getItemsShowed(first)

  return {
    props: info, // will be passed to the page component as props
  };
}
