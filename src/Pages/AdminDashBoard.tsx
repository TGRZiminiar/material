import React, { useState } from 'react'
import { Avatar } from '../components/Avatar'
import { Navbar } from '../components/Navbar/Navbar'
import TextField from '../components/TextField/TextField'
import { Typography } from '../components/Typography/Typography'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import {Divider} from "../components/Divider/Divider"
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

interface AdminDashBoardProps {

}

export const AdminDashBoard: React.FC<AdminDashBoardProps> = ({}) => {
    
    const [state,setState] = useState<any>({
        value:0
    })

    const arr = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,4,5,6,7,8,9]

    const handleShowMenu = () => {
        const elem = document.getElementById("sidebar");
        if(!String(elem?.classList).includes("hidden")){
            elem?.classList.add("hidden");
            return;
        }
        else {
            elem?.classList.remove("hidden");
            return;
        }
    }

    return (
    <div>
        <Navbar spaceAround="none" >
            <div className="flex justify-between">
            <Typography variant="h6" className="self-center">LOGO</Typography>
               <div className="">
                <MenuOutlinedIcon className="cursor-pointer" onClick={handleShowMenu} />
               </div>
            </div>
        </Navbar>
            
        <div className="flex relative">
        
        <div id="sidebar" className="hidden md:block bg-gray-800 w-[15rem] fixed h-full left-0 overflow-y-auto">
            {/* Show Admin Info */}
            <div className="bg-gray-900  w-full ">
                <div className="h-auto flex p-[1rem] gap-4 justify-evenly">
                    <div className="w-[4rem] h-[4rem]">
                    <Avatar rounded={true}/>
                    </div>
                    <div className="grid">
                        <Typography variant="body1" className="text-white">UserName</Typography>
                        <Typography variant="body2" className="text-gray-500">Admin</Typography>
                    </div>
                </div>
            </div>
            {/* END Show Admin Info */}

            <div className="text-white grid place-content-center hover:bg-blue-700">
                <div className="flex gap-4 px-4 my-4">
                <DashboardOutlinedIcon fontSize='large'  />
                <Typography variant="body1">DashBoard</Typography>
                </div>
            </div>
            <Divider/>

            {arr.map((a,i)=>(
            <>
            <div className="text-white grid place-content-center hover:bg-blue-700">
            <div className="flex gap-4 px-4 my-4">
            <DashboardOutlinedIcon fontSize='large'  />
            <Typography variant="body1">DashBoard{i}</Typography>
            </div>
        </div>
        <Divider/>
            </>
        ))}
                

        </div>

        <div className="md:ml-[15rem] p-6 w-full">
            <div className="grid md:grid-cols-3 gap-4">

                <div className="flex items-center bg-white shadow-lg mb-8 border-2 border-opacity-100 border-gray-50 p-4">
                    <div className="flex-1">
                        <div className="mb-2 font-bold text-lg">
                            Current Target
                        </div>
                        <div className="text-2xl">
                            $12,190
                        </div>
                        <div className="flex items-center text-sm font-semibold text-green-500 mt-2">
                            31.5%
                            <ArrowUpwardOutlinedIcon/>
                        </div>
                    </div>
                    <div>
                    <PaidOutlinedIcon fontSize='large'/>
                    </div>
                </div>
            </div>
        </div>
        </div>

    </div>
    )
}