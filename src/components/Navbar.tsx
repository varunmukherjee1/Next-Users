'use client'

import React,{useState} from 'react'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from 'firebase/auth'

import { userActions } from '@/store/userSlice'
import { auth } from '@/utils/firebase'
import toast from "react-hot-toast"

import classes from '@/styles/navbar.module.css'

interface Props {
    page: boolean,
    setPage: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar:React.FC<Props> = (props) => {

    const [modal,setModal] = useState(false)
    const user = useSelector((state: any) => state.user.user)
    const dispatch = useDispatch()

    const signOutHandler = async () => {
        try {
            const res = await signOut(auth);
            dispatch(userActions.clearUser())
            toast.success("Logged Out")
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong")
        }
    }

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
            <div 
                className = {classes.right}
                onClick = {() => setModal(!modal)}
            >
                <Image 
                    src={user.image}
                    alt = "google logo"
                    width = "35"
                    height = "35"
                />
                <p>{user.name}</p>
                {modal && 
                    <div className = {classes.modal} onClick = {signOutHandler}>
                        <p>Logout</p>
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar