import { useContext } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import Hero from "../../Components/Hero"
import { ShopingCartContext } from "../../Context"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"

function Home() {
  const context = useContext(ShopingCartContext)
  
  const renderView = () => {
    if (context.searchByTitle?.length > 0){
      if(context.filteredItems?.length > 0){
        return (
          context.filteredItems?.map(item => (<Card key={item.id} {...item}/>)
        ))
      }else {
        return (
          <div className="m-4">We don't have anything 💔 </div>
        )
      }
      
    } else {
      return(
        context.items?.map(item => (<Card key={item.id} {...item}/>)
        )
      )
    }
  }



  return (
    <Layout>
      <Hero />
      <div className="m-4">
        New Products
      </div>
      <div className="flex gap-4 items-center">
        <MagnifyingGlassIcon className="text-sky-600 w-8 h-8"/>
        <input type="text" placeholder="Search a product" className="font-medium border border-stone-500 w-72 md:w-96 p-2 mb-4 rounded-lg focus:outline-none"
        onChange={(event) => {context.setSearchByTitle(event.target.value)}}/>
      </div>

      
      <div className="grid gap-4  grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-lg p-2">
      {renderView()}
      </div>
    </Layout>
    )
}

export default Home
