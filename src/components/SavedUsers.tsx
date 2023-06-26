'use client'

import React,{useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import toast from "react-hot-toast"
import { doc, getDoc } from "firebase/firestore";

import { User, LoginUser } from '@/utils/types'
import { db } from '@/utils/firebase';
import UserCard from './UserCard';

import classes from "@/styles/savedUsers.module.css"

const SavedUsers:React.FC = () => {

  const user:LoginUser = useSelector((state:any) => state.user.user) 
  const [users,setUsers] = useState<User[]>([])
  const [loading,setLoading] = useState(false)
  const [removing,setRemoving] = useState(true)

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const docRef = doc(db,"data",user.uid)
      const res = await getDoc(docRef)
      setLoading(false)
      let arr = []

      if(res.exists()){
        const data = res.data();
        
        for(const key in data.users){
          arr.push(data.users[key])
        }

        setUsers(arr);
      }

      toast.success("Users fetched");
    } catch (error) {
      console.log(error);
      setLoading(false)
      toast.error("Unable to fetch users")
    }
  }

  useEffect(() => {
    fetchUsers();
  },[])

  const removeHandler = () => {

  }

  return (
    <section className = {classes.sec}>
        <h1 className = {classes.heading}>Users saved by, <span>{user.name}</span></h1>
        <div className = {classes.users}>
            {loading &&
                <p className = {classes.status}>Loading ...</p>
            }
            {!loading && users.length === 0 && 
                <p className = {classes.status}>No Users !</p>
            }
            {users.map((val) => (
                <UserCard obj = {val} key = {val.id} type = "contact"/>
            ))}
        </div>
    </section>
)
}

export default SavedUsers