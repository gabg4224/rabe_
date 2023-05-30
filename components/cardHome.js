import Image from "next/image";


export default function CardHome({ view }) {
  return (


    <div className={`${view == "major"?"row-span-2 col-span-2":"col-span-1"} col-span-1 relative group flex justify-center items-end h-full overflow-hidden  `}>
      <Image
        src={"/images/image1.png"}
        width={1280}
        height={1707}
        className="h-full group-hover:scale-110 transition-all aspect-auto duration-700 ease-out "
      ></Image>
      <div className="absolute inset-0 z-10 flex justify-center items-end p-10 px-3 text-center">
        <div className="flex flex-col gap-3">
          <div>
            <h4 className="font-bold">new year</h4>
            <p className="font-light">new design</p>
          </div>
          <button className="capitalize bg-black rounded-lg text-white text-sm p-2 px-5 ">
            shop latest
          </button>
        </div>
      </div>
    </div>
  );
}
