import React from 'react'
import pdCatList from '../../data/productCategoryList'
import Card from '../ui/Card'
import Paragraph from '../ui/Paragraph'
import { ArrowLeftOutlineIcon, ArrowRightOutlineIcon } from '../ui/Icons'
import allProductsCatls from '../../data/bakeryProducts'

const ProductCategory = () => {
    const handleFilterClick = (index) => {
        // console.log(index);
        const filteredProducts = allProductsCatls.filter((product)=>product.catId === index);
        console.log(filteredProducts);
    }
    // continue from here on chatgpt

  return (
    <div className='bg-[#F3F4F6] p-7 relative'>
        <div className=' bg-[#F3F4F6] h-auto w-full flex gap-4 overflow-x-auto flex-nowrap scroll-smooth scrollbar-hide'>
            {pdCatList.map((prodObj, index) => (
                    <Card onClick={() =>handleFilterClick(index)} key={index} className="min-w-[198px] h-[198px] flex flex-col items-center justify-center gap-5 bg-white rounded-md shrink-0 basis-[198px] font-medium cursor-pointer">
                        <img className='w-[98px] h-[98px]' src={prodObj.url} alt="" />
                        <Paragraph text={prodObj.name}></Paragraph>
                    </Card>
            ))}
        </div>
        <Card className="absolute top-1/2 -translate-y-1/2 shadow-md w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
            <ArrowLeftOutlineIcon className="w-5 h-5" />    
        </Card>
        <Card className="absolute top-1/2 -translate-y-1/2 right-[20px] shadow-md w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
            <ArrowRightOutlineIcon className="w-5 h-5" />    
        </Card>
    </div>
  )
}

export default ProductCategory