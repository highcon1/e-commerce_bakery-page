import React from 'react'
import LogoImg from "../../ui/Logo.jsx";
import Button from '../../ui/Button.jsx';
import FilterNavbar from "../../ui/FilterNavbar.jsx";


const TabletHeader = () => {
  return (
    <div className="hidden sm:block lg:hidden h-[auto] shadow-lg border-b-1 border-gray-300">
            <div className="w-full h-[112px]">
                <div className="w-full h-[56px] flex items-center justify-between shadow-gray-300 shadow-sm">
                    <div className="flex items-center justify-between ">
                        <LogoImg className='px-4' />
                    </div>
                    <div className="px-4">
                        <a href="">
                            <Button className="w-[127px] h-[38px] rounded-md bg-[#019376] text-white font-bold text-[14px]">
                                <span>Become a Seller</span>
                            </Button>
                        </a>
                    </div>
                </div>

                <FilterNavbar className="flex items-center justify-between px-4 w-full h-[56px]" ></FilterNavbar>
            </div>
        </div>
  )
}

export default TabletHeader