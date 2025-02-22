import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef } from "react";

const HeroText = () => {
  const textRef = useRef(null);

  useGSAP(() => {
    let clutter = "";
    const spliteT = textRef.current.textContent.split("");
    spliteT.forEach((e) => {
      clutter += `<span className="inline-block">${e}</span>`;
    });
    textRef.current.innerHTML = clutter;
    gsap.from("h1 span", {
      y: 100,
      duration: 0.5,
      delay: 2,
      stagger: 0.2,
      opacity: 0,
    });
  });

  return (
    <div className=" text-center">
      <h1
        ref={textRef}
        className='text-[21vw] font-black uppercase leading-none font-["u8"] whitespace-nowrap overflow-hidden'
      >
        arock <span></span>
      </h1>
    </div>
  );
};

export default HeroText;
