import React, {useEffect, useState} from "react";
import {BsBatteryCharging, BsFillMoonStarsFill, BsFillSunFill, BsVolumeUp} from "react-icons/bs";
import {SiWindows11} from "react-icons/si";
import {AiOutlineSearch, AiOutlineWifi,AiFillCodeSandboxSquare} from "react-icons/ai";
import { ChromeOriginal } from 'devicons-react';
import {SiApplemusic} from "react-icons/si";
import {FaInstagramSquare} from "react-icons/fa";
import {TfiGithub} from "react-icons/tfi";
import Link from "next/link";
const Navbar = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);
  return(
      <section className='navbar flex w-full h-16 flex-row justify-between items-center fixed bottom-0 right-0 left-0 bg-gradient-to-r from-purple-950 to-pink-600'>
          <div className='weather ml-8 inline-flex items-center'>
              {(currentTime.getHours()>6 && currentTime.getHours()< 19)? <BsFillSunFill className='text-4xl text-yellow-500'/>:<BsFillMoonStarsFill className='text-4xl text-yellow-500'/>}
              <div className='flex hidden md:block flex-col'>
                  <p className='text-white'>31°C</p>
                  <p className='text-white'>Mostly Clear</p>
              </div>
          </div>
          <div className='middle inline-flex space-x-4 items-center'>
              <div className='w-14 h-14 flex justify-center items-center hover:backdrop-blur-sm hover:bg-white/10'>
                  <Link href={'/'}><SiWindows11 className='text-blue-400 text-4xl'/></Link>
              </div>
              <div className='hidden md:block'><input className='w-52 h-10 backdrop-blur-sm bg-white/20 rounded-full'/>
                  <AiOutlineSearch className='absolute top-4 text-4xl text-white'/>
              </div>
              <div>
              <div className=' backdrop-blur-sm bg-white/30 absolute top-2 ml-2 w-6 h-6'></div>
                  <div className='backdrop-blur-sm bg-white/10 w-6 h-6'></div>
              </div>
              <Link href={'/'}><ChromeOriginal className='text-blue-500 text-4xl hover:scale-125 transition duration-500' size={40}/></Link>
              <Link href={'/projects'}><AiFillCodeSandboxSquare className='text-blue-500 hidden md:block text-4xl hover:scale-125 transition duration-500'/></Link>
              <a href='https://museboxx.vercel.app' ><SiApplemusic className='text-red-600 text-4xl hover:scale-125 transition duration-500'/></a>
              <a href='https://instagram.com/xo_sachin1'><FaInstagramSquare className='text-pink-200 text-4xl hover:scale-125 transition duration-500'/></a>
              <a href='https://github.com/sachin492002'><TfiGithub className='text-black text-4xl hover:scale-125 transition duration-500'/></a>
          </div>
          <div className='sm:hidden md:inline-flex space-x-4 '>
              <div className='flex flex-col items-center'><p className='font-normal text-white'>ENG</p><p className='font-normal text-white'>US</p></div>
              <div className='inline-flex items-center space-x-2'>
                  <AiOutlineWifi className='text-white text-xl'/>
                  <BsVolumeUp className='text-white text-xl'/>
                  <BsBatteryCharging className='text-white text-xl'/>
              </div>
              <div className='flex flex-col justify-end items-end'>
                  <div className='text-white'>
                  {currentTime.getHours()}:{currentTime.getMinutes()}
                  </div>
                  <div className='text-white'>
                      {currentTime.getDate()}-{currentTime.getMonth()}-{currentTime.getFullYear()}
                  </div>
              </div>
          </div>
      </section>
  )
}
export default Navbar;
