import IconText from '@/app/components/IconText';
import Mobile from '@/app/components/Mobile';
import Button from '@/app/components/ux/Button';
import Icons from '@/app/lib/Icons';
import Link from 'next/link';
import React, { FC } from 'react'

interface layoutProps {
    children:React.ReactNode
}

const layout: FC<layoutProps> = ({ children  }) => {
  return (
    <div className='w-full flex border rounded-2xl bg-[#FFFFFF]'>
       <Mobile/>
        <div className=' hidden lg:flex w-72  max-w-xs grow flex-col gap-y-5 overflow-y-auto border-r rounded-l-2xl border-gray-200 bg-[#1D1042] px-6'>
        <Button className='flex mt-10 items-center justify-center gap-3'>
     {Icons.Logo}
      Welcome Raheem
  </Button>
  <nav className='flex flex-1 flex-col mt-4'>
    <ul role='list' className='flex flex-1 flex-col gap-y-7'>
    <li className='mx-4'>
      <Link href='/dashboard'>
      <IconText icon={Icons.Dashboard} text='Dashboard' bg='bg'/>
      </Link>
    </li>
    <li className='mx-4'>
      <Link href='/dashboard/settings'>
      <IconText icon={Icons.settings} text='Settings' bg='bg'/>
      </Link>
      </li>
    <li className='mx-4'>
      <Link href='/dashboard/activities'>
      <IconText icon={Icons.Activities} text='Activities' bg='bg'/>
      </Link>
      </li>
    <li className='mx-4'>
      <Link href='/dashboard/users'>
      <IconText icon={Icons.User} text='Users' bg='bg'/>
      </Link>
      </li>
    <li className='mx-4'>
      <Link href='/dashboard/addUsers'>
      <IconText icon={Icons.AddUser} text='Added user' bg='bg'/>
      </Link>
      
      </li>
    <li className='mx-4'>
      <Link href='/dashboard/affiliates'>
      <IconText icon={Icons.Affiliate} text='Affiliate' bg='bg'/>
      </Link>
      </li>
    <li className=' border-b-2 mt-2'/>
    <li className='mx-4'>
      <Link href='/dashboard/profile'>
      <IconText icon={Icons.Logo} text='Profile' />
      </Link>
      </li>
    <li className='mx-4'>
      <Link href='/dashboard'>
      <IconText icon={Icons.User} text='Logout' />
      </Link>
      </li>
    <li className='-mx-6 mt-auto flex items-center justify-center'>
      <Link href='/dashboard/newproject'>
      <Button size='lg' className=' m-5 items-center justify-center gap-2  bg-[#703EFE]'>
        {Icons.Plus}
        NEW PROJECT
      </Button>
      </Link>
     
    </li>
    </ul>
  </nav>
        </div>
    {children}
    </div>
  )
}

export default layout;