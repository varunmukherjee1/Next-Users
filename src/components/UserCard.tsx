'use client'

import React, {useState} from 'react'
import Image from 'next/image'
import { doc, setDoc } from "firebase/firestore"; 
import toast from "react-hot-toast"
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

import { User, LoginUser } from '@/utils/types'
import { db } from '@/utils/firebase';

import classes from "@/styles/userCard.module.css"

interface Props {
    obj: User
    type: string
    removeHandler?: (id:number) => void
}

const UserCard:React.FC<Props> = ({obj,type,removeHandler}) => {

    const [loading,setLoading] = useState(false);

    const user:LoginUser = useSelector((state:any) => state.user.user)
    const router = useRouter();

    const saveUser = async () => {
        setLoading(true)
        try {
            const docRef = doc(db,"data",user.uid);
            const res = await setDoc(
                docRef,
                {
                    "users": {
                        [obj.id]:obj
                    }
                },
                { merge: true}            
            )
            setLoading(false)
            toast.success("User Saved!")

        } catch (error) {
            setLoading(false);
            console.log(error);
            toast.error("Something went wrong")
        }
    }

    const removeUser = () => {
        if(removeHandler !== undefined)
            removeHandler(obj.id)
    }

    return (
        <div className = {classes.card}>
            <div className = {classes.img}>
                <Image
                    src = {obj.image}
                    alt = "profile_img"
                    height = "100"
                    width = "100"
                />
            </div>

            <div className = {classes.details}>
                <p><strong>Name</strong>: {obj.name}</p>
                <p><strong>Email</strong>: {obj.email}</p>
                <p><strong>DOB</strong>: {obj.dob}</p>
            </div>

            {type === "fetch" && <button onClick = {saveUser}>{loading? "Saving...":"Save"}</button>}
            {type === "contact" && <button onClick = {removeUser} className = {classes.remove}>Remove</button>}
        </div>
    )
}

export default UserCard