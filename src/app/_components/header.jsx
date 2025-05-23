'use client'

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useUser, UserButton } from "@clerk/nextjs"
import Link from "next/link"

function Header(){
    const { user, isSignedIn } = useUser();
    return (
        <div className="p-5 flex justify-between items-center border shadow-sm">
            <div className="flex items-center">
                <Image src={'/money-svgrepo-com.svg'} alt="logo" width={60}  height={60}/>
                <span className="text-orange-400 font-bold text-xl">Trackwise</span>
            </div>
            {isSignedIn ? (<UserButton />) : <div>
                <Link href='/dashboard'>
                    <Button>Dashboard</Button>
                </Link>
                <Link  href='/sign-in'> 
                    <Button>Get Started</Button>
                </Link>
            </div> }
            
        </div>
    )
}

export default Header;