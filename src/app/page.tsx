'use client'

import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import { auth } from '@/utils/firebase'
import { userActions } from '@/store/userSlice'


import { onAuthStateChanged } from 'firebase/auth'

export default function Home() {

  const user = useSelector((state:any) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth,(data) => {
      console.log("effect");
      console.log(data);

      if(data !== null)
        dispatch(userActions.setUser({
          uid: data.uid,
          email: data.email,
          name: data.displayName,
          image: data.photoURL
        }))
    })
  },[])

  return (
    <>
      {!user && <Login/>}
      {user && <Dashboard/>}
    </>
  )
}
