import React from "react";
import LoadingParent from "./components/Loading/LoadingParent";
import Home from "./components/landingPage/Home";

const App = () => {
  return (
    <div className="h-screen w-full bg-[#111111] overflow-hidden">
      <LoadingParent />
      <Home />
    </div>
  );
};

export default App;
