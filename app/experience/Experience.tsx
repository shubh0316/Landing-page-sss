"use client"
import Container from "@component/components/container";
import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Lilcon from "@component/components/Lilcon";


const Details = ({ position, company, companyLink, time, address, work,  }: { position: any, company: any, companyLink: any, time: any, address: any, work: any }) => {

    const ref = useRef(null);

    return (
        <li ref={ref} className="my-8 pt-40 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
            <Lilcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capatalize font-semibold text-2xl">{position}&nbsp;<a href={companyLink}
                    target="_blank"
                    className="text-orange-600 capatilize">@{company}</a></h3>
                <span className="capitalize font-medium text-dark/75">
                    {time} | {address}
                </span>
                <p className="font-mediium w-full">
                  {work}
                </p>
            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <Container>
            <div className="my-64">
                <h2 className="font-semibold text-8xl  w-full text-center">Experience</h2>
                <div ref={ref} className="w-[75%] mx-auto relative">
                    <motion.div style={{ scaleY: scrollYProgress }} className="absolute left-8 right-40 top-40 w-[4px] h-full bg-dark origin-top" />
                    <ul className="w-full flex flex-col items-start justify-between ml-4">
                        <Details
                            position="Web Development Intern" company="Thrift It"
                            companyLink="www.google.com"
                            time="june 2021 - August 2021" address="remote"            
                            work="Successfully handled both frontend and backend development responsibilities during
                            the internship. 
                            Demonstrated proficiency in various web development tasks, including frontend
                            UI/UX design, responsive layout development, backend logic implementation, and database integration.Played a key role in developing a new website, contributing to its design,
                            implementation, and functionality."
                        />
                    </ul>
                    <ul className="w-full flex flex-col items-start justify-between ml-4">
                        <Details
                            position="React Developer Intern" company="The Taan Maan Foundation"
                            companyLink="www.google.com"
                            time="June 2022 - August 2022" address="remote"
                            
                            work="
                            Demonstrated expertise as a React developer during the internship, contributing to
                            the design and implementation of a CRUD application. 
                            Successfully designed and developed functionality for managing user profiles,
                            showcasing proficiency in handling CRUD operations.
                            Actively participated in a team environment, leveraging React skills to deliver a
                            user-friendly web application and contribute to the overall success of the project."
                        />
                    </ul>
                    <ul className="w-full flex flex-col items-start justify-between ml-4">
                        <Details
                            position="Software Developer Intern" company="Watchguard Technologies"
                            companyLink="www.Watchguard.com"
                            time="Feburary 2023 - May 2023" address="In-Office || Noida"
                        
                            work="Employee Management System: Worked on a console-based Employee Management system, taking charge of
                            designing, implementing, and testing various functionalities.
                            Responsibility and Testing: Ensured the successful implementation of the system by assuming responsibility for
                            the design, development, and thorough testing of the functionalities.
                            Hands-On Experience: Gained valuable hands-on experience in developing software solutions using C# and
                            applying SOLID principles."
                        />
                    </ul>
                     <ul className="w-full flex flex-col items-start justify-between ml-4">
                        <Details
                            position="FullStack Developer" company="Logistics Cordinators"
                            companyLink="www.loadlc.com"
                            time="June 2023 - Present" address="remote"
                            work="In my current role, I'm actively engaged in the development of FMS software, where I employ Next.js and Tailwind CSS for the front-end, while Go and gRPC form the backbone of the robust backend. Crafting captivating landing pages is also a part of my portfolio. Ensuring the reliability and functionality of applications through thorough testing is a top priority for me. This comprehensive experience underscores my expertise in full-stack development, UI/UX design, and rigorous quality assurance practices, establishing me as a versatile and dependable asset in the dynamic realm of software development."
                        
                        />
                    </ul>
                </div>           
            </div>

        </Container>
    )
}

export default Experience;