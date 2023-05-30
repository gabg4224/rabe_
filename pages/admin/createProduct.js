export default function CreateProduct() {
  return (
    <>
      <div className="h-screen w-screen bg-gray-200 flex justify-center pt-6 ">
        <div className="w-1/3">
          <form onSubmit={() => alert("se envio un archivo")} action="" method="post">
            <div className=" flex flex-col gap-3">
              <input
                type="text"
                name="Titulo"
                placeholder="Titulo..."
                className=" w-full h-10 flex p-2 "
              />

              <textarea
                type="text"
                name="Descricion"
                placeholder="Descripcion..."
                className="  w-full h-24 flex p-2 "
              />

<input
                type="number"
                name="Precio"
                placeholder="Precio..."
                className=" w-full h-10 flex p-2 "
              />
                     <input
                type="text"
                name="Talla"
                placeholder="Tallas..."
                className=" w-full h-10 flex p-2"
              />
              
              <input
                type="text"
                name="Imagenes"
                placeholder="Imagenes..."
                className=" w-full h-10 flex p-2"
              />
            </div>
          </form>

        <div className="w-full  pt-3 flex justify-center">
        <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Guardar</button>
        </div>
        </div>
      </div>
    </>
  );
}
