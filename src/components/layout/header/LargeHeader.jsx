import React from 'react'
import LogoImg from "../../ui/Logo.jsx";
import Button from '../../ui/Button.jsx';
import Card from "../../ui/Card.jsx";
import { HamburgerIcon, SearchIcon } from "../../ui/Icons.jsx";


const LargeHeader = () => {
  return (
    <div className="hidden lg:block xl:hidden">
        <div className="w-full">
            <div className="w-full h-[85px] flex items-center justify-between shadow-gray-300 shadow-sm px-7">
                <div className="flex items-center gap-3">
                    <div>
                        <a href=""><HamburgerIcon className="w-7"></HamburgerIcon></a>
                    </div>
                    <div>
                        <LogoImg />
                    </div>
                </div>

                {/* buttons on the right side*/}
                <div className="flex items-center justify-center gap-4">
                    <a href="">
                        <Card className="h-[38px] w-[38px] rounded-full border-1 border-gray-300 flex items-center justify-center">
                            <SearchIcon className="w-4 h-4" ></SearchIcon>
                        </Card>
                    </a>

                    <a href="">
                        <Button className="w-[53px] h-[38px] rounded-md bg-[#019376] text-white font-bold text-[14px]">
                            <span>Join</span>
                        </Button>
                    </a>

                    <a href="">
                        <Button className="w-[127px] h-[38px] rounded-md bg-[#019376] text-white font-bold text-[14px]">
                            <span>Become a Seller</span>
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LargeHeader