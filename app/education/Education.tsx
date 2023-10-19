"use client"
import Container from "@component/components/container";
import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Lilcon from "@component/components/Lilcon";


const Details = ({ position, company, companyLink, time, address, work }: { position: any, company: any, companyLink: any, time: any, address: any, work: any }) => {

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
                            position="fullStack Developer" company="Logistics Cordinators"
                            companyLink="www.loadlc.com"
                            time="2023-Present" address="remote"
                            work="Working on a team responsible for developing new applications for company's product, including enhancing performance of the softawre by adapting to new technolgies"
                        />
                    </ul>
                    <ul className="w-full flex flex-col items-start justify-between ml-4">
                        <Details
                            position="fullStack Developer" company="Logistics Cordinators"
                            companyLink="www.loadlc.com"
                            time="2023-Present" address="remote"
                            work="Working on a team responsible for developing new applications for company's product, including enhancing performance of the softawre by adapting to new technolgies"
                        />
                    </ul>
                    <ul className="w-full flex flex-col items-start justify-between ml-4">
                        <Details
                            position="fullStack Developer" company="Logistics Cordinators"
                            companyLink="www.loadlc.com"
                            time="2023-Present" address="remote"
                            work="Working on a team responsible for developing new applications for company's product, including enhancing performance of the softawre by adapting to new technolgies"
                        />
                    </ul>
                </div>           
            </div>

        </Container>
    )
}

export default Experience;