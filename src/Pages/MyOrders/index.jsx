import { useContext } from "react"
import { Link } from "react-router-dom"
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"
import { ShopingCartContext } from "../../Context"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"


function MyOrders() {
  const context = useContext(ShopingCartContext)
    return (
    <Layout>
      <div className="flex mt-10 items-center">
        <div>
          My Orders
        </div>
      </div>

      {
        context.order.map((order, index) =>{
          <Link key={index} to={`/my-orders-/${order.id}`}>
          <OrdersCard 
          totalPrice={order.totalPrice} 
          totalProducts={order.totalProducts} />
          </Link>
        })
      }
    </Layout>
      )
  }
  
  export default MyOrders