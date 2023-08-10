import React from "react";
import Link from "next/link";

const AppCard = ({app}) => {
  return(
      <Link href={app.link}>
      <div className='w-20 h-20 flex flex-col justify-center items-center'>
          {app.icon}
          <p className='text-white'>{app.name}</p>
      </div>
      </Link>
  )
}
export default AppCard;
