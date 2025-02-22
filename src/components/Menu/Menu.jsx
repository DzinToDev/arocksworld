import React from 'react'
import MenuLeft from './MenuLeft'
import MenuRight from './MenuRight'

const Menu = () => {
  return (
    <div  className='w-full h-screen bg-[#1A1A1A] fixed z-50 text-white top-0 flex overflow-hidden'>
        <MenuLeft  />
        <MenuRight />
    </div>
  )
}

export default Menu