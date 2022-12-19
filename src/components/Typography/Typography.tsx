import React from 'react'

interface TypographyProps {
    children:React.ReactNode;
    className:string | React.HTMLAttributes<HTMLElement>
    variant:
    "h1"    | 
    "h2"    | 
    "h3"    | 
    "h4"    | 
    "h5"    | 
    "h6"    | 
    "span"  | 
    "p"     | 
    "subtitle1" | 
    "subtitle2" |
    "body1" |
    "body2" |
    null
}


export const Typography: React.FC<Partial<TypographyProps & {variant:string}>> = (props) => {

    const transFormVariant = () => {
        switch (props.variant) {
            case "h1":
                return "font-light text-[6rem] leading-[1.167] tracking-[-0.01562em]"
            case "h2":
                return "font-light text-[3.75rem] leading-[1.2] tracking-[-0.00833em]"
            case "h3":
                return "font-[400] text-[3rem] leading-[1.167] tracking-[0em]"
            case "h4":
                return "font-[400] text-[2.125rem] leading-[1.235] tracking-[0.00735em]"
            case "h5":
                return "font-[400] text-[1.5rem] leading-[1.334] tracking-[0em]"
            case "h6":
                return "font-[500] text-[1.25rem] leading-[1.6] tracking-[0.0075em]"
            case "subtitle1":
                return "font-[400] text-[1rem] leading-[1.75] tracking-[0.00938em]"
            case "subtitle2":
                return "font-[500] text-[0.875rem] leading-[1.57] tracking-[0.00714em]"
            case "body1":
                return "font-[400] text-[1rem] leading-[1.5] tracking-[0.00938em]"
            case "body2":
                return "font-[400] text-[0.875rem] leading-[1.43] tracking-[0.01071em]"

            default:
                return "font-[400] text-[1rem] leading-[1.5] tracking-[0.00938em]"
        }
    }

    return (
   
      <div className={`${typeof props.className === "string" ? props.className : ""} ${transFormVariant()} mb-[0.35em]`}>
        {props.children}
      </div>
   
    )
}