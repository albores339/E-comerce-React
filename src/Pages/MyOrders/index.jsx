import { useContext } from "react"
import { Link } from "react-router-dom"
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"
import { ShopingCartContext } from "../../Context"

function MyOrders() {
  const context = useContext(ShopingCartContext)
  console.log(context.order)
    return (
    <Layout>
      <div className="flex flex-col mt-20 items-center mb-72">
        <div>
          My Orders
        </div>
        {
        context.order.map((order, index) =>(
          <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard 
          totalPrice={order.totalPrice} 
          totalProducts={order.totalProducts} />
          </Link>
        ))
      }
      </div>

    </Layout>
      )
  }
  
  export default MyOrders