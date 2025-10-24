import React from 'react'
import HeroSection from '../../sections/HeroSection.jsx'
import ProductCategory from '../../layout/ProductCategory.jsx'
import BakeryProducts from '../../layout/BakeryProducts.jsx'
import allProductsCatls from '../../../data/bakeryProducts.js'
import { useState } from 'react'
import FloatingCart from '../../layout/hero/FloatingCart.jsx'


const BakeryPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(allProductsCatls); //for filtering products

  //this function is to filter products by category
  const handleFilter = (categoryId) => {
    const filtered = allProductsCatls.filter((product) => product.catId === categoryId);
    setFilteredProducts(filtered);
  };
  return (
    <div>
        
        <HeroSection />
        <>
        <FloatingCart />
        </>
        <ProductCategory onFilter={handleFilter} />

        <BakeryProducts products={filteredProducts} />
    </div>
  )
}

export default BakeryPage