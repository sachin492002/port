import  React from 'react'
import {VscProject} from "react-icons/vsc";
import {GiSkills} from "react-icons/gi";
import {FcAbout} from "react-icons/fc";
import AppCard from "./appcard";

const Applications = () => {
    const apps= [
        {
            name: 'projects',
            link:'/projects',
            icon: <VscProject className='text-yellow-500 text-5xl'/>
        },
        {
            name: 'skills',
            link:'/skills',
            icon: <GiSkills className='text-yellow-500 text-5xl'/>
        },
        {
            name: 'resume',
            link:'/resume',
            icon: <FcAbout className='text-yellow-500 text-5xl'/>
        },

    ]
  return(
      <div className='flex '>{
      apps.map((app)=>{
          return <AppCard app={app} key={app.name}/>
      })}
      </div>
  )
}

export default  Applications;
