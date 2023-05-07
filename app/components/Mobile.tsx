"use client"
import React, { FC, useCallback, useState } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import Button from './ux/Button';
import MobileChatLayout from './MobileChatLayout';
import useMobile from '../hooks/useMobile';

interface MobileProps {
  
}

const Mobile: FC<MobileProps> = ({  }) => {
    const useMobileView = useMobile()
    
    

   
  return (
    <div className='flex flex-row justify-between fixed w-full z-10 lg:hidden p-2 border-b-[1px] bg-white '>
<div className='flex flex-col'>
    <h1 className=' text-3xl font-bold xl:text-4xl xxl:text-5xl'>New Campaign Run</h1>
<p className=' text-[#B8B9BD] leading-4 mt-1 xxl:text-base'>A new campaign launch work for</p>
    </div>
    <div onClick={()=>useMobileView.onOpen()}
className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'>
    <Button variant='black' className=' hidden md:block lg:hidden'>
      ADD MEMBERS
    </Button>
    <AiOutlineMenu/>
</div>
{
            useMobileView.isOpen && (
                <div className=' absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
                    <div className=' flex flex-col cursor-pointer'>
                        <MobileChatLayout/>
                    </div>
                </div>
            )
        } 
</div>
  )
}

export default Mobile;