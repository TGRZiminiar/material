import React from 'react'
import "./backdrop.css"
interface BackdropProps {
    loading:boolean
}

export const Backdrop: React.FC<BackdropProps> = (props) => {

    

    return (
    <>
    {props.loading === true ? (
         <div className="loader-wrapper">
         <div className="loader">
             <div className="roller"></div>
             <div className="roller"></div>
         </div>
         <div className="loader loader-2">
             <div className="roller"></div>
             <div className="roller"></div>
         </div>
         <div className="loader loader-3">
             <div className="roller"></div>
             <div className="roller"></div>
         </div>
         </div>
    ) : <></>}
    </>
    )
}