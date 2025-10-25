import LogoImg from "../../ui/Logo.jsx";
import Button from '../../ui/Button.jsx';
import NavbarLinks from './NavbarLinks.jsx';
import { Link } from 'react-router-dom';
import CategoryButton from '../../ui/CategoryButton.jsx';
import ToggleButton from '../../ui/ToggleButton.jsx';
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../../../redux/reducers/themeSlice.js";
import { useEffect } from "react";

const DesktopHeader = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.mode)
    const darkMode = theme === "dark";

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])
    
  return (
    <div className="hidden xl:flex shadow-md w-full px-10 mx-auto h-[83px] items-center justify-between">
        {/* this is the logo and button section of the navbar */}
        <div className="flex items-center gap-4">
            <LogoImg />
            <div>
                <CategoryButton />
            </div>
        </div>

        {/* this is for the right hand side of the navbar -  the links and buttons */}
        <div className="flex gap-10 items-center">
            <NavbarLinks />

            <div className="flex gap-5">
                <Button className="w-[53px] h-[38px] rounded-lg bg-[#019376] font-bold text-white text-[13px]">
                    <Link to="/join">Join</Link>
                </Button>

                <Button className="w-[130px] h-[38px] rounded-lg bg-[#019376] font-bold text-white text-[13px]">
                    <Link to="/sellers">Become a Seller</Link>
                </Button>

                {/* <div>
                    <ToggleButton darkMode={darkMode}
                        onToggle={() => dispatch(toggleMode())} />
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default DesktopHeader