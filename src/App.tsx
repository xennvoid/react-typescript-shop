import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Layout from './layout'
import Catalog from './pages/Catalog'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import ShoppingCart from './pages/ShoppingCart'
import { useEffect } from 'react'

function App() {

  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog/:productType" element={<Catalog />} />
        <Route path="product/:productId" element={<ProductPage />} />
        <Route path="cart" element={<ShoppingCart />} />
      </Route>
    </Routes>
  )
}

export default App
