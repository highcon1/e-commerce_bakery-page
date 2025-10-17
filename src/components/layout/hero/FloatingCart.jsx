import React from 'react'
import ShoppingCart from '../../ui/ShoppingCart'
import Card from '../../ui/Card'


const FloatingCart = ({cartItems}) => {
  const itemNo = cartItems.length;
  console.log(cartItems)


  return (
    <Card className="hidden lg:flex fixed right-0 top-[45%] w-[90px] h-[96px] bg-[#009F7F] rounded-l-md flex-col items-center justify-center gap-3 z-[999]">
        <ShoppingCart text_up={`${itemNo || 0} items`} text_below="$0.00" ></ShoppingCart>
    </Card>
  )
}

export default FloatingCart