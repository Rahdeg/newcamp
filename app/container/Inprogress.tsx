"use client"
import React, { FC, useEffect, useState } from 'react'
import HighfidelityCard from '../components/HighfidelityCard'
import Button from '../components/ux/Button'
import Icons from '../lib/Icons'



interface InprogressProps {
  
}

const Inprogress: FC<InprogressProps> = ({  }) => {
  
  return (
    <div className='flex flex-col px-2'>
    <Button className=' flex justify-between' variant='white'>
   <p className='text-xl font-bold'>In progress</p>
   <div className='rounded-md h-4 w-4 bg-black p-3 text-white  flex items-center justify-center'>1</div>
    </Button>
    <HighfidelityCard icon={Icons.Oslider} image='https://res.cloudinary.com/djdyxth0z/image/upload/v1683469405/%EF%B8%8F_Card-Image_1_k3ujbf.jpg'/>
    <Button className='flex items-center justify-center mt-2 gap-3 ' variant='dotted'>
      {Icons.Plus}
      Add Task
    </Button>
   </div>
  
  )
}

export default Inprogress;