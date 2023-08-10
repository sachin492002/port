import React from 'react'

export default function ProjectCard({project}) {
  return (
    <div className='inline-flex items-center bg-gradient-to-bl from-purple-600 to-pink-600 rounded-lg'>
        <img src={project.image} alt={project.name} className='h-36 w-1/2 md:w-1/2 '/>
        <div className='w-1/2 flex flex-col mt-10'>
            <h1 className='text-2xl text-white text-center'>{project.name}</h1>
            <div className='inline-flex flex-wrap gap-2' >{
                project?.description?.map((desc)=><button className='text-white mr-2 rounded-full bg-gradient-to-r from-pink-500 to-blue-600 p-2'>{desc}</button>)
}</div>
            
            <div className='flex flex-1 justify-between items-end p-2 md:p-10'>
                <a href={project.demo} className='text-white'><button className='text-white mr-2 rounded-full bg-pink-500 p-2'>Demo</button></a>
                <a href={project.source} className='text-white'><button className='text-white mr-2 rounded-full bg-green-500 p-2'>Source</button></a>
            </div>
            </div>
    </div>
  )
}
