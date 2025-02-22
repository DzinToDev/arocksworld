import React, { useRef } from "react";
import NavBar from "../navbar/NavBar";
import CenterText from "../center/CenterText";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Home = () => {
  const homeRef = useRef(null);

  const pageRef = useRef(null);

  useGSAP(() => {
    gsap.to(homeRef.current, {
      y: "-100%",
      duration: 1,
      delay: 1.8,
      rotate: 0,
    });
    gsap.from(pageRef.current, {
      y: 50,
      duration: 1,
      delay: 1.8,
      opacity: 0,
      scale: 1.05,
    });
  });
  return (
    <div className="h-screen relative">
      <div
        ref={homeRef}
        className="h-screen bg-[#333] w-full z-10 absolute"
      ></div>
      <div
        ref={pageRef}
        className="w-full h-screen text-zinc-100 bg-[url(https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop)] bg-cover bg-center relative"
      >
        <NavBar />
        <CenterText />
      </div>
    </div>
  );
};

export default Home;
