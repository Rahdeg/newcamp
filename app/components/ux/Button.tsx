import { cn } from '../../lib/utils';
import { cva ,VariantProps} from 'class-variance-authority';
// import { Loader2 } from 'lucide-react';
import React, { ButtonHTMLAttributes, FC } from 'react'

export const buttonVariants = cva("active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
{
    variants:{
        variant:{
            default:'bg-slate-900 text-white bg-[#45269C] hover:bg-slate-800',
            black:"bg-black text-white" ,
            white:'bg-[#F4F6F8] text-[#858A93]',
            dotted:'bg-[#D5D5D5] text-[#7D8088] border border-gray-500 border-dashed',
        },
        size:{
            default:'h-10 py-2 px-4',
            sm:"h-9 px-2 ",
            lg:"h-11 px-8"

        }
    },
    defaultVariants:{
        variant:'default',
        size:'default',
    }
}
)


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,VariantProps<typeof buttonVariants> {
    isLoading?:boolean
}

const Button: FC<ButtonProps> = ({children,isLoading,className,variant,size, ...props}) => {
  return <button {...props} className={cn(buttonVariants({variant,size,className}))}>
    {/* {isLoading ? <Loader2 className='mr-2 h-4 w-4 animate-spin'/> : null} */}
    {children}
  </button>
}

export default Button;