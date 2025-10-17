import React from 'react'
import HeroImage from './HeroImage'
import HeroTextBlock from './HeroTextBlock'
import HeroSearchBar from './HeroSearchBar'
import FloatingCart from './FloatingCart'

const MiniHero = () => {
  return (
    <div className='hidden lg:flex xl:hidden'>
        <HeroImage variant="lg">
            <HeroTextBlock variant="lg" />
            <HeroSearchBar variant="lg" />
            {/* <FloatingCart /> */}
        </HeroImage>
    </div>
  )
}

export default MiniHero