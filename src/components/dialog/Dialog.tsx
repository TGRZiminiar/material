import React, { useState } from 'react'
import { Paper } from '../Paper';
import "./dialog.css"
interface DialogProps {
    open: boolean;
    children: React.ReactNode;
    className: string | React.HTMLAttributes<HTMLDivElement>;
    setState : React.Dispatch<React.SetStateAction<any>>
    maxWidth : "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
}

export const Dialog: React.FC<Partial<DialogProps> & {open:boolean, setState:React.Dispatch<React.SetStateAction<any>>}> = (props) => {

    window.onclick = (event) => {
        const modal = document.getElementById("myModal"); 
        //@ts-ignore
        if (event?.target.id as string == modal.id as string) {
            props.setState((prev:any)=>({...prev,open:false}));
        }
    }

    const handleDialogWidth = () => {
        
        switch (props.maxWidth) {
            case "xs":
                return "30%";    
            case "sm":
                return "40%";    
            case "md":
                return "50%";    
            case "lg":
                return "70%";    
            case "xl":
                return "80%";       
            case "2xl":
                return "90%";    
            
            default:
                return "50%";
        }

    }

    return (
   //pt-[6.2rem]
    <div id="myModal" className={`${props.open === true ? "fixed" : "hidden"}  ${typeof(props.className) === "string" ? props.className : ""}  pt- w-full h-[100vh] flex items-center overflow-auto top-0 left-0 bg-[rgba(0,0,0,0.2)] z-50 `}>
        <Paper className={`modal-content min-w-[30vw] relative m-auto p-0 border-gray-400 border-1 max-w-[${handleDialogWidth()}] rounded-sm text-base leading-relax tracking-[0.02857em]`}>
            {props.children}
        </Paper>
    </div>
    
    )
}