import React from 'react'
import BakeryPage from './components/pages/home/BakeryPage'
import Header from './components/layout/header/Header'
import ShopsPage from './components/pages/shops/ShopsPage'
import { Routes, Route, useLocation} from 'react-router-dom'
import OffersPage from './components/pages/offers/OffersPage'
import ContactPage from './components/pages/contact/ContactPage'
import JoinPage from './components/pages/join/JoinPage'
import SellersPage from './components/pages/sellers/SellersPage'
import ProductDetails from './components/pages/products/ProductDetails'
import PageNotFound from './components/pages/notfound/PageNotFound'
import GroceryPage from './components/pages/category/GroceryPage'
import MakeupPage from './components/pages/category/MakeupPage'

const App = () => {
  const location = useLocation();
  const state = location.state && location.state.background;
  return (
    <>
      <Header />
      <Routes location={state || location}>
        <Route path='/' element={<BakeryPage />} />
        <Route path='/shops' element={<ShopsPage />} />
        <Route path='/grocery' element={<GroceryPage />} />
        <Route path='/makeup' element={<MakeupPage />} />
        <Route path='/bags' element={<ShopsPage />} />
        <Route path='/clothing' element={<ShopsPage />} />
        <Route path='/furniture' element={<ShopsPage />} />
        <Route path='/daily_needs' element={<ShopsPage />} />
        <Route path='/books' element={<ShopsPage />} />
        <Route path='/gadgets' element={<ShopsPage />} />
        <Route path='/medicine' element={<ShopsPage />} />
        <Route path='/product/:id' element={<ProductDetails />} /> 
        <Route path='/offers' element={<OffersPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/join' element={<JoinPage />} />
        <Route path='/sellers' element={<SellersPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>

      {/* Modal routes */}
      {state && (
        <Routes>
          <Route path="/product/:id" element={<ProductDetails isModal />} />
        </Routes>
      )}
    </>
  )
}

export default App