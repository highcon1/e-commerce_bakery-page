import React from 'react'
import { CancelIcon, MinusIcon, PlusIcon } from './Icons'
import Button from './Button';
import Paragraph from './Paragraph';

const CartItemCard = ({quantity, name, itemPrice, itemTotalPrice, imgUrl, addToCart, remFromCart, remItemFromCart }) => {
  return (
    <>
        <div className='h-[125px] flex items-center justify-around px-4 shadow-sm'>
            <div className='flex flex-col items-center justify-center gap-2 rounded-3xl bg-[#F3F4F6] w-7 h-[6rem]'>
                <PlusIcon onClick={addToCart} className='w-5 h-5 stroke-2 cursor-pointer' />
                <Paragraph text={quantity || '0'} />
                <MinusIcon onClick={remFromCart} className='w-5 h-5 stroke-2 cursor-pointer' />
            </div>
            <span className='w-15 h-15'>
                <img className='object-cover object-center' src={imgUrl || "./category/allbakery/Croissant-5_sxjigi.jpg"} alt={name || ""} />
            </span>
            <div className='flex flex-col gap-1 justify-center text-[15px]'>
                <Paragraph text={name || 'Caffe Nero Mocha LAte 50ml'} />
                <Paragraph text={itemPrice || '$1.50'} />
                <Paragraph text={`${quantity} x 1pc(s)` || '1 X 1 pc(s)'} />
            </div>
            <span>
                <Paragraph text={`$${itemTotalPrice}` || '$1.50'}/>
            </span>
            <Button className='cursor-pointer' onClick={remItemFromCart}>
                <CancelIcon className='w-3 h-3' />
            </Button>       
        </div>
    </>
  )
}

export default CartItemCard