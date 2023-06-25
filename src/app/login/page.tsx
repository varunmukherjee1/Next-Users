"use client"

import React from 'react'
import Image from 'next/image'

import classes from "@/styles/login.module.css"

const page:React.FC = () => {
  return (
    <main className = {classes.main}>
        <p className = {classes.heading}>Welcome to <span>Next-Users!</span> Please signIn using your Google account</p>
        <button className = {classes.button}>
            <Image 
                src={"/google_logo.svg"}
                alt = "google logo"
                width = "40"
                height = "40"
            />
            <p>SingIn with Google</p>
        </button>
    </main>
  )
}

export default page