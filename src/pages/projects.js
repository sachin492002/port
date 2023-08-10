import {GiCrossMark} from 'react-icons/gi'
import Link from 'next/link'
import ProjectCard from '../components/projectcard'
const projects = [
  {
    name:"Shopper",
    description:['React','Tailwind','MaterialUi','Redux','Axios','Azure','Redis','CI/CD','NodeJs','ExpressJs'],
    demo: 'https://shopperby4.vercel.app',
    source:'https://github.com/sachin492002/MERN-E-commerce',
    image:'/shopper.png',
},
{
  name:"MuseBox",
  description:['React','Tailwind','Redux','Axios','Music-Streaming'],
  demo: 'https://museboxx.vercel.app',
  source:'https://github.com/sachin492002/musebox',
  image:'/musebox.png',
},

]
const Projects = () => {

  
    
  return(
    <section className='border-t-emerald-60 bg-purple-600 h-[100vh]'>
    <div className='flex fixed w-full bg-black justify-between items-center rounded-b-lg'>
        <h1 className='p-2 text-xl text-center text-white'>Projects</h1>
        <Link href={'/'}><GiCrossMark className='text-3xl p-2 text-white'/></Link>
    </div>
    <div className='project-section flex flex-col  justify-center items-center space-y-5'>
      <h1 className='mt-16 text-4xl text-White'>My Projects</h1>
       <div className='card-container w-full flex flex-col gap-4'>
      { projects.map((project)=><ProjectCard project={project}/>)
        }
       </div>
    </div>
</section>
  )
}
export  default  Projects;
