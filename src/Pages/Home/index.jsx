import { useState, useEffect } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"


function Home() {
  const [items, setItems] = useState(null) 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setItems(data))
  }, [])

  return (
    <Layout>
      <div className="flex flex-col md:flex-row lg:flex-row bg-stone-100 md:h-96">
        <figure className="flex w-full   object-cover h-96 md:h-full">
          <img className="w-full object-cover" src="https://boosterfashion.myshopify.com/cdn/shop/files/20220215-_Coleccion_Denim_768x.jpg?v=1676271314" alt="" />
        </figure>
        <p className="flex w-full md:w-11/12 flex-col text-center text-black justify-center p-4">
          <span className="text-2xl m-2">Elevate your fashion game with Shopi Juanito</span>
          <span className="text-md  font-normal m-2">Our mission is to help people express their unique personalities and elevate their fashion sense through our products. We believe that everyone deserves to feel confident and comfortable in their clothes, and we strive to provide just that.</span>
          <div className="flex items-center justify-center">
          <button className=" bg-lime-400 w-3/5 text-white rounded-lg p-2 m-2">
          Buy Now
        </button>
          </div>
          
        </p>
      </div>

      <div className="m-6">
        New Products
      </div>
      
      <div className="grid gap-4  grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg p-2">
      {
        items?.map(item => (<Card key={item.id} {...item}/>)
          )
      }
        </div>
    <ProductDetail />

    </Layout>
    )
}

export default Home
