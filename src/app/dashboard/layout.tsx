import React from 'react'

import Navbar from '@/components/Navbar'

import classes from "@/styles/dashboard.module.css"

interface Props {
  children: React.ReactNode
}

const dashboard:React.FC<Props> = (props) => {
  return (
    <>
      <Navbar/>
      <main className = {classes.main}>
        {props.children}
      </main>
    </>
  )
}

export default dashboard