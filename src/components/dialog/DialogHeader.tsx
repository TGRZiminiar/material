import React from 'react'
import { Paper } from '../Paper';
import "./dialog.css"
interface DialogHeaderProps {
    children:React.ReactNode;
    className:string | React.HTMLAttributes<HTMLElement>;

}

export const DialogHeader: React.FC<Partial<DialogHeaderProps>> = (props) => {
    return (
    <>
        <div className={`${props.className} p-4 flex`}>
               {props.children}
               <span className="close">&times;</span>
        </div>
     
    </>
    )
}