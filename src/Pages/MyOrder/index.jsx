import { useContext } from "react"
import Layout from "../../Components/Layout"
import { ShopingCartContext } from "../../Context"
import OrderCard from "../../Components/OrderCard"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"


function MyOrder() {
    const context = useContext(ShopingCartContext)
    return (
    <Layout>
        <div className="flex mt-10 items-center">
        <Link Link to="/my-orders">
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
            context.order?.slice(-1)[0].products.map((product, index) =>(< OrderCard 
                key={product.id}
                title={product.title}
                imageUrl={product.image}
                price={product.price}
                index={index}
                />
                    ))
                }
            </div>
    </Layout>
      )
  }
  
  export default MyOrder
  