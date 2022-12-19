import React from 'react'
import { Avatar } from '../Avatar'
import { Divider } from '../Divider/Divider'
import { DropDown, DropDownMenu } from '../DropDown'
import { Select } from '../Select/Select'
import { SelectOption } from '../Select/SelectOption'

interface NavbarProps {
    children:React.ReactNode;
    spaceAround:"container"| "none" | string; //ส่ง className มาได้เช่น max-w-[40rem]
    className:string | React.HTMLAttributes<HTMLDivElement>;
}
/* .container {
    width: 100%;
}
@media (min-width: 640px) {
    .container {
        max-width: 640px;
    }
}
@media (min-width: 768px) {
    .container {
        max-width: 768px;
    }
} */
export const Navbar: React.FC<Partial<NavbarProps>> = (props) => {
    
    const {children,spaceAround,className} = props;


    const propSpaceAround = () => {
        switch (spaceAround) {
            case "container":
                return "container";
            case "none":
                return "w-full";
            default:
                return spaceAround;
        }
    }

    return (
    <nav className={` ${className ? className :""} text-white bg-gray-800 w-full mx-auto flex justify-center`}>
        <div className={`p-4 sm:px-8 lg:px-12 text-lg ${propSpaceAround()}`}>
            {children}
        </div>

    </nav>
    )
}

/* <div className="flex justify-between">
                <div className="flex gap-4 self-center">
                <h6>option1</h6>
                <h6>option2</h6>
                <h6>option3</h6>
                <h6>option4</h6>
                </div>
                <div className="flex">
                   <div className="flex gap-4 self-center">
                   <DropDown label="select" id="drop1">
                    <DropDownMenu>
                    hello1
                    </DropDownMenu>
                    <DropDownMenu link="home">
                    <h6 className="text-orange-500">hello2</h6>
                    </DropDownMenu>
                   </DropDown>

                   <h6>option5</h6>
                    <h6>option6</h6>
                    <h6>option7</h6>
                   </div>
                    <div className="mx-2 w-[4rem] h-[4rem]">
                    <Avatar rounded={true} className="w-full h-full rounded-full"></Avatar>
                    </div>
                </div>
            </div> */