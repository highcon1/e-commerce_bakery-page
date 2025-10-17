import React from 'react'
import HeroSection from '../sections/HeroSection.jsx'
import Header from '../layout/header/Header.jsx'
import ProductCategory from '../layout/ProductCategory.jsx'
import BakeryProducts from '../layout/BakeryProducts.jsx'
import allProductsCatls from '../../data/bakeryProducts.js'
import { useState } from 'react'
import FloatingCart from '../layout/hero/FloatingCart.jsx'


const BakeryPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(allProductsCatls); //for filterring productts

  const [cartItems, setCartItems] = useState([]) //for the cart items


  //this function is for the add to cart button
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
    // console.log(cartItems);
  }

  //this function is to filter products by category
  const handleFilter = (categoryId) => {
    const filtered = allProductsCatls.filter((product) => product.catId === categoryId);
    setFilteredProducts(filtered);
  };
  return (
    <div>
        <Header />
        
        <HeroSection />
        <>
        <FloatingCart cartItems={cartItems} />
        </>
        <ProductCategory onFilter={handleFilter} />

        <BakeryProducts products={filteredProducts} onAddToCart={addToCart} />
    </div>
  )
}

export default BakeryPage