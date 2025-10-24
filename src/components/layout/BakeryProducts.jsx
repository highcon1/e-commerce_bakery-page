import PdCard from '../ui/PdCard'
import {useNavigate, useLocation} from 'react-router-dom';
import { NotFoundIcon } from '../ui/Icons'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../redux/reducers/cartSlice';

const BakeryProducts = ({products = []}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const carts = useSelector((state) => state.carts)
  const cartItems = carts.items;
  const dispatch = useDispatch();


  
  //pagination code here
  const [visibleCount, setVisibleCount] = useState(20);
  useEffect(() => {
    setVisibleCount(20);
  }, [products]);

  //if products returns an empty array
  if (products.length === 0) {
    return(
      <div className='w-full h-full bg-[#F3F4F6] flex flex-col items-center justify-center py-7'>
        <NotFoundIcon />
        We are sorry to inform you that there are no products in these section at the moment.
      </div>
  )}

  const visibleProducts = products.slice(0, visibleCount);

  //function to open detail page
  const openDetailPage = (productId) => {
    navigate(`/product/${productId}`, { state: { background: location } });
  }

  return (
    <>
    <div className='bakery-grid gap-3 px-7 bg-[#F3F4F6]'>
        {
            visibleProducts.map((product) => {
              const showObj = product.discount ? "visible" : "invisible";
              const findProduct = cartItems.find((item) => Number(item.id) === product.id);
              const itemQuantity = findProduct ? findProduct.quantity : 0
                return (<PdCard
                        func={() => openDetailPage(product.id)} 
                        key={product.id} 
                        discPercent={product.discountedP} 
                        imgUrl={product.url}
                        prdName={product.name} 
                        price={product.price} 
                        oldPrice={product.discountedPrc}
                        disp={showObj}  
                        addToCart={() => dispatch(addItemToCart(product))}
                        qtyControl={findProduct}
                        qty={itemQuantity}
                        remFromCart={() => dispatch(removeItemFromCart(product))}
                      />)
                })
        }
    </div>

    {visibleCount < products.length && (
      <div className='flex justify-center bg-[#F3F4F6] py-10'>
        <button 
        onClick={() => setVisibleCount((prev) => prev + 20)}
        className='w-[122px] h-[52px] font-semibold rounded-md text-white bg-[#009F7F] hover:bg-[#019376]'>
          Load more
        </button>
      </div>
    )}
    </>
  )
}

export default BakeryProducts