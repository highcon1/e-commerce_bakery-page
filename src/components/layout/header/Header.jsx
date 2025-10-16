import BottomNav from "../BottomNav.jsx";
import MobileHeader from "./MobileHeader.jsx";
import TabletHeader from "./TabletHeader.jsx";
import LargeHeader from "./LargeHeader.jsx";
import DesktopHeader from "./DesktopHeader.jsx";
import MiniHero from "../hero/MiniHero.jsx";
import FilterNavbar from '../../ui/FilterNavbar.jsx'

const Header = () => {

  return (
    <>
    <div className="sticky top-0 z-50 bg-white">
      {/* mobile less than 640 */}
      <MobileHeader />
    </div>

    <div className="sticky top-0 z-50 bg-white">
        {/* small screen here 640 - 1024 */}
        <TabletHeader />
    </div>

      <>
      <div className="sticky top-0 z-50 bg-white">
        {/* large screen here 1024 - 1280*/}
        <LargeHeader />
      </div>

      <div className="relative z-30">
        {/* mini hero-main for lg 1024 only  */}
        <MiniHero />
      </div>
      
      <div  className="sticky top-[85px] z-40 bg-white">
        <FilterNavbar className="hidden lg:flex xl:hidden bg-white items-center justify-between px-4 w-full h-[56px]" />
      </div>
      </>

      <div className="sticky top-0 z-50 bg-white">
        {/* extra large screen here */}
        <DesktopHeader />
      </div>

        {/* bottom navbar */}
        <BottomNav />
    </>
  )
}

export default Header