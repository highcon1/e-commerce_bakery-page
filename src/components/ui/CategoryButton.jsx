import React from 'react'
import menu from "../../data/menu";
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import Button from '../ui/Button';

const CategoryButton = () => {
    const [menuOpen, setMenuOpen] = useState(false); //to toggle the menu to open or close
    const menuRef = useRef(null); //to target the dropdown mwnu dom
    const [catSelected, setCatSelected] = useState(menu[1])

    //function to handle the click
    const handleClick = (item) => {
        setCatSelected(item);
        setMenuOpen(!menuOpen);
    };


    //to handle click outside or leave page
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        //setting up the event listener for the handleClickOutside
        document.addEventListener("mousedown", handleClickOutside);

        //cleanup when component unmounts or clicks inside the menuref
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        };
    }, []);

  return (
    <>
        <div className="relative" ref={menuRef}>
            <Button onClick={() => setMenuOpen(!menuOpen)} className="w-[152px] h-[46px] border-gray-200 text-[#009F7F] font-bold border-2 rounded-[5px] flex items-center gap-5 justify-center cursor-pointer"> 
                <span>{catSelected.svg}</span>
                <span>{catSelected.name}</span>
                <span className="mt-1.5"><svg width="10" height="6" viewBox="0 0 10 6"><path d="M128,192l5,5,5-5Z" transform="translate(-128 -192)" fill="currentColor"></path></svg></span>
            </Button>

            <div className={`${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"} absolute w-[193px] h-auto py-4 shadow-lg shadow-gray-900/50% mt-2 transition-opacity duration-200 ease-in-out bg-white rounded-[5px]`}>
                {menu.map((item, index) => (
                    <div key={index} className="flex items-start">
                        <Link to={item.path} onClick={() => handleClick(item)} className="flex items-center gap-5 px-5 py-2 font-bold hover:text-[#009F7F]"><span>{item.svg}</span><span>{item.name}</span></Link>
                    </div>)
                )}
            </div>
        </div>
    </>
  )
}

export default CategoryButton