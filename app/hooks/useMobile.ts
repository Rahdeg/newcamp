import {create} from 'zustand'

interface useMobileStore{
    isOpen: boolean
    onOpen:() => void
    onClose:()=> void
}

const useMobile = create <useMobileStore>((set)=>({
    isOpen: false,
onOpen: () => set({isOpen:true}),
onClose: ()=> set( {isOpen:false})
}))

export default useMobile;