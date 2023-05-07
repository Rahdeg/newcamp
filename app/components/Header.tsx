import React, { FC } from 'react'
import Button from './ux/Button';
import IconText from './IconText';
import Icons from '../lib/Icons';
import Image from 'next/image';

interface HeaderProps {
  
}

const Header: FC<HeaderProps> = ({  }) => {
  return (
    <div className='flex flex-col space-y-12 mt-10 px-2 md:px-12 mb-8'>
      <div className=' flex  justify-between'>
    <div className=' hidden lg:flex flex-col space-y-2'>
    <h1 className=' text-3xl font-bold xl:text-4xl xxl:text-5xl'>New Campaign Run</h1>
    <p className=' text-[#B8B9BD] leading-4 mt-1 xxl:text-base'>A new campaign launch work for brand new features in May month</p>
    </div>
    <Button variant='black' className=' hidden lg:block'>
      ADD MEMBERS
    </Button>
      </div>
<div className='flex justify-between'>
<div className=' hidden lg:flex relative items-center justify-center gap-2 '>
<Image alt='logo' src='https://res.cloudinary.com/djdyxth0z/image/upload/v1683474988/Profile-stack_o3frbg.png' className=' cursor-pointer' height='100' width='100' priority/>

<p className=' text-[#B8B9BD] text-sm'>8 members</p>
</div>
<div className='flex items-center justify-center gap-3 md:gap-8 lg:gap-10 overflow-x-auto'>
<IconText icon={Icons.Newuser} text='Participants View'/>
<IconText icon={Icons.Eleven} text='Board View'/>
<IconText icon={Icons.Align} text='List View'/>
<IconText icon={Icons.Power} text='Power View'/>
<p>{Icons.Plus}</p>
</div>
</div>
    </div>
  )
}

export default Header;