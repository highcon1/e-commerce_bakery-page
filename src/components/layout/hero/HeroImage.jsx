import React from 'react'
import herojpg from '../../../assets/bakery.webp'
import Card from '../../ui/Card'


const HeroImage = ({children, variant}) => {
    if (variant === 'lg') {
        return (
            <Card className="h-[480px] w-full bg-white flex flex-col items-center justify-center gap-5 shadow-sm z-51">
                <img className='w-full h-full relative object-cover' src={herojpg} alt="" />
                {children}
            </Card>
        )
    }
  return (
    <div className='w-full h-full relative'>
        <img loading='lazy' className='w-full h-full object-cover' src={herojpg} alt="hero.jpg" />
        {children}
    </div>
  )
}

export default HeroImage