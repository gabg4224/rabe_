import { ItemsTable } from "@/components/catalog";
import { getItems2, getItems} from "../services/items";

export default function Shop({ info }) {
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-[16%] h-96 bg-slate-500 flex flex-col items-center">
<h2 className="text-lg">precio  </h2>
<h2 className="text-lg">tipo de Producto</h2>
<h2 className="text-lg">cargos</h2>
<h2 className="text-lg">color</h2>
<h2 className="text-lg">talla</h2>




      </div>
      <div className="px-6">
        <div className="w-full gap-6 flex">
          <ItemsTable info={info}></ItemsTable>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const info = await getItems();
  const {id ,title,price}= info
  //const info2 = await getItemsShowed(first)

  return {
    props: {
    info
    }, // will be passed to the page component as props
  };
}
