import React from 'react'
import Card from './Card'
import Paragraph from './Paragraph'
import { MinusIcon, PlusIcon } from './Icons'


const PdCard = ({func, discPercent, imgUrl, prdName, price, oldPrice, disp, addToCart, qtyControl, qty, remFromCart}) => {

    const handleAdd = (e) => {
        e.stopPropagation();
        addToCart();
    }

    const handleRemove = (e) => {
        e.stopPropagation();
        remFromCart();
    }


  return (
    <Card onClick={func} className="relative h-[330px] rounded-sm shadow-md p-4  flex flex-col gap-3 bg-white overflow-hidden cursor-pointer select-none hover:scale-102 transition-transform duration-300">
        {/* section for the product image */}
        <div className='h-[250px] w-auto flex items-center justify-center'>
            <img className=' h-[150px] object-cover ' src={imgUrl || "/category/allbakery/Juice pomegranate.jpg"} alt={ "Product Image"} />
        </div>
        
        {/* section for the discount and quantity */}
        <Card className="absolute top-4 flex items-center justify-between w-[90%] px-2">
            <span className={`w-[44px] h-[25px] bg-[#009F7F] rounded-sm flex items-center justify-center ${disp}`}>
                <Paragraph className="text-[12px] text-white" text={discPercent || "50%"} ></Paragraph>
            </span>

            {!qtyControl ? (<span onClick={handleAdd} className='w-[35px] h-[37px] border-1 border-gray-300 flex items-center justify-center rounded-sm hover:bg-[#009F7F]'>
                <PlusIcon strokeWidth="1.5" className="hover:text-white w-7 h-7"></PlusIcon>
            </span>) : 
            (<span className='flex w-[98px] h-[37px] bg-[#009F7F] rounded-md items-center justify-around text-white'>
                <span onClick={handleRemove} className='w-[30px] h-full flex items-center justify-center hover:bg-[#019376] rounded-l-md'><MinusIcon className="w-4 h-5" /></span>
                <span className='w-[34px] h-full flex items-center justify-center'><Paragraph className="flex items-center justify-center" text={qty || 0}></Paragraph></span>
                <span onClick={handleAdd} className='w-[30px] h-full flex items-center justify-center hover:bg-[#019376] rounded-r-md'><PlusIcon className="w-5 h-5" /></span>
            </span>)}
        </Card>

        {/* section for the product name and price */}
        <Card className="absolute top-60 flex flex-col items-start px-3 ">
            <span className='flex items-center gap-3'>
                <Paragraph className="font-bold" text={price || "$2.00"}></Paragraph>
                <del className={`text-gray-500 ${disp}`}>{oldPrice || "$3.00"}</del>
            </span>

            <Paragraph className='text-gray-500' text={prdName || "Product Name"}></Paragraph>
        </Card>
    </Card>
  )
}

export default PdCard