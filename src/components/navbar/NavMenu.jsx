import React from "react";

const NavMenu = (props) => {
  const menuBarOpen = () => {

    props.setmenuOpen(true);
    console.log(props.menuOpen);
  };

  return (
    <div onClick={menuBarOpen} className='text-[10px] font-["a4"] uppercase cursor-pointer'>
      Menu
    </div>
  );
};

export default NavMenu;
