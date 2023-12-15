import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShopingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components'
import Footer from '../../Components/Footer'
import './App.css'


const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/not-Found', element: <NotFound /> },
    { path: '/sign-in', element: <SignIn/> }
  ])

  return routes
}


const App = () => {
  return (
    <ShopingCartProvider>
    <BrowserRouter>
      <AppRoutes/>
      <Navbar />
      <Footer />
    </BrowserRouter>
    </ShopingCartProvider>
    )
}

export default App
