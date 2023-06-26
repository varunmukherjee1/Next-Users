import React from 'react'
import Image from 'next/image'

import { User } from '@/utils/types'

import classes from "@/styles/userCard.module.css"

interface Props {
    obj: User
}

const UserCard:React.FC<Props> = ({obj}) => {

    const saveUser = () => {

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

            <button onClick = {saveUser}>Save</button>
        </div>
    )
}

export default UserCard