import React from 'react'
import MenuClose from './MenuClose'

const MenuRight = (props) => {
  return (
    <div className='w-1/3 h-full '>
        <MenuClose menuOpen={props.menuOpen} setmenuOpen={props.setmenuOpen}/>
    </div>
  )
}

export default MenuRight