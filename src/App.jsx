import React, { useState } from "react";
import LoadingParent from "./components/Loading/LoadingParent";
import Home from "./components/landingPage/Home";
import Menu from "./components/Menu/Menu";

const App = () => {
  const [menuOpen, setmenuOpen] = useState(false)
  return (
    <div className="h-screen w-full bg-[#1A1A1A] overflow-hidden">
      <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <LoadingParent />
      <Home menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
    </div>
  );
};

export default App;
