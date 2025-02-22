import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React, { useRef } from "react";

const LoadingChild = () => {
  const lineRef = useRef(null);

  const tl = gsap.timeline();

  useGSAP(() => {
    tl.to(lineRef.current, {
      width: "100%",
      duration: 1.3,
      delay: 0.7, 
      ease: "expo.out"
    });
    tl.to(lineRef.current, {
        x:"100%" 
    })
  });

  return <div ref={lineRef} className="w-0 h-full bg-white"></div>;
};

export default LoadingChild;
