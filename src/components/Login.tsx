"use client"

import React from 'react'
import Image from 'next/image'
import {useDispatch, useSelector } from 'react-redux';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation';

import { auth, provider } from '@/utils/firebase'
import { userActions } from '@/store/userSlice';

import classes from "@/styles/login.module.css"

const Login:React.FC = () => {

    const dispatch = useDispatch();
    const router = useRouter(); 
    const userData = useSelector((state:any) => state.user.user)   

    if(userData !== null)
        router.replace("/dashboard/users")

    const loginUser = async () => {
        try {
            const res = await signInWithPopup(auth,provider)   
            const cred = GoogleAuthProvider.credentialFromResult(res);
            const token = cred!.accessToken;
            const user = res.user;
            const data:any = await user.toJSON();

            console.log("user");
            console.log(data);

            dispatch(userActions.setUser({
                uid: data.uid,
                email: data.email,
                name: data.displayName,
                image: data.photoURL
            }));

            toast.success("Login Successful!")

        } catch (error) {
            console.log(error);
            toast.error("Something went wrong")
        }
    }

    return (
        <main className = {classes.main}>
            <p className = {classes.heading}>Welcome to <span>Next-Users!</span> Please signIn using your Google account</p>
            <button 
                className = {classes.button}
                onClick = {loginUser}
            >
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

export default Login