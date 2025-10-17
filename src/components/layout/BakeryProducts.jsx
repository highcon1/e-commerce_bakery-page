import React from 'react'
import PdCard from '../ui/PdCard'

const BakeryProducts = ({products = [], onAddToCart}) => {
  return (
    <div className='bakery-grid gap-3 px-7'>
        {
            products.map((product, index) => {
                const showObj = product.discount ? "visible" : "invisible";
                return (<PdCard key={index} discPercent={product.discountedP} imgUrl={product.url}
                    prdName={product.name} price={product.price} oldPrice={product.discountedPrc}
                    disp={showObj} dataCatId={index} addToCart={onAddToCart} ></PdCard>)
            })
        }
    </div>
  )
}

export default BakeryProducts