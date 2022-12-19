import React from 'react'
import { Typography } from '../Typography/Typography'
interface SelectProps {
  
  className :   string | React.HTMLAttributes<HTMLElement>;
  label     :   string;
  children  :   React.ReactNode;
  onChange  :   (e:React.ChangeEvent<HTMLInputElement>) => void;

}

export const Select: React.FC<Partial<SelectProps> & {onChange : (e:React.ChangeEvent<HTMLInputElement>) => void}> = (props) => {
  const {label,className,children,onChange} = props;  
  return (
    <>
        <select 
        className={`
        ${className ? className : ""}
        rounded-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        onChange={(e:any) => onChange(e)}
        >
            <option defaultValue={label}>{label}</option>
            {children}
      </select>
  
    </>
    )
}