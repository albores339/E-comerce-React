import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShopingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import ProductDetail from '../../Components/ProductDetail'
import Footer from '../../Components/Footer'
import './App.css'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'


const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/not-Found', element: <NotFound /> },
    { path: '/sign-in', element: <SignIn/> },
    { path: '/product-detail', element: <ProductDetail/> }
  ])

  return routes
}


const App = () => {
  return (
    <ShopingCartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <Navbar />
        <CheckoutSideMenu />
        <Footer />
      </BrowserRouter>
    </ShopingCartProvider>
    )
}

export default App
