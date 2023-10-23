import Image from 'next/image'
import Navbar from "../components/Navbar"
import Hero from '@component/components/Hero'
import About from "./about/about"
import Experience from './experience/Experience'
import Footer from '@component/components/Footer'
import Projects from './projects/Projects'

export default function Home() {
  return (
    <>
     <div className='h-10 text-black'>
      <Navbar /> 
      <Hero />
      <About /> 
      <Experience />
      <Projects />
      <Footer />

     </div>
    </>
  )
}
                     