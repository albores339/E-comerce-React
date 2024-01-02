const Hero = () => {
    return (
        <div className="flex flex-col text-stone-700 md:flex-row lg:flex-row bg-stone-100 md:h-96">
        <figure className="flex w-full   object-cover h-96 md:h-full">
          <img className="w-full object-cover" src="https://boosterfashion.myshopify.com/cdn/shop/files/20220215-_Coleccion_Denim_768x.jpg?v=1676271314" alt="" />
        </figure>
        <p className="flex w-full md:w-11/12 flex-col text-center justify-center p-4">
          <span className="text-2xl m-2">Elevate your fashion game with Shopi Juanito</span>
          <span className="text-sm  font-normal m-2">Our mission is to help people express their unique personalities and elevate their fashion sense through our products. We believe that everyone deserves to feel confident and comfortable in their clothes, and we strive to provide just that.</span>
          <div className="flex items-center justify-center">
          <button className=" bg-lime-400 w-3/5 text-white rounded-lg p-2 m-2">
          Buy Now
        </button>
          </div>
          
        </p>
      </div>
    )
}

export default Hero