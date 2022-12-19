import React from 'react'
import { Divider } from '../Divider/Divider'
import { Paper } from '../Paper'

interface DialogContentProps {
    children:React.ReactNode;
}

export const DialogContent: React.FC<DialogContentProps> = (props) => {
    return (
        <>
        <Divider/>
        <div className={`p-4 max-h-[60%] overflow-y-auto flex-grow flex-shrink flex-wrap break-words`}>
            {props.children}
        </div>
        </>
   
    )
}