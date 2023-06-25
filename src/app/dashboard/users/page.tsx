'use client'

import React,{useState} from 'react'

import { User } from '@/utils/types'
import UserCard from '@/components/UserCard'

import classes from '@/styles/userPage.module.css'

const Page:React.FC = () => {

    const [users,setUsers] = useState<User[]>([])

    const fetchUsers = async () => {
        try {
            const res = await fetch('https://random-data-api.com/api/v2/users?size=5')
            const data = await res.json();
            console.log(data);

            setUsers(data.map((val:any) => ({
                name: val.first_name + val.last_name,
                id: val.id,
                email: val.email,
                image: val.avatar,
                dob: val.date_of_birth
            })))
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <section className = {classes.sec}>
            <button 
                className = {classes.fetch}
                onClick = {fetchUsers}
            >
                Fetch User
            </button>
            <div className = {classes.users}>
                {users.length === 0 && 
                    <p>No Users !</p>
                }
                {users.map((val) => (
                    <UserCard obj = {val} key = {val.id}/>
                ))}
            </div>
        </section>
    )
}

export default Page