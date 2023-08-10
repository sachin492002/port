import {GiCrossMark} from 'react-icons/gi'
import { Document, Page } from "react-pdf";
import Link from 'next/link'
const About = () => {
    return(
        <section className='page-m border-t-emerald-600 bg-black'>
            <div className='flex  bg-black justify-between items-center rounded-b-lg'>
                <h1 className='p-2 text-xl text-center text-white'>Resume</h1>
                <Link href={'/'}><GiCrossMark className='text-3xl p-2 text-white'/></Link>
            </div>
            <object data="https://sachin4u.vercel.app/Resume.pdf" type="application/pdf" width="100%" height="100%">
      <p>Check It out here <a href="https://sachin4u.vercel.app/Resume.pdf">Resume</a></p>
  </object>
        </section>
    )
}
export  default  About;
