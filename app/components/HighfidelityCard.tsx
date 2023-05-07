import Image from 'next/image';
import React from 'react';
import IconText from './IconText';
import type { StaticImageData } from "next/image"
import Icons from '../lib/Icons';

interface Props {
  icon: React.ReactNode;
  image: string
}

const ImageTextIconComponent: React.FC<Props> = ({ icon ,image}) => {
  return (
    <div className='flex bg-white border rounded-xl mt-5'>
    <div className="flex flex-col p-4 w-full">
    <div className=' aspect-square w-full relative overflow-hidden rounded-xl'>
    <Image alt='listing'  fill src={image} className=' object-cover h-full w-full group-hover:scale-110 transition' />
    </div>
      <div className="flex flex-col">
        <div className="text-black font-semibold text-xl my-1">Highfiderlity Design</div>
        <div className="text-[#B8B9BD]">Make clear design and color</div>
      </div>
      <div className="flex flex-col mt-2">
        <div className='flex items-center justify-between'>
        <IconText icon={Icons.Check} text='Progress'/>
        <p className="text-black font-semibold  ">2/10</p>
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
  );
};

export default ImageTextIconComponent;
