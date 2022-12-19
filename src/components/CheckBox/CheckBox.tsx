import React from 'react'
import { Typography } from '../Typography/Typography';
import "./CheckBox.css"

interface CheckBoxProps {
    children:React.ReactNode;
    checked:boolean;
    readOnly:boolean;
    disabled:boolean;
    onChange:() => void;
}

const CheckBox: React.FC<Partial<CheckBoxProps>> = (props) => {
    
    const {children, checked, readOnly, disabled, onChange} = props


    return (
    <label className="container scale-75">
    {children ? children : ""}
    <input type="checkbox" onChange={onChange} checked={checked != undefined ? checked : true} readOnly={readOnly ? readOnly : false} disabled={disabled ? disabled : false}/>
    <span className="checkmark"></span>
    </label>
    )
}

export default CheckBox;