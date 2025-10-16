import React from 'react'
import PdCard from '../ui/PdCard'
import allProductsCatls from "../../data/bakeryProducts.js"

const BakeryProducts = () => {
  return (
    <div className='bakery-grid gap-3 px-7'>
        {
            allProductsCatls.map((bkPdObj, index) => {
                const showObj = bkPdObj.discount ? "visible" : "invisible";
                return (<PdCard key={index} discPercent={bkPdObj.discountedP} imgUrl={bkPdObj.url}
                    prdName={bkPdObj.name} price={bkPdObj.price} oldPrice={bkPdObj.discountedPrc}
                    disp={showObj} data-catid={bkPdObj.catId}></PdCard>)
            })
        }
    </div>
  )
}

export default BakeryProducts