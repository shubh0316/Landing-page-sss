import Image from 'next/image'
import Navbar from "../components/Navbar"
import Hero from '@component/components/Hero'
import About from "./about/about"


export default function Home() {
  return (
    <>
     <div className='h-10 text-black'>
      <Navbar /> 
      <Hero />
      <About /> 
     </div>
    </>
  )
}
                     