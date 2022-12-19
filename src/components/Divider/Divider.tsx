import React from 'react'

interface DividerProps {
    className?: string | React.HTMLAttributes<HTMLElement>

}

export const Divider: React.FC<DividerProps> = (props) => {
    return (
    <div className={`${typeof(props.className) === "string" ? props.className : ""} h-[0.01rem] w-full m-0 mr-[-1px] flex-shrink-0 border-solid bg-[#e4dfdf] `}/>
    )
}