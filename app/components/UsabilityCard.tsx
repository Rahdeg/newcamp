import React, { FC } from 'react'
import IconText from './IconText';
import Image from 'next/image';
import Icons from '../lib/Icons';

interface UsabilityCardProps {
    icon: React.ReactNode;
}

const UsabilityCard: FC<UsabilityCardProps> = ({ icon }) => {
  return (
    <div className='flex bg-white border rounded-xl mt-5 w-full '>
    <div className="flex flex-col p-3 w-full">
      <div className="flex flex-col">
        <div className="text-black font-semibold text-xl my-1">Usability testing</div>
        <div className="text-[#B8B9BD]">Make clear design and color</div>
      </div>
      <div className="flex flex-col mt-2">
        <div className='flex items-center justify-between'>
        <IconText icon={Icons.Check} text='Progress'/>
        <p className="text-black font-semibold ">2/10</p>
        </div>
        <div className=" w-full my-3 border rounded-3xl">{icon}</div>
        <div className='flex justify-between'>
          <div className='flex items-center justify-center gap-3'>
            <span className='flex items-center justify-center gap-1'> {Icons.Comment} 7</span>
            <span className='flex items-center justify-center gap-1'> {Icons.Chain} 2</span>
          </div>
         <Image src='' alt=''/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default UsabilityCard;