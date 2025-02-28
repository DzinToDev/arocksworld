import React from 'react'
import MenuClose from './MenuClose'
import { motion } from "motion/react"
import { Expo, Power4 } from "gsap";

const MenuRight = (props) => {
  return (
    <div className='w-1/3 h-full uppercase  '>
        <MenuClose menuOpen={props.menuOpen} setmenuOpen={props.setmenuOpen} className="opacity-80"/>
        <div className="meutext h-full pt-10 pb-26 px-24 flex flex-col justify-between">
        <img className='w-8' src="https://arocksworld.com/static/fav/android-chrome.png" alt="" />
        <div>
          <motion.ul
          powe
           initial={{opacity:0}}
           whileInView={{ opacity: 1 }}
           transition={{ duration: 0.7, delay: 0.2 }}
          className=' text-3xl font-["u7"] mb-13 '>
            <li>about</li>
            <li>story</li>
            <li>projects</li>
            <li>releases</li>
          </motion.ul>
        </div>
        <motion.div
         initial={{opacity:0}}
         whileInView={{ opacity: 1 }}
         transition={{ ease: Power4.easeInOut, duration: 0.7, delay: 0.3 }}
        className='text-[0.6vw] font-["a4"] flex flex-col gap-10 opacity-85'>
          <div className=' flex justify-between '>
            <div className='w-1/3 '>

            <span>FOLLOW <br />(AROCK®) </span>
            </div>
            <div className='w-1/3'>
            <span>INSTAGRAM <br />YOUTUBE</span>
            </div>
          </div>
          <div className=' flex justify-between '>
            <div className='w-1/3 '>

            <span>LISTEN <br />(AROCK®) </span>
            </div>
            <div className='w-1/3 '>

            <span>SPOTIFY <br />MIXCLOUD</span>
            </div>
          </div>
          <div className=' flex justify-between'>
            <span className='w-1/2'>GET IN TOUCH  </span>
            <span className='w-1/3'>EMAIL </span>
          </div>
          <div className=' flex justify-between'>
            <div className='flex flex-col w-1/3 '> 
            <span>SAN DIEGO  </span>
            <span>BPM MUSIC </span>
            <span>1600 NATIONAL AVE </span>
            <span>SAN DIEGO, CA 92123 </span>
            </div>
            <div className='flex flex-col w-1/3'>
            <span>LOS ANGELES  </span>
            <span>6255 SUNSET BLVD. </span>
            <span>SUITE #700 </span>
            <span>LOS ANGELES, CA 90028 </span>
            </div>
          </div>
        </motion.div>

        </div>
    </div>
  )
}

export default MenuRight