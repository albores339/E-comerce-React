import { useState, useEffect } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import Hero from "../../Components/Hero"

function Home() {
  const [items, setItems] = useState(null) 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setItems(data))
  }, [])

  return (
    <Layout>
      <Hero />

      <div className="m-4">
        New Products
      </div>
      
      <div className="grid gap-4  grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg p-2">
      {
        items?.map(item => (<Card key={item.id} {...item}/>)
          )
      }
        </div>
    </Layout>
    )
}

export default Home
