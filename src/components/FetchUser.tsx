'use client'

import React,{useState} from 'react'

import { User } from '@/utils/types'
import UserCard from '@/components/UserCard'

import classes from '@/styles/userPage.module.css'

const FetchUsers:React.FC = () => {

    const [users,setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(false);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const res = await fetch('https://random-data-api.com/api/v2/users?size=5')
            const data = await res.json();
            setLoading(false);

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
                <p>Fetch Users</p>
            </button>
            <div className = {classes.users}>
                {loading &&
                    <p className = {classes.status}>Loading ...</p>
                }
                {!loading && users.length === 0 && 
                    <p className = {classes.status}>No Users !</p>
                }
                {users.map((val) => (
                    <UserCard obj = {val} key = {val.id}/>
                ))}
            </div>
        </section>
    )
}

export default FetchUsers

// {
//     id: 9113,
//     name: 'John Cena',
//     email: "dot.durgan@email.com",
//     image: "https://robohash.org/aliquidlaudantiumullam.png?size=300x300&set=set1",
//     dob: "1966-01-16"
// }