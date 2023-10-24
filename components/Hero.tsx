import React from "react"
import Container from "./container"
import software from "../assets/software2.png";
import Developer from "../assets/developer-pic-1.png";
import Image from "next/image";
import AnimatedText from "./AnimatedText";
import Link from "next/link";
import bulb from "../assets/bulb.svg";



const Hero = () => {

    return (
        <>       <Container>         
                     <div className="w-full h-full inline-block z-0 p-20 mt-10 overflow-x-hidden">
                    <div className="flex items-center justify-between w-full h-full">
                        <div className="w-1/2">
                            <Image src={Developer} alt="portfolio" className='w-full h-auto' />
                        </div>
                        <div className='overflow-hidden flex flex-col items-center self-center'>      
                            <AnimatedText text={"Turning Vision Into Reality with Code."}  className=" text-4xl md:text-8xl text-left"/>
                            <p className="pt-5 text-lg md:text-xl  font-medium sm:space-y-5">
                            As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
                            </p>
                            <div className="flex  items-center self-start mt-5">
                             <Link href="/resume.pdf" target={"_blank"}
                             className="flex items-center bg-dark text-light p-2.5 px-6 rounded-xl text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparen hover:border-dark"
                             download={true}>
                                Resume
                                </Link> 
                             <Link href="https://github.com/shubh0316" target={"_blank"}
                             className="ml-4  text-lg font-medium capitalize text-dark underline">
                                Github
                             </Link>    
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="flex flex-row-reverse pb-40">
                   <Image src={bulb} alt="bulb" className="w-20 h-10 " />
                </div> */}
                </Container>

        </>
    )
}
export default Hero;