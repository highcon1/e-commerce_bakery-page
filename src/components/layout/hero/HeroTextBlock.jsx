import React from 'react'
import HeroTitle from '../../ui/HeroTitle';
import Paragraph from '../../ui/Paragraph';

const HeroTextBlock = ({variant}) => {
    const base = "absolute left-1/2 -translate-x-1/2 flex flex-col items-center text-center";
  return (
    <div className={`${base} ${variant === 'lg' ? "top-55 gap-8" : "top-30 space-y-4"}`}>
        <HeroTitle className={variant === 'lg' ? "text-3xl font-bold" : "text-4xl font-bold"}
            title="Get Your Bakery Items Delivered"></HeroTitle>
        <Paragraph className={variant === 'lg' ? "text-[clamp(14px,16px,24px)]" : "text-lg font-normal"} 
            text="Get your favorite bakery items baked and delivered to your doorsteps at any time"></Paragraph>
    </div>
  )
}

export default HeroTextBlock