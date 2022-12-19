import React from 'react'

interface AvatarProps {
    src:string;
    rounded:boolean;
    className:string | React.HTMLAttributes<HTMLDivElement>;
}

export const Avatar: React.FC<Partial<AvatarProps>> = (props) => {
    
    const {src, rounded, className} = props;
    return (
        
        <img    
         src={`${src ? src : "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"}`}
         className={`
         rounded-${typeof(rounded) === 'boolean' && rounded === true ? "full" : "lg"} w-full h-full text-transparent text-center object-cover
         ${className ? className : ""}
         `}
         alt="Avatar"
         />
    
    )
    
}