import React from 'react'
import "./port.css"
interface PortFolioProps {

}

export const PortFolio: React.FC<PortFolioProps> = ({}) => {
    return (
    <div>
     <nav className={`text-white bg-gray-800 w-full mx-auto  p-6 sm:px-8 lg:px-12`}>
        <div className={`flex justify-center text-center text-sm md:text-lg lg:text-xl font-bold gap-6 md:gap-12 lg:gap-20`}>
                <h5 className="cursor-pointer hover:underline decoration-pink-400 underline-offset-8 decoration-4"><a href=''>About</a></h5>
                <h5 className="cursor-pointer hover:underline decoration-pink-400 underline-offset-8 decoration-4"><a href=''>Work</a></h5>
                <h5 className="cursor-pointer hover:underline decoration-pink-400 underline-offset-8 decoration-4"><a href=''>Contact</a></h5>
        </div>
    </nav>
    
    <div className=" w-[100vw] h-[40rem] text-xl relative" >
        <img className="w-full h-full" src={"https://wallpaperaccess.com/full/871179.jpg"} />
        <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]">
            <h6 className="font-bold">Chitsanupong Jateassavapirom</h6>
        </div>
    </div>
    
    <div className="">
        hello World
    </div>
        
    </div>
    )
}