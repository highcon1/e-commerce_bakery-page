import React from 'react'
import FilterNavbar from "../../ui/FilterNavbar.jsx";
import LogoImg from "../../ui/Logo.jsx";


const MobileHeader = () => {
  return (
    // mobile header
    <div className="sm:hidden h-[auto] shadow-lg border-b-1 border-gray-300">
        <div className="w-full h-[112px]">
            <div className="w-full h-[56px] flex items-center justify-between shadow-gray-300 shadow-sm">
                <LogoImg className='px-4' />
            </div>

            <FilterNavbar className="flex items-center justify-between px-4 w-full h-[56px]" ></FilterNavbar>
        </div>
    </div>
  )
}

export default MobileHeader