import Header from '@/app/components/Header';
import Completed from '@/app/container/Completed';
import Inprogress from '@/app/container/Inprogress';
import Todo from '@/app/container/Todo';
import React, { FC } from 'react'

interface pageProps {
  
}

const page: FC<pageProps> = ({  }) => {
  return (
    <div className=' w-full'>
    <Header/>
    <section className=' grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 mb-4'>
    <Todo/>
    <Inprogress/>
    <Completed/>
    </section>
    </div>
  )
}

export default page;