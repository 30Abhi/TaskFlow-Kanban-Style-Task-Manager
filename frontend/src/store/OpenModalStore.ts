import { create } from "zustand"

interface Store{
    isModalOpen:boolean
    setIsModalOpen:(incomingstate:boolean)=>void
}

export const useOpenModalStore=create<Store>() ((set)=>({
    isModalOpen:false,
    setIsModalOpen:(incomingstate:boolean) => set((state) => ({ isModalOpen: incomingstate   })),
}))

