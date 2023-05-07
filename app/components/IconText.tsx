import React, { FC } from 'react'

interface IconTextProps {
  icon:React.ReactNode
  text:string
  bg?:string
}

const IconText: FC<IconTextProps> = ({ icon, text,bg }) => {
  return (
    <div className="flex items-center space-x-2">
    {icon}
    <span className={ `font-semibold ${bg ? 'text-white':'text-[#7D8088]  text-xs md:text-base'}`}>{text}</span>
  </div>
  )
}

export default IconText;