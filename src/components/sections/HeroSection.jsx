import React from 'react'
import HeroImage from '../layout/hero/HeroImage'
import HeroTextBlock from '../layout/hero/HeroTextBlock'
import HeroSearchBar from '../layout/hero/HeroSearchBar'
import FloatingCart from '../layout/hero/FloatingCart'

const HeroSection = () => {
  return (
    <div>
        <div className='hidden xl:flex h-[516px] w-full mx-auto items-center justify-center'>
            <HeroImage>
                <HeroTextBlock />
                <HeroSearchBar />
                {/* <FloatingCart /> */}
            </HeroImage>
        </div>
        
    </div>
  )
}

export default HeroSection