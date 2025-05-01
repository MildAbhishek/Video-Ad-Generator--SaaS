"use client"

import React, { useState, useEffect } from 'react'
import { api } from '@/convex/_generated/api'
import { useUser } from '@clerk/nextjs';
import { useMutation } from 'convex/react';
import { UserDetailContext } from '../context/userDetailContext';

function WorkspaceProvider({children}) {
    
    const newUserMutation = useMutation(api.users.CreateNewUser);
    const {user} = useUser();
    const [userDetail, setUserDetail]= useState()

    const CreateNewUser = async () =>{
        const result = await newUserMutation({
            name:user?.fullName,
            email:user?.primaryEmailAddress?.emailAddress,
            picture:user?.imageUrl
        })
        setUserDetail(result)
        console.log(result)
    }

    useEffect(()=>{
        user&&CreateNewUser();
    }, [user])
  return (
    <UserDetailContext.Provider value={{userDetail, setUserDetail}}>
    <div>{children}</div>
    </UserDetailContext.Provider>
  )
}

export default WorkspaceProvider