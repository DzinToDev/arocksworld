import React from "react";
import LoadingParent from "./components/Loading/LoadingParent";
import Home from "./components/landingPage/Home";
import Menu from "./components/Menu/Menu";

const App = () => {
  return (
    <div className="h-screen w-full bg-[#1A1A1A] overflow-hidden">
      {/* <Menu /> */}
      <LoadingParent />
      <Home />
    </div>
  );
};

export default App;
