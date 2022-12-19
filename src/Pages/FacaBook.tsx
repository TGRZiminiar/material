import { FacebookOutlined, HomeOutlined, People } from '@mui/icons-material'
import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Typography } from '../components/Typography/Typography';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import HomeIcon from '@mui/icons-material/Home';
import "./Facebook.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StoreIcon from '@mui/icons-material/Store';
import ExtensionIcon from '@mui/icons-material/Extension';
import { Avatar } from '../components/Avatar';
interface FacaBookProps {

}

export const FacaBook: React.FC<FacaBookProps> = ({}) => {


    //@ts-ignore
    // const elem = document.getElementById("searchBox")!;
    // //@ts-ignore
    // if(elem !== null) {
    //     const realElem:HTMLElement = elem!;
    //     console.log(realElem.activeElement);
    // }

    console.log(document.activeElement)

    return (
    <div className="bg-slate-100 w-screen h-screen" >
    
    <nav className="fixed bg-white max-h-[4rem] w-full shadow-md ">
        <div className="flex justify-between">
            <div className="flex gap-2  p-2">
                <FacebookOutlined className="text-blue-500" style={{fontSize:"3rem"}}/>
                <div className="min-w-[2rem] max-w-[24rem] py-[1.5px] relative">
                    <input id="searchBox" className="rounded-full bg-slate-100  w-full self-center h-full text-md p-2  outline-none  border-none"
                    />
                    <div className="placeholder">
                       <SearchOutlinedIcon />
                        <Typography className="text-gray-400">
                            ค้นหาบน Facebook
                        </Typography>
                    </div>
                </div>
            </div>
            
            <div className="flex gap-4 md:gap-12 lg:gap-20 self-center h-full">
                <button className="h-[4rem] w-[6rem] cursor-pointer border-4 border-white text-blue-600 border-b-blue-500 hover:bg-slate-50">
                    <HomeIcon style={{fontSize:"2rem"}} />
                </button>
                <button className="h-[4rem] w-[6rem] cursor-pointer border-4 border-white text-blue-600 border-b-blue-500  hover:bg-slate-50">
                    <OndemandVideoIcon style={{fontSize:"2rem"}} />
                </button>
                <button className="h-[4rem] w-[6rem] cursor-pointer border-4 border-white text-blue-600 border-b-blue-500  hover:bg-slate-50">
                    <StoreIcon style={{fontSize:"2rem"}} />
                </button>
                <button className="h-[4rem] w-[6rem] cursor-pointer border-4 border-white text-blue-600 border-b-blue-500  hover:bg-slate-50">
                    <People style={{fontSize:"2rem"}} />
                </button>
                <button className="h-[4rem] w-[6rem] cursor-pointer border-4 border-white text-blue-600 border-b-blue-500  hover:bg-slate-50">
                    <ExtensionIcon style={{fontSize:"2rem"}} />
                </button>
               
               
            </div>
            
            <div className="flex">
            <button className="flex rounded-2xl h-[3rem] self-center hover:bg-slate-50 w-full p-2 mr-4">
            <Avatar 
            rounded={true}
            className="w-[2rem] h-[2rem]"
            />
            <Typography variant='span' className="font-medium self-center ml-2">Chitsanupong</Typography>
            </button>
            </div>
        </div>
    </nav>


    </div>
    )
}