"use client"
import React, { FC } from 'react'
import HighfidelityCard from '../components/HighfidelityCard'
import Button from '../components/ux/Button'
import Icons from '../lib/Icons'
import UsabilityCard from '../components/UsabilityCard'


interface TodoProps {
  
}

const Todo: FC<TodoProps> = ({  }) => {
  
  
 
  return (
    <div className='flex flex-col px-2'>
     <Button className=' flex items-center justify-between ' variant='white'>
    <p className=' text-xl font-bold'>To Do</p>
    <div className='rounded-md h-4 w-4 bg-black p-3 text-white  flex items-center justify-center'>3</div>
     </Button>
     <div className=' xxl:hidden'>
     <HighfidelityCard icon={Icons.Wslider} image='https://res.cloudinary.com/djdyxth0z/image/upload/v1683469405/%EF%B8%8F_Card-Image_xm1fu2.jpg'/>
     </div>
     
   <UsabilityCard icon={Icons.Wslider}/>
    <Button className='flex items-center justify-center mt-2 gap-3 ' variant='dotted'>
      {Icons.Plus}
      Add Task
    </Button>
    </div>
   
  )
}

export default Todo;