import React from "react";

interface ButtonProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => any;
  onClick: (e: any | null) => any;
  text: string;
  children: React.ReactNode;
  variant: string;
  disabled: boolean;
  style: React.CSSProperties;
  className: string | React.HTMLAttributes<HTMLDivElement>;
  type: "submit" | "click";
}

export const Button: React.FC<Partial<ButtonProps> & { type: string }> = (
  props
) => {
  return (
    <>
      {props.type === "submit" && (
        <form onSubmit={props.onSubmit}>
          <button
            type="submit"
            className={`inline-flex px-4 py-2 rounded font-medium text-xs leading-relaxed tracking-[0.15em] uppercase cursor-pointer justify-center box-border shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out
      ${props.variant === "contained"
          ? "bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-500 text-white"
          : "bg-inherit hover:bg-slate-50 focus:bg-slate-50 active:bg-slate-100 text-black border-inherit border-[0.5px] "
      } 
      ${
      props.disabled === true
          ? "bg-gray-400 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-400"
          : ""
      }
      ${typeof props.className === "string" ? props.className : ""}
      `}
            disabled={props.disabled}
            onClick={props.onClick}
          >
            {props.children}
          </button>
        </form>
      )}

      {props.type === "click" && (
        <button
          type="button"
          className={`inline-flex px-4 py-2 rounded font-medium text-xs leading-relaxed tracking-[0.15em] uppercase cursor-pointer justify-center box-border shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out
     ${props.variant === "contained"
         ? "bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-500 text-white"
         : "bg-inherit hover:bg-slate-50 focus:bg-slate-50 active:bg-slate-100 text-black border-inherit border-[0.5px] "
     } 
   
     ${props.disabled === true
         ? "bg-gray-400 hover:bg-gray-400 focus:bg-gray-400 active:bg-gray-400"
         : ""
     }
     ${typeof props.className === "string" ? props.className : ""}
     `}
          disabled={props.disabled}
          onClick={props.onClick}
        >
          {props.children}
        </button>
      )}
    </>
  );
};

/*   
    my?: number;
  mx?: number;
  ml?:number;
  mr?:number;
  mt?:number;
  mb?:number;
  py?: number;
  px?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;

    ${props.my && `my-${props.my}`}
     ${props.mx && `mx-${props.mx}`}
     ${props.ml && `ml-${props.ml}`}
     ${props.mr && `mr-${props.mr}`}
     ${props.mt && `mt-${props.mt}`}
     ${props.mb && `mb-${props.mb}`}
     ${props.py && `py-${props.py}`}
     ${props.px && `px-${props.px}`}
     ${props.pl && `pl-${props.pl}`}
     ${props.pr && `pr-${props.pr}`}
     ${props.pt && `pt-${props.pt}`}
     ${props.pb && `pb-${props.pb}`} */
