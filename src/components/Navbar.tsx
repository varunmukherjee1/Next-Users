'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter,usePathname } from 'next/navigation'

import classes from '@/styles/navbar.module.css'

const Navbar = () => {

    const router = useRouter();
    const pathname = usePathname();

    const routeUsers = () => {
        router.push('/dashboard/users')
    }

    const routeSavedUsers = () => {
        router.push('/dashboard/saved_users')
    }

    return (
        <nav className = {classes.nav}>
            <div className = {classes.left}>
                <h1 className = {classes.logo}>
                    Nxt-Users
                </h1>
                <p 
                    onClick = {routeUsers}
                    className = {`${(pathname === '/dashboard/users')? classes.active:''}`}
                >
                    Users
                </p>
                <p 
                    onClick = {routeSavedUsers}
                    className = {`${(pathname === '/dashboard/saved_users')? classes.active:''}`}
                >
                    Saved Users
                </p>
            </div>
            <div className = {classes.right}>
                <Image 
                    src={"/google_logo.svg"}
                    alt = "google logo"
                    width = "35"
                    height = "35"
                />
                <p>Varun</p>
            </div>
        </nav>
    )
}

export default Navbar