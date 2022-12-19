import React from 'react'
import { Button } from './Button'

interface DropDownProps {
  className:string | React.HTMLAttributes<HTMLDivElement>;
  children:React.ReactNode;
  label:string;
  id:string
}

export const DropDown: React.FC<Partial<DropDownProps> & {id:string, children:React.ReactNode}> = (props) => {

    const {className, children,label,id} = props

    const showDropDown = () :void => {
      const elem = document.getElementById(id);

      const checkHidden:boolean = elem?.classList.contains("hidden")!;
      
      if(checkHidden === true) {
        elem?.classList.add("block");
        elem?.classList.remove("hidden");
      }

      else if(checkHidden === false) {
        elem?.classList.add("hidden");
        elem?.classList.remove("block");
      }
      
    }

    return (
    <>
    <div  className="relative">
      <Button type='click' variant="contained" className={`${className ? className : ""} rounded-none w-[15rem]`} onClick={showDropDown}>
        {label ? label : ""}
      </Button>

      <div id={id} className="absolute left-0 z-10 max-w-max  rounded divide-y divide-gray-100  right-0 hidden flex-right" > 
        <ul className="absolute py-1 text-sm text-gray-700 dark:text-gray-200 dark:bg-gray-700 bg-white shadow" aria-labelledby="dropdownDefault">
          {children}
        </ul>
    </div>
    </div>
    </>
    )
}


interface DropDownMenuProps {
  className : string | React.HTMLAttributes<HTMLDivElement>;
  children  : React.ReactNode;
  link      : string;
}

export const DropDownMenu: React.FC<Partial<DropDownMenuProps> & {children:React.ReactNode}> = (props) => {
  
  const {className, children, link} = props;
  
  return (
  <>
     <li>
        <a href={`${link ? link : "#"}`} className={`${className ? className : ""} block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}>
          {children}
        </a>
      </li>
  </>
  )
}