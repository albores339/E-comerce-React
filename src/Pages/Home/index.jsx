import { useState, useEffect } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"

function Home() {
  const [items, setItems] = useState(null) 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setItems(data))
  }, [])

  return (
    <Layout>
        Home
        <div className="grid gap-5  grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-11/12 max-w-screen-lg p-2">
          {
            items?.map(item => (<Card key={item.id} data={item}/>)
              )
          }
        </div>


    </Layout>
    )
}

export default Home
