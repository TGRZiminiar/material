import React from 'react'

interface SelectOptionProps {
    children : React.ReactNode;
    value    : any;
    className:  string;
}

export const SelectOption: React.FC<Partial<SelectOptionProps>& {value : any}> = (props) => {
    
    const {children,value,className} = props

    return (
    <>
    <option 
    className={`${className ? className : ""}`}
    value={value}
    >{children}</option>
    </>
    )
}