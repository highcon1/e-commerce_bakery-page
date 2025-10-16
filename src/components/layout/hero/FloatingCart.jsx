import React from 'react'
import ShoppingCart from '../../ui/ShoppingCart'
import Card from '../../ui/Card'


const FloatingCart = () => {
  return (
    <Card className="fixed right-0 top-[45%] w-[85px] h-[96px] bg-[#009F7F] rounded-l-md flex flex-col items-center justify-center gap-3 z-[999]">
        <ShoppingCart text_up="0 Item" text_below="$0.00" ></ShoppingCart>
    </Card>
  )
}

export default FloatingCart