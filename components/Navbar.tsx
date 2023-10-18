"use client"
import Link from "next/link";
import logo from "../assets/logo.png";
import Image from "next/image";
import { useState } from "react";
import menu from "../assets/menu.svg";
import { AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";



export default function Navbar() {

    const[menuOpen, setmenuOpen] = useState(false)

    const handleNav =() =>{
        setmenuOpen(!menuOpen)
    }

    return (
        <>
            <div>
                <nav className="w-full h-24 shadow-2xl">

                    <div className="flex justify-between items-center h-full w-full p-8">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="logo"
                                width="90"
                                height="10"
                                className="cursor-pointer"
                                priority
                            />
                        </Link>
                        <div className="hidden sm:flex">
                            <ul className="hidden sm:flex">
                                <Link href="/about">
                                    <li className="ml-10 uppercase hover:border-b text-xl">
                                        about
                                    </li>
                                </Link>
                                <Link href="/about">
                                    <li className="ml-10 uppercase hover:border-b text-xl">
                                        experience
                                    </li>
                                </Link>
                                {/* <Link href="/about">
                                    <li className="ml-10 uppercase hover:border-b text-xl">
                                        skills
                                    </li>
                                </Link> */}

                                <Link href="/about">
                                    <li className="ml-10 uppercase hover:border-b group-hover:transition-all text-xl">
                                        Projects
                                    </li>
                                </Link>
                            </ul>
                        </div>
                        <Link href="/about">
                            <button className="ml-10 uppercase hover:border-b text-xl border border-black rounded-2xl px-4 py-2 hover:bg-black hover:text-white hidden sm:flex">
                                Contact
                            </button>
                        </Link>
                        <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
                  <AiOutlineMenu size={25} />
                </div>  
                </div>
                <div className={
                    menuOpen ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500" : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
                }>
                    <div className="flex w-full items-center justify-end">  
                            <div onClick={handleNav} className="cursor-pointer">
                  <AiOutlineClose size={25} />
                  </div>
                </div> 
                <div className="flex-col py-10 px-8">
                    <ul>
                        <Link href="/about">
                            <li onClick={() => setmenuOpen(false)}
                             className="py-4 cursor-pointer text-lg"
                             >
                               About
                            </li>
                        </Link>
                        <Link href="/about">
                            <li onClick={() => setmenuOpen(false)}
                             className="py-4 cursor-pointer text-lg"
                             >
                               Experience
                            </li>
                        </Link>
                        <Link href="/about">
                            <li onClick={() => setmenuOpen(false)}
                             className="py-4 cursor-pointer text-lg"
                             >
                               Skills
                            </li>
                        </Link>
                        <Link href="/about">
                            <li onClick={() => setmenuOpen(false)}
                             className="py-4 cursor-pointer text-lg"
                             >
                               Projects
                            </li>
                        </Link>
                        <Link href="/about">
                            <li onClick={() => setmenuOpen(false)}
                             className="py-4 cursor-pointer text-lg"
                             >
                               Contact
                            </li>
                        </Link>
                    </ul>

                </div>
                <div className="flex flex-row justify-around pt-10 items-center">
                    <AiOutlineInstagram size={30} className="cursor-pointer" />
                    <AiOutlineGithub size={30} className="cursor-pointer" />
                    <AiOutlineLinkedin size={30} className="cursor-pointer" />
                </div>
                </div>           
                </nav>
            </div>
        </>

    )
}

