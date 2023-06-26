'use client'

import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'

// import Login from '@/components/Login'
import { auth } from '@/utils/firebase'
import { userActions } from '@/store/userSlice'

import { onAuthStateChanged } from 'firebase/auth'

export default function Home() {

  const user = useSelector((state:any) => state.user.user);
  const dispatch = useDispatch();
  const router = useRouter();

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

  if(user === null){
    router.replace("/login")
  }
  else{
    router.replace("/dashboard/users")
  }

  return (
    <>
    </>
  )
}
