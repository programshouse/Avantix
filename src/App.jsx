import { Routes, Route } from "react-router-dom"
import { Layout } from "./components/layout"
import Home from "./pages/home"
import Products from "./pages/products"
import Cart from "./pages/cart1"
import ShowCart from "./pages/showCart"
import Checkout from "./pages/checkout"
import Orders from "./pages/orders"
import AccountOrders from "./pages/account-orders"
import OrderDetails from "./pages/order-details"
import About from "./pages/about"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<ShowCart />} /> 
        <Route path="/cart1" element={<Cart/>} />
        {/* <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/account/orders" element={<AccountOrders />} />
        <Route path="/orders/:id" element={<OrderDetails />} />
        <Route path="/about" element={<About />} /> */}
      </Route>
    </Routes>
  )
}
