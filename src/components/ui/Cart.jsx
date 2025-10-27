import React from 'react'
import { CancelIcon, NoCartItemIcon, ShoppingBagFull } from './Icons'
import Paragraph from './Paragraph';
import CartItemCard from './CartItemCard';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart, removeItemCompletely } from '../../redux/reducers/cartSlice';

const Cart = ({closeCart}) => {
    const handleCloseCart = () => {
        closeCart();
    }
    const cartItems = useSelector((state) => state.carts.items)
    const cartTotal = useSelector((state) => state.carts.total)
    const dispatch = useDispatch();
    const itemNo = cartItems.length;

  return (
    <div className='relative h-full'>
        <div className='h-[60px] w-auto bg-white sticky top-0 flex items-center justify-between px-5 shadow-md'>
            <div className='text-[#009F7F] flex items-center gap-2'>
                <ShoppingBagFull className='w-5 h-5' />
                <Paragraph text={`${itemNo || 0} Item`} />
            </div>
            <div onClick={handleCloseCart} className='bg-[#F3F4F6] w-7 h-7 rounded-full flex items-center justify-center text-[#727478] cursor-pointer hover:bg-[#009F7F] hover:text-white'>
                <CancelIcon className='w-3 h-3'/>
            </div>
        </div>
    
        {cartItems.length > 0 ?
        
        (cartItems.map((itemObj) => {
            const itemTotalPrice = itemObj.quantity * parseFloat(itemObj.price.slice(1));
            return (<CartItemCard
                key = {itemObj.id} 
                quantity = {itemObj.quantity}
                name = {itemObj.name}
                itemPrice = {itemObj.price}
                itemTotalPrice = {itemTotalPrice.toFixed(2)}
                imgUrl = {itemObj.url}
                addToCart = {() => dispatch(addItemToCart(itemObj))}
                remFromCart = {() => dispatch(removeItemFromCart(itemObj))}
                remItemFromCart = {() => dispatch(removeItemCompletely(itemObj))}
                />)}))
            
        : (<div className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]'>
            <NoCartItemIcon />
            <Paragraph className="font-bold" text="No products found" />
        </div>)
        }
        <div className='h-[60px] w-auto '>
            <div className='h-[58px] w-[403px] bg-[#009F7F] rounded-4xl flex items-center justify-between px-1 absolute bottom-2 z-50 left-[50%] translate-x-[-50%]'>
                <Paragraph className='pl-4 font-bold text-white' text="Checkout" />
                <div className='w-[82px] h-[50px] bg-white rounded-4xl flex items-center justify-center text-[#009F7F] font-medium'>
                    <Paragraph text={`$${cartTotal.toFixed(2)}` || "$0.00"} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart