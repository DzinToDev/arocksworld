import React from "react";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";

const NavBar = (props) => {
  return (
    <div className="flex items-center justify-between w-full px-7 py-4">
      <NavLogo />
      <NavMenu menuOpen={props.menuOpen} setmenuOpen={props.setmenuOpen} />
    </div>
  );
};

export default NavBar;
