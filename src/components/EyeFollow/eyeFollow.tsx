import React from 'react'
import "./eyeFollow.css"

export const EyeFollow: React.FC = () => {
    
    //@ts-ignore
    document.querySelector("body").addEventListener("mousemove", eyeball);
    function eyeball(event:any) {
        'use strict';
        var eye = document.querySelectorAll(".eye");
        eye.forEach(function (eye) {
            let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2)
            let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
            let radian = Math.atan2(event.pageX - x, event.pageY - y);
            let rot = (radian * (180 / Math.PI) * -1) + 270;
            //@ts-ignore
            eye.style.transform  = "rotate("+ rot +"deg)"
        })
    }
   
    return (
    <section>
        <div className="face">
            <div className="eyes">
                <div className="eye"></div>
                <div className="eye"></div>
            </div>
        </div>
    </section>
    )
}