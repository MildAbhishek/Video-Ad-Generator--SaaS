'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Sparkles } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

function CreateAd() {
    const [userInput, setUserInput] = useState('')
  return (
    <div className='mt-20 flex items-center justify-center flex-col w-full p-7 border rounded-2xl border-dotted'>
        <div>
            <Image src={'/advertisement.jpg'} alt='image' width={250} height={250} />
        </div>
        <h2 className='font-bold text-2xl text-center'> Create AI Video Ad</h2>
        <p>Turn your ideas into stunning, scroll-stopping videos-- instantly, effortlessly, and without editing skills</p>

        <Input placeholder='Enter the topic or product info' 
            className={'w-lg text-lg mt-5'} 
            onChange={(e)=>{setUserInput(e.target.value)}}
        />
        <Button className={'mt-5 w-lg'}><Sparkles /> Generate</Button>
    </div>
  )
}

export default CreateAd