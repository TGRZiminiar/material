import React, { useEffect, useState } from 'react'
import styles from "./Option.module.css"

export type SelectOption = {
    label : string;
    value : string | number;
}

interface SelectTextFieldProps {
    options: SelectOption[];
    value?:  SelectOption;
    onChange?: (value:SelectOption | undefined) => void;
}

interface State {
    isOpen:boolean;
    hilightedIndex:number;
}

export const Option: React.FC<SelectTextFieldProps> = ({options, value, onChange}) => {
    
    const [state,setState] = useState<State>({
        isOpen:false,
        hilightedIndex:0,
    })

    const clearOption = () => {
        onChange?.(undefined);
    }

    const SelectOption = (option:SelectOption) => {
        if(option !== value) onChange?.(option);
    }

    const isOptionSelected = (option:SelectOption):boolean => {
        return option === value;
    }


    useEffect(() => {
        
        if(state.isOpen) {
            setState({...state,hilightedIndex:0});

        }

    }, [state.isOpen])
    

    return (
    <div 
    onClick={() => setState(prev=>({...prev,isOpen:!prev.isOpen}))}
    onBlur={() => setState({...state,isOpen:false})}  
    tabIndex={0} className={styles.container}>

        <span className={styles.value}>{value?.label}</span>

        <button 
        onClick={e => {
            e.stopPropagation()
            clearOption()
        }} 
        
        className={styles["clear-btn"]}>&times;</button>

        <div className={styles.divider}></div>
        <div className={styles.caret}></div>
        <ul className={`${styles.options} ${state.isOpen ? styles.show : ""}`}>
            {options?.map((option,index) => (
                <li onClick={e => {
                    e.stopPropagation()
                    SelectOption(option)
                    setState({...state,isOpen:false})
                }} 
                onMouseEnter={() => setState((prev) => ({...prev, hilightedIndex:index}))}
                key={option.value} 
                className={`${styles.option} ${isOptionSelected(option) ? styles.selected : ""} ${index === state.hilightedIndex ? styles.highlighted : ""} `}

                >{option.label}</li>
            ))}
        </ul>
    </div>
    )
}