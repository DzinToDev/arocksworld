import React from 'react'
import Tilt from 'react-parallax-tilt';

const MenuLeft = () => {
  return (
    <div className='w-2/3 h-full py-10 px-12 overflow-hidden'>
        <Tilt className='w-full h-full  relative'>
        <img className='h-full w-full object-cover object-center absolute opacity-20 scale-[0.97]' src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="" />
        <img className='h-full w-full object-cover object-center absolute opacity-30 scale-[0.94]' src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="" />
        <img className='h-full w-full object-cover object-center absolute opacity-50 scale-[0.91]' src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="" />
        <img className='h-full w-full object-cover object-center absolute opacity-70 scale-[0.88]' src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="" />
        <img className='h-full w-full object-cover object-center absolute opacity-60' src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop" alt="" />
        </Tilt>
    </div>
  )
}

export default MenuLeft