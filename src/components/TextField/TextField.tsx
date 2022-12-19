import React from 'react'
import "./textfield.css"
interface TextFieldProps {
    className?:string | React.HTMLAttributes<HTMLDivElement>;
    value:any;
    onChange:(e:React.ChangeEvent<HTMLInputElement>) => void;
    type:"standart" | "filled";
    placeholder?:string;
    typeInput?:React.HTMLInputTypeAttribute | "text" ;
    label?:string | null
}   

const TextField: React.FC<TextFieldProps> = (props) => {
    const {value,className,type,onChange,placeholder,typeInput,label} = props;
    
    return (
        <>
        {type === "standart" ? 
        
        <div className="group">      
        <input  type={typeInput} className={`${className ? className : ""} standard-input`}   required placeholder={placeholder} value={value} onChange={onChange}/>
        <span className="bar"></span>
        {label !== null && <label className="head-text">{label}</label>}
        </div>
        :
        <div className="group">      
        <input type="text" className={`${className ? className : ""}  standard-input bg-gray-200`}  required placeholder={placeholder}  value={value} onChange={onChange}/>
        <span className="bar"></span>
        {label !== null && <label className="head-text">{label}</label>}
        </div>
        }

     </>
    )
}

export default TextField;