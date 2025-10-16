import React from 'react'
import Input from '../../ui/Input'
import { SearchIcon } from '../../ui/Icons'
import Button from '../../ui/Button'


const HeroSearchBar = ({variant}) => {
    const position = variant === "lg" ? "absolute top-90 left-1/2 -translate-x-1/2"
        : "absolute top-70 left-1/2 -translate-x-1/2"
  return (
    <div className={`flex ${position}`}>
        <Input name="searchbar"
            className="w-[626px] h-[57px] pl-5 shadow-lg rounded-l-lg focus:outline-[#009F7F] focus:outline-1"
            placeHolder="Search your products from here"
            type="text" />
        <Button className="w-[146px] h-[57px] shadow-lg font-bold bg-[#009F7F] rounded-r-lg text-white flex items-center justify-center gap-3">
            <span><SearchIcon className="w-5 h-5"></SearchIcon></span>
            <span>Search</span>
        </Button>
    </div>
  )
}

export default HeroSearchBar