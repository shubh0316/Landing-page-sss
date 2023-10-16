import Link from "next/link";
import logo from "../assets/logo.png";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {


    return (
        <>
            <div>
                <nav className="w-full h-24 shadow-2xl bg-white">

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
                        <div>
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
                                <Link href="/about">
                                    <li className="ml-10 uppercase hover:border-b text-xl">
                                        skills
                                    </li>
                                </Link>

                                <Link href="/about">
                                    <li className="ml-10 uppercase hover:border-b group-hover:transition-all text-xl">
                                        Projects
                                    </li>
                                </Link>
                            </ul>
                        </div>
                        <Link href="/about">
                            <button className="ml-10 uppercase hover:border-b text-xl border border-black rounded-2xl px-4 py-2 hover:bg-black hover:text-white">
                                Contact
                            </button>
                        </Link>
                    </div>

                </nav>
            </div>
        </>

    )
}

