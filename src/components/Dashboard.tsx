import React from 'react'

import { useState } from 'react'

import Navbar from '@/components/Navbar'
import FetchUsers from './FetchUser'
import SavedUsers from './SavedUsers'

import classes from "@/styles/dashboard.module.css"

const Dashboard:React.FC = () => {

    const [fetch,setFetch] = useState(true);

    return (
        <>
            <Navbar page = {fetch} setPage = {setFetch} />
            <main className = {classes.main}>
                {fetch && <FetchUsers/>}
                {!fetch && <SavedUsers/>}
            </main>
        </>
    )
}

export default Dashboard