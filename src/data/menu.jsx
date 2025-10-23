import { BagsIcon, BakeryIcon, BooksIcon, ClothingIcon, DailyNeedsIcon, FurnitureIcon, GroceryIcon, MakeUpIcon, MedicineIcon, GadgetsIcon } from "../components/ui/Icons";

const menu = [
    { svg: <GroceryIcon />, name: "Grocery", path: "/grocery" },
    { svg: <BakeryIcon className="w-5 h-5" />, name: "Bakery", path: "/bakery" },
    { svg: <MakeUpIcon />, name: "Makeup", path: "/makeup" },
    { svg: <BagsIcon />, name: "Bags", path: "/bags" },
    { svg: <ClothingIcon />, name: "Clothing", path: "/clothing" },
    { svg: <FurnitureIcon />, name: "Furniture", path: "/furniture" },
    { svg: <DailyNeedsIcon />, name: "Daily Needs", path: "/daily_needs" },
    { svg: <BooksIcon />, name: "Books", path: "/books" },
    { svg: <GadgetsIcon />, name: "Gadgets", path: "/gadgets" },
    { svg: <MedicineIcon />, name: "Medicine", path: "/medicine" },
]

export default menu;