import React, { useEffect, useRef } from 'react'
import ShoppingCart from '../../ui/ShoppingCart'
import Card from '../../ui/Card'
import { useState } from 'react'
import Cart from '../../ui/Cart'


const FloatingCart = ({cartItems}) => {
  //to display the pane that overlays the screen and displa the cart items
  const [isOpen, setIsOpen] = useState(false);
  const cartRef = useRef();


  const handleCart = () => { setIsOpen(true) }
  const closeCart = () => { setIsOpen(false) }

  //useEffect to close the cartItem layout when i click outside it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        closeCart();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen])

  //to lock the scroll of the page underneath and activate the scroll inside the cart container
  useEffect(() => {
    if (isOpen){
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => { document.body.style.overflow = 'auto' }
  })

  //controls the length of items and also the total price
  const itemNo = cartItems.length;
  const totalPrice = cartItems.reduce((accum, obj) => (accum + parseFloat(obj.price.slice(1)) * obj.qty), 0)
  

  return (
    <>
      <Card onClick={handleCart} className="hidden lg:flex fixed right-0 top-[45%] w-[90px] h-[96px] bg-[#009F7F] rounded-l-md flex-col items-center justify-center gap-3 z-[999] cursor-pointer">
          <ShoppingCart text_up={`${itemNo || 0} items`} text_below={`$${totalPrice.toFixed(2) ||0.00}`} ></ShoppingCart>
      </Card>

      {isOpen && (
        <div className='fixed inset-0 bg-opacity-60 z-[999] flex justify-end'>
          <div ref={cartRef} className='w-[30%] h-full bg-white opacity-100'>
            <Cart closeCart={closeCart} />
          </div>
        </div>
      )}
    </>
  )
}

export default FloatingCart