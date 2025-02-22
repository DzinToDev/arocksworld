import React, { useRef } from "react";
import MenuLeft from "./MenuLeft";
import MenuRight from "./MenuRight";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Menu = (props) => {

  const menuRef = useRef(null)
  useGSAP(()=> {
    if(props.menuOpen){
      gsap.to(menuRef.current, {
        top:0
      })
    }
    else{
      gsap.to(menuRef.current, {
        top:"100%"
      })
    }
  },[props.menuOpen])

  return (
    <div ref={menuRef} className="w-full h-screen bg-[#1A1A1A] fixed z-50 text-white top-full flex overflow-hidden">
      <MenuLeft />
      <MenuRight menuOpen={props.menuOpen} setmenuOpen={props.setmenuOpen}/>
    </div>
  );
};

export default Menu;
