import pdCatList from '../../data/productCategoryList'
import Card from '../ui/Card'
import Paragraph from '../ui/Paragraph'
import { ArrowLeftOutlineIcon, ArrowRightOutlineIcon } from '../ui/Icons'
import { useState, useRef, useEffect } from 'react'

const ProductCategory = ({onFilter}) => {

    const [selectedCategory, setSelectedCategory] = useState(null); //to know which selected category was clicked and highlight it
    const scrollRef = useRef(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const container = scrollRef.current;
            if (!container) return;

            const { scrollLeft, scrollWidth, clientWidth } = container;
            setAtStart(scrollLeft <= 0);
            setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
        };

        const container = scrollRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
            handleScroll();
        }

        return () => container?.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollByAmount = 300;

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
    }

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: scrollByAmount, behavior: "smooth" });
    }

    const handleFilterClick = (categoryId) => {
        setSelectedCategory(categoryId);
        onFilter(categoryId);
    }

  return (
    <div className='bg-[#F3F4F6] p-7 relative'>
        <div ref={scrollRef} className=' bg-[#F3F4F6] h-auto w-full flex gap-4 overflow-x-auto flex-nowrap scroll-smooth scrollbar-hide'>
            {pdCatList.map((prodObj, index) => {
                const isSelected = selectedCategory === index;
                return (
                    <Card onClick={() =>handleFilterClick(index)} key={index} className={`min-w-[198px] h-[198px] flex flex-col items-center justify-center gap-5 bg-white rounded-md shrink-0 basis-[198px] font-medium cursor-pointer ${isSelected ? "border-1 border-[#009F7F]" : "border-transparent"}`}>
                        <img className='w-[98px] h-[98px]' src={prodObj.url} alt="" />
                        <Paragraph text={prodObj.name}></Paragraph>
                    </Card>
            )})}
        </div>
        {!atStart && (<Card onClick={scrollLeft} className="absolute top-1/2 -translate-y-1/2 shadow-md w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
            <ArrowLeftOutlineIcon className="w-5 h-5" />    
        </Card>)}
        {!atEnd &&(<Card onClick={scrollRight} className="absolute top-1/2 -translate-y-1/2 right-[20px] shadow-md w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center">
            <ArrowRightOutlineIcon className="w-5 h-5" />    
        </Card>)}
    </div>
  )
}

export default ProductCategory