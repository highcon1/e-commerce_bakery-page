import React from 'react'
import { CancelIcon, MinusIcon, NoCartItemIcon, PlusIcon, ShoppingBagFull } from './Icons'
import Paragraph from './Paragraph';
import Button from '../ui/Button';

const Cart = ({closeCart}) => {
    const handleCloseCart = () => {
        closeCart();
    }

  return (
    <div className='relative h-full'>
    <div className='h-[60px] w-auto bg-white sticky top-0 flex items-center justify-between px-5 shadow-md'>
        <div className='text-[#009F7F] flex items-center gap-2'>
            <ShoppingBagFull className='w-5 h-5' />
            <Paragraph text="0 Item" />
        </div>
        <div onClick={handleCloseCart} className='bg-[#F3F4F6] w-7 h-7 rounded-full flex items-center justify-center text-[#727478] cursor-pointer hover:bg-[#009F7F] hover:text-white'>
            <CancelIcon className='w-3 h-3'/>
        </div>
    </div>

    <div className='h-[125px] flex items-center justify-around px-4 shadow-sm'>
        <div className='flex flex-col items-center justify-center gap-2 rounded-3xl bg-[#F3F4F6] w-7 h-[6rem]'>
            <PlusIcon className='w-5 h-5 stroke-2' />
            <Paragraph text='0' />
            <MinusIcon className='w-5 h-5 stroke-2' />
        </div>
        <span className='w-15 h-15'>
            <img className='object-cover object-center' src="./category/allbakery/Croissant-5_sxjigi.jpg" alt="" srcset="" />
        </span>
        <div>
            <Paragraph text='Caffe Nero Mocha LAte 50ml' />
            <Paragraph text='$1.50' />
            <Paragraph text='1 X 1 pc(s)' />
        </div>
        <span>
            <Paragraph text='$1.50'/>
        </span>
        <Button>
            <CancelIcon className='w-3 h-3' />
        </Button>       
    </div>

    <div className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]'>
        <NoCartItemIcon />
        <Paragraph className="font-bold" text="No products found" />
    </div>

    <div className='h-[60px] w-auto absolute bottom-2 z-50 flex justify-center left-[50%] translate-x-[-50%]'>
        <div className='h-[58px] w-[403px] bg-[#009F7F] rounded-4xl flex items-center justify-between px-1'>
            <Paragraph className='pl-4 font-bold text-white' text="Checkout" />
            <div className='w-[82px] h-[50px] bg-white rounded-4xl flex items-center justify-center text-[#009F7F] font-medium'>
                <Paragraph text="$0.00" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Cart