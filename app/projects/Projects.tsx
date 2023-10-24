import AnimatedText from "@component/components/AnimatedText";
import Container from "@component/components/container";
import { BsGithub } from "react-icons/bs";
import React from "react";


const Projects = () => {
  return (
    <>
    <main className="mb-20 overflow-x-hidden">
         <AnimatedText text={"Projects"} className="text-4xl md:text-8xl text-center mb-10" />
         <div className="flex flex-col md:grid md:grid-cols-3 gap-5 ">
           
            <div className="col-span-1  bg-dark p-10">
                    <h1 className="font-bold text-2xl text-center self-center p-5 text-white">Interpretor in Javascript</h1>
                    <p className="text-white text-center p-5">Interpreter in JS: Developed a custom interpreter in JavaScript, encompassing lexical analysis, parsing, and semantic analysis, with a modular architecture and test-driven development, enabling execution of custom language code.</p>
            </div>
            <div className="col-span-1  bg-dark p-10">
                    <h1 className="font-bold text-2xl text-center self-center p-5 text-white">Social Media application</h1>
                    <p className="text-white text-center p-5">Developed a student-centric social media application featuring personalized dashboards and interactive capabilities with seniors, utilizing the MERN (MongoDB, Express, React, Node.js) stack.</p>
            </div>
          
            <div className="col-span-1  bg-dark p-10">
                    <h1 className="font-bold text-2xl text-center self-center p-5 text-white">Live Cricket Score Prediction App</h1>
                    <p className="text-white text-center p-5">Created a prediction application using ReactJS utilizing Cricinfo API, providing real-time updates on upcoming cricket matches and allowing users to stay informed about match details.</p>
            </div>
         </div>
       </main>
    </>
    
  )
}

export default Projects