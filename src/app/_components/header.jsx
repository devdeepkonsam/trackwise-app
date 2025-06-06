'use client'

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useUser, UserButton } from "@clerk/nextjs"
import Link from "next/link"

function Header() {
    const { user, isSignedIn } = useUser();
    return (
        <div className="p-5 flex justify-between items-center border shadow-sm">
            <div className="flex items-center">
                <Link href="/dashboard" className="flex items-center gap-2">
                    <Image src={'/logo.svg'} alt="logo" width={50} height={50} />
                    <span className="font-bold text-xl" style={{ color: "#14b8a6" }}>TrackWise</span>
                </Link>
            </div>
            {isSignedIn ? (
                <UserButton />
            ) : (
                <div className="flex gap-3 items-center">
                    <Link href='/sign-in'>
                        <Button variant="outline" className="rounded-full">Dashboard</Button>
                    </Link>
                    <Link href='/sign-up'>
                        <Button className="rounded-full">Get Started</Button>
                    </Link>
                </div>
            )}
        </div>
    )
}

export default Header;