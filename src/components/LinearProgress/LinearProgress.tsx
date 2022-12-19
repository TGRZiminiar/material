import React from 'react'
import "./linear.css"


export const LinearProgress: React.FC = () => {
    return (
  
        <div className="w-full m-auto">
            <div className="h-1 bg-[rgba(5,114,206,0.2)] w-full overflow-hidden">
                <div className="progress-bar-value"></div>
            </div>
        </div>
   
    )
}