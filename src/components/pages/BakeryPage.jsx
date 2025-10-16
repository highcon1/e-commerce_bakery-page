import React from 'react'
import HeroSection from '../sections/HeroSection.jsx'
import Header from '../layout/header/Header.jsx'
import ProductCategory from '../layout/ProductCategory.jsx'
import BakeryProducts from '../layout/BakeryProducts.jsx'
import allProductsCatls from '../../data/bakeryProducts.js'
import { useState } from 'react'


const BakeryPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(allProductsCatls);

  const handleFilter = (categoryId) => {
    const filtered = allProductsCatls.filter((product) => product.catId === categoryID);
  }
  return (
    <div>
        <Header />
        
        <HeroSection />
        <ProductCategory />

        <BakeryProducts />
    </div>
  )
}

export default BakeryPage