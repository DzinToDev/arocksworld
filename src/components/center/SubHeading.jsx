import React from 'react'

import { BsPlayCircle } from "react-icons/bs";

const SubHeading = () => {
  return (
    <div className='uppercase text-[12px] font-["a4"] flex items-center justify-between'>
      <div className="s-left-play flex items-center gap-3">
      <BsPlayCircle className='text-4xl'/>
      <p className='uppercase font-["a4"]'>play <br /> the film</p>
      </div>
      <div className="s-right flex items-center gap-17 ">
        <p>creator <br /> curator</p>
        <p>new york <br /> los angeles</p>
      </div>
    </div>
  )
}

export default SubHeading