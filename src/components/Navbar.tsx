'use client'

import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'

import classes from '@/styles/navbar.module.css'

interface Props {
    page: boolean,
    setPage: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar:React.FC<Props> = (props) => {

    const user = useSelector((state: any) => state.user.user)

    return (
        <nav className = {classes.nav}>
            <div className = {classes.left}>
                <h1 className = {classes.logo}>
                    Nxt-Users
                </h1>
                <p 
                    onClick = {() => {props.setPage(true)}}
                    className = {`${(props.page === true)? classes.active:''}`}
                >
                    Users
                </p>
                <p 
                    onClick = {() => {props.setPage(false)}}
                    className = {`${(props.page === false)? classes.active:''}`}
                >
                    Saved Users
                </p>
            </div>
            <div className = {classes.right}>
                <Image 
                    src={user.image}
                    alt = "google logo"
                    width = "35"
                    height = "35"
                />
                <p>{user.name}</p>
            </div>
        </nav>
    )
}

export default Navbar