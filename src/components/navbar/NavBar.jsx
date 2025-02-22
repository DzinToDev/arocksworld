import React from "react";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between w-full px-7 py-4">
      <NavLogo />
      <NavMenu />
    </div>
  );
};

export default NavBar;
