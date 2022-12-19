import React from 'react'
import "./accordion.css"
interface AccordionProps {
  children:React.ReactNode;
  className:string;


}

export const Accordion: React.FC<Partial<AccordionProps>> = (props) => {
    return (
    <>

        <div className="w-full">
        <details className="mb-[2rem] pt-[0.5rem] px-[1rem] text-white">
      <summary className="text-xl rounded-t-lg p-2 flex justify-between bg-slate-700 cursor-pointer hover:text-orange-300">
        <h6>Header Accordion</h6>
        <h6>Arrow</h6>
      </summary>
      <div className="text-lg p-2 pl-4 bg-slate-600 rounded-b-lg">
        <p>All meetings will be held remotely.</p>
      </div>
    </details>

    
      </div>
      
     
    </>
    )
}