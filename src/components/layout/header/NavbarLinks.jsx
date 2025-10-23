import React from 'react'
import { Link } from 'react-router-dom';

const NavbarLinks = () => {
    const pagesDropdown = [
        { title: "Flash Sale", link: "/flash_sale" },
        { title: "Manufacturers/Publishers", link: "/manufacturers_publishers" },
        { title: "Authors", link: "/authors" },
        { title: "FAQ", link: "/faq" },
        { title: "Terms & Conditions", link: "/terms_conditions" },
        { title: "Customer Refund Policy", link: "/customer_refund_policy" },
        { title: "Vendor Refund Policy", link: "/vendor_refund_policy" },
    ];
    const links = [
        {
            name: "Shops",
            link: "/shops"
        },
        {
            name: "Offers",
            link: "/offers" 
        },
        {
            name: "Contact",
            link: "/contact"    
        }
    ]

    return (
        <ul className="flex gap-10">
            {
                links.map((link, index) => (
                    <li key={index}>
                        <Link to={link.link} className="hover:text-[#009F7F]">{link.name}</Link>
                    </li>
                ))
            }
        
            <div className="relative group">
                <div>
                    <li><a href="" className="flex gap-3 hover:text-[#009F7F]"><span>Pages</span><span className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 7.2" width="12" height="7.2"><path d="M6.002 5.03L10.539.265a.826.826 0 011.211 0 .94.94 0 010 1.275l-5.141 5.4a.827.827 0 01-1.183.026L.249 1.545a.937.937 0 010-1.275.826.826 0 011.211 0z" fill="currentColor"></path></svg></span></a></li>
                </div>

                <div className="absolute mt-2 opacity-0 top-full left-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:visible invisible transition-all duration-300 ease-out bg-white z-50 w-[250px] h-auto rounded-b-lg shadow-lg shadow-gray-900/50%">
                    <ul className="flex flex-col gap-4 mt-1 px-5 py-7">
                        {
                            pagesDropdown.map((dropdownmenu, index) => (
                                <li key={index}>
                                    <Link to={dropdownmenu.link} className="inline-block hover:text-[#009F7F] transform transition-all duration-200 ease-in-out hover:translate-x-1 hover:scale-105">{dropdownmenu.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </ul>
    )
}

export default NavbarLinks