import React from 'react'

import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'

import Navbar from '@/components/Navbar'

import classes from "@/styles/dashboard.module.css"

interface Props {
  children: React.ReactNode
}

const Dashboard:React.FC<Props> = (props) => {

  const userData = useSelector((state:any) => state.user.user);
  const router = useRouter();

  console.log("dash");
  console.log(userData);

  if(userData === null)
    router.replace("/login");

  return (
    <>
      <Navbar/>
      <main className = {classes.main}>
        {props.children}
      </main>
    </>
  )
}

export default Dashboard