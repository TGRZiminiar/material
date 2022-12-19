import React from "react";

interface ContainerProps {
  children?: React.ReactNode;
  maxWidth: number;
}

export const Container: React.FC<ContainerProps> = (props) => {
 
  return (
  
      <div className={`my-10 mx-auto px-4 max-w-[${typeof(props.maxWidth) === "number" && props.maxWidth}vw]`}>{props.children}</div>
 
  );
};

//65vw
