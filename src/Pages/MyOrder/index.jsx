import { useContext } from "react"
import { Link } from "react-router-dom"
import Layout from "../../Components/Layout"
import { ShopingCartContext } from "../../Context"
import OrderCard from "../../Components/OrderCard"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"


function MyOrder() {
    const context = useContext(ShopingCartContext)
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf("/") + 1)
    console.log(index)
    if (index === 'last') index = context.order?.length - 1

    return (
    <Layout>
        <div className="flex mt-10 items-center">
        <Link to="/my-orders">
            <div className="flex flex-row items-center cursor-pointer">
                <ChevronLeftIcon className="h-6 w-6"/>
            </div>
        </Link>  
        <div>
          My Order
        </div>
      </div>

    <div className="flex flex-col w-full sm:w-2/5">
        {
            context.order?.[index]?.products.map(product =>(
                <OrderCard 
                    key={product.id}
                    title={product.title}
                    imageUrl={product.image}
                    price={product.price}
                />
                    ))
                }
            </div>
    </Layout>
      )
  }
  
  export default MyOrder
  