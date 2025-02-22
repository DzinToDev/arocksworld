import React from "react";
import LoadingChild from "./LoadingChild";

const LoadingParent = () => {
  return (
    <div className="h-1 fixed z-20 w-full">
      <LoadingChild />
    </div>
  );
};

export default LoadingParent;
