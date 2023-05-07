'use client'

import { Transition, Dialog } from '@headlessui/react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { FC, Fragment, useEffect, useState } from 'react'
import Button from './ux/Button'
import Icons from '../lib/Icons'
import IconText from './IconText'
import useMobile from '../hooks/useMobile'


interface MobileChatLayoutProps {
  
}

const MobileChatLayout: FC<MobileChatLayoutProps> = ({ }) => {
    const useMobileView = useMobile()
   

  
  return (
   
     
      <Transition.Root show={useMobileView.isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={useMobileView.onClose}>
          <div className='fixed inset-0' />

          <div className='fixed inset-0 overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
              <div className='pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10'>
                <Transition.Child
                  as={Fragment}
                  enter='transform transition ease-in-out duration-500 sm:duration-700'
                  enterFrom='-translate-x-full'
                  enterTo='translate-x-0'
                  leave='transform transition ease-in-out duration-500 sm:duration-700'
                  leaveFrom='translate-x-0'
                  leaveTo='-translate-x-full'>
                  <Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
                    <div className='flex h-full flex-col overflow-hidden bg-[#1D1042] py-6 shadow-xl'>
                      <div className='px-4 sm:px-6'>
                        <div className='flex items-start justify-between'>
                          <Dialog.Title className='text-base font-semibold leading-6 text-gray-900'>
    <Button className='flex  items-center justify-center gap-3'>
     {Icons.Logo}
      Welcome Raheem
  </Button>
                          </Dialog.Title>
                          <div className='ml-3 flex h-7 items-center'>
                            <button
                              type='button'
                              className='rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                              onClick={() => useMobileView.onClose()}>
                              <span className='sr-only'>Close panel</span>
                              <X className='h-6 w-6' aria-hidden='true' />
                            </button>
                          </div>
                        </div>
                      </div>
                      <nav className='flex flex-1 flex-col mt-4'>
    <ul role='list' className='flex flex-1 flex-col gap-y-7'>
    <li className='mx-4' onClick={() => useMobileView.onClose()}>
      <Link href='/dashboard'>
      <IconText icon={Icons.Dashboard} text='Dashboard' bg='bg'/>
      </Link>
    </li>
    <li className='mx-4' onClick={() => useMobileView.onClose()}>
      <Link href='/dashboard/settings'>
      <IconText icon={Icons.settings} text='Settings' bg='bg' />
      </Link>
      </li>
    <li className='mx-4' onClick={() => useMobileView.onClose()}>
      <Link href='/dashboard/activities'>
      <IconText icon={Icons.Activities} text='Activities' bg='bg' />
      </Link>
      </li>
    <li className='mx-4' onClick={() => useMobileView.onClose()}>
      <Link href='/dashboard/users'>
      <IconText icon={Icons.User} text='Users' bg='bg' />
      </Link>
      </li>
    <li className='mx-4' onClick={() => useMobileView.onClose()}>
      <Link href='/dashboard/addUsers'>
      <IconText icon={Icons.AddUser} text='Added user' bg='bg' />
      </Link>
      
      </li>
    <li className='mx-4' onClick={() => useMobileView.onClose()}>
      <Link href='/dashboard/affiliates'>
      <IconText icon={Icons.Affiliate} text='Affiliate' bg='bg' />
      </Link>
      </li>
    <li className=' border-b-2 mt-2'/>
    <li className='mx-4' onClick={() => useMobileView.onClose()}>
      <Link href='/dashboard/profile'>
      <Button  className='  md:hidden'>
      ADD MEMBERS
    </Button>
      </Link>
      </li>
    
    <li className='mx-4' onClick={() => useMobileView.onClose()}>
      <Link href='/dashboard/profile'>
      <IconText icon={Icons.Logo} text='Profile'  />
      </Link>
      </li>
    <li className='mx-4' onClick={() => useMobileView.onClose()}>
      <Link href='/dashboard'>
      <IconText icon={Icons.User} text='Logout' />
      </Link>
      </li>
    <li className='-mx-6 mt-auto flex items-center justify-center' onClick={() => useMobileView.onClose()}>
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
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
  )
}

export default MobileChatLayout