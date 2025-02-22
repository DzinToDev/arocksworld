import React from 'react'

const MenuClose = (props) => {
    const menuBarClose = ()=>{
        props.setmenuOpen(false);
    }
  return (
    <div onClick={menuBarClose} className='uppercase font-["a4"] text-end p-6 cursor-pointer text-[12px] hover:opacity-75'>
        close
    </div>
  )
}

export default MenuClose