import React from "react";
import {motion, useScroll} from "framer-motion";
import { Ref } from "react";

export default function Lilcon({reference}: {reference: any}) {

const {scrollYProgress} = useScroll (
    {
        target: reference,
        offset: ["center end", "center center"]
    }
)
    return(
        <figure className="absolute -left-5  stroke-dark">
            <svg className="-rotate-90" width="75" height="75" viewBox=" 0 0 100 100">
                <circle cx="75" cy="20" className="stroke-orange-600 stroke-1 fill-none" />
                <motion.circle  cx="75" cy="75" r="20" className="stroke-[5px] fill-light"
                style={{
                    pathLength : scrollYProgress
                }}
                />
                <circle  cx="75" cy="75" r="10" className="animate-pulse stroke-1 fill-orange-600"/>
            </svg>
        </figure>
    )
}

