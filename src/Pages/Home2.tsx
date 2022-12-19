import React, { useState } from 'react'
import { SelectOption, SelectTextField } from '../components/SelectTextFIeld/SelectTextField'

type Option = {
    label:string;
    value:any;
}

interface State {
    value:SelectOption | undefined;
    value2:SelectOption[] | undefined;
}


export const Home2: React.FC = ({}) => {
    
    const [state,setState] = useState<State>({ 
        value:options[0],
        value2:[options[0]],
    })
    
    return (
    <>
        <SelectTextField options={options} value={state?.value!} onChange={(opt:SelectOption | undefined) => setState((prev) => ({...prev,value:opt!}))}/> 
    
        <SelectTextField 
        multiple 
        options={options} 
        value={state?.value2!} 
        onChange={(opt:SelectOption[] | undefined) => setState((prev) => ({...prev,value2:opt}))}/> 
    
    </>
    )
}

const options:Option[] = [
    {label: "First", value: 1},
    {label: "Second", value: 2},
    {label: "Third", value: 3},
    {label: "Forth", value: 4},
    {label: "Fifth", value: 5},
  ]