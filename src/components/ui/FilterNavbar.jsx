import React from 'react'
import Card from "../ui/Card.jsx";
import Button from '../ui/Button.jsx';
import { ArrowDownBoldIcon, ArrowDownOutlineIcon, BakeryIcon, FilterIcon } from './Icons'

const FilterNavbar = ({className}) => {
  return (
    <div className={className}>
        <a href="">
            <Card className="w-[84px] h-[35px] flex items-center text-[14px] font-bold justify-center gap-2 bg-gray-100 rounded-sm hover:bg-[#009F7F] hover:text-white">
                <FilterIcon className="w-5 h-5"></FilterIcon>
                <span>Filter</span>
            </Card>
        </a>

        <a href="">
            <Button className="flex items-center justify-center text-[14px] gap-1 font-bold">
                <span><BakeryIcon className="w-5 h-5"></BakeryIcon></span>
                <span>Bakery</span>
                <span><ArrowDownBoldIcon className="w-4 h-4 mt-1"></ArrowDownBoldIcon></span>
            </Button>
        </a>
    </div>
  )
}

export default FilterNavbar