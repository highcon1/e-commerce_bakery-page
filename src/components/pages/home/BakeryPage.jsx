import React from 'react'
import HeroSection from '../../sections/HeroSection.jsx'
import ProductCategory from '../../layout/ProductCategory.jsx'
import BakeryProducts from '../../layout/BakeryProducts.jsx'
import allProductsCatls from '../../../data/bakeryProducts.js'
import { useState } from 'react'
import FloatingCart from '../../layout/hero/FloatingCart.jsx'


const BakeryPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(allProductsCatls); //for filtering productts

  const [cartItems, setCartItems] = useState([]) //for the cart items


  //this function is adds product to the floating cart and also increases its quatinty
  const addToCart = (productIndex) => {
    const item = allProductsCatls[productIndex];
    const existingItem = cartItems.find((cartItem) => cartItem.id === productIndex);
    if (existingItem) {
      const updatedCartItems = cartItems.map(cartItem =>  cartItem.id === productIndex 
        ? {...cartItem, qty: cartItem.qty + 1} : cartItem)
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, {...item, qty: 1, id: productIndex}])
    }
  }

  //this function is to reduce the quantity in the cart item, and also renders
  //on the PdCard component. By default it should load only the plus button but once the
  //cart has an item in it, it should re-render that particular item card.
  const remFromCart = (productIndex) => {
    const item = cartItems.find((item) => item.id === productIndex)
    if (item.qty > 1) {
      const updatedCartItems = cartItems.map(cartItem => cartItem.id === productIndex
        ? {...cartItem, qty: cartItem.qty - 1} : cartItem);
      setCartItems(updatedCartItems);
    } else {
      const updatedCartItems = cartItems.filter(cartItem => cartItem.id !== productIndex);
      setCartItems(updatedCartItems);
    }
  };

  //this function is to filter products by category
  const handleFilter = (categoryId) => {
    const filtered = allProductsCatls.filter((product) => product.catId === categoryId);
    setFilteredProducts(filtered);
  };
  return (
    <div>
        
        <HeroSection />
        <>
        <FloatingCart cartItems={cartItems} />
        </>
        <ProductCategory onFilter={handleFilter} />

        <BakeryProducts products={filteredProducts} onAddToCart={addToCart} cartItems={cartItems} remFromCart={remFromCart} />
    </div>
  )
}

export default BakeryPage