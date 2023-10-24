"use client"
import React from "react";
import {motion} from "framer-motion";

const Skill = ({name, x, y}: {name:any, x:any, y:any}) => {

    return (
        <motion.div className="flex items-center justify-center rounded-full font-semifold bg-dark text-light p-8 shadow-dark cursor-pointer absolute py-3 px-6"          
        whileHover={{scale: 1.05}}
        initial={{x:0, y:0}}
        whileInView={{x:x, y:y}}
        transition={{duration: 1.5}}
        >
         {name}
        </motion.div>
    );
}


const Skills = () => {
    return(
        <>
          <h2 className="font-semibold text-4xl md:text-8xl  mt-64 w-full text-center">Skills</h2>
          <div className="w-full h-screen relative flex items-center justify-center  bg-circular">  
          <motion.div className=" rounded-full font-semifold bg-dark text-light p-8 shadow-dark cursor-pointer"          
          whileHover={{scale: 1.05}}
          >
           Web
          </motion.div>

           <Skill name="HTML" x="20vw" y="-10vw" /> 
           <Skill name="CSS" x="-15vw" y="-5vw" /> 
           <Skill name="Tailwind" x="-5vw" y="-20vw" /> 
           <Skill name="React.js" x="-5vw" y="10vw" /> 
           <Skill name="Next.js" x="20vw" y="-20w" /> 
           <Skill name="Node.js" x="12vw" y="-15vw" /> 
           <Skill name="C++/C" x="10vw" y="5vw" /> 
           <Skill name="C#" x="-5vw" y="-10vw" /> 
           <Skill name="Go" x="-25vw" y="-10vw" />
           <Skill name="HTTPs" x="-25vw" y="5vw" /> 
           <Skill name="grpc" x="-5vw" y="-10vw" />  
          </div>
        </>
    )
}

export default Skills;