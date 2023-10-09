import React from 'react'
import Image from 'next/image'
import pattieFooter from '../../../public/assets/pattie-footer.png'

const Footer:React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-transparent text-black h-16">
      <p>follow amaury on <a target="blank" href="https://www.linkedin.com/in/amaury-lopez-4048671a8/">linkedin</a></p>
      <div className="absolute bottom-0 right-4 overflow-hidden">
       <Image className="w-28 md:w-72 fixed -bottom-14 md:-bottom-36 left-0 pointer-events-none" src={pattieFooter} alt="patty melt" height={40} width={200}></Image>

      </div>
    </div>
  )
}

export default Footer
