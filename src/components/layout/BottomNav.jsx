import React from 'react'
import Card from '../ui/Card'
import { HamburgerIcon, HomeIcon, SearchIcon, ShoppingBagIcon, UserIcon } from '../ui/Icons'

const BottomNav = () => {
  return (
    <div className='fixed bottom-0 left-0 w-full h-[58px] bg-white z-[999] px-4 opacity-100 shadow-[0_-2px_4px_rgba(0,0,0,0.1)] lg:hidden'>
        <Card className="w-full h-[58px] flex items-center justify-between">
            <a href=""><HamburgerIcon className="w-6 h-6"></HamburgerIcon></a>
            <a href=""><SearchIcon className="w-6 h-6"></SearchIcon></a>
            <a href=""><HomeIcon className="w-6 h-6"></HomeIcon></a>
            <a href=""><ShoppingBagIcon className="w-6 h-6"></ShoppingBagIcon></a>
            <a href=""><UserIcon className="w-6 h-6"></UserIcon></a>
        </Card>
    </div>
  )
}

export default BottomNav