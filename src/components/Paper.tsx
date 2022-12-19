import React from 'react'

interface PaperProps {
    children?: React.ReactNode;
    elevation?:"md" | "lg" | "xl" | "2xl" | undefined;
    style?:React.CSSProperties;
    className?: string | React.HTMLAttributes<HTMLDivElement>;
    onClick?:({...params}) => any;
}


export const Paper: React.FC<PaperProps> = (props) => {
    
    const {children, elevation, className, style, onClick} = props;

    return (
    <div
    style={style}
    className={`rounded-sm p-2 bg-slate-50  text-base leading-relax tracking-[0.02857em] 
    ${typeof(elevation) === "string" ? `drop-shadow-${elevation}` : `drop-shadow`}
    ${typeof(className) === "string" ? className : ""}
    `
    }
    onClick={(e:React.MouseEvent<HTMLElement>) => typeof(onClick) === "function" ? onClick(e) : undefined}
    >
    {children}
    
    </div>
    )
}