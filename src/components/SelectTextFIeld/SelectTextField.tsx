import React, { useEffect, useRef, useState } from "react";
import styles from "./SelectTextField.module.css";

export type SelectOption = {
  label: string;
  value: string | number;
};

type SingleSelectProps = {
  multiple?: false;
  value?: SelectOption;
  onChange?: (value: SelectOption | undefined) => void;
};

type MultiSelectProps = {
  multiple: true;
  value: SelectOption[];
  onChange?: (value: SelectOption[] | undefined) => void;
};

type SelectTextFieldProps = {
  options: SelectOption[];
} & (SingleSelectProps | MultiSelectProps);

interface State {
  isOpen: boolean;
  hilightedIndex: number;
}

export const SelectTextField: React.FC<SelectTextFieldProps> = ({
  multiple,
  options,
  value,
  onChange,
}) => {


    const containerRef = useRef<HTMLDivElement>(null);

  const [state, setState] = useState<State>({
    isOpen: false,
    hilightedIndex: 0,
  });

  const clearOption = () => {
    multiple ? onChange?.([]) : onChange?.(undefined);
  };

  const SelectOption = (option: SelectOption) => {
    if (multiple) {
      if (value.includes(option)) {
        onChange?.(value.filter((o) => o !== option));
      } else {
        onChange?.([...value, option]);
      }
    } else {
      if (option !== value) onChange?.(option);
    }
  };

  const isOptionSelected = (option: SelectOption): boolean => {
    return multiple ? value.includes(option) : option === value;
  };

  useEffect(() => {
    if (state.isOpen) {
      setState({ ...state, hilightedIndex: 0 });
    }
  }, [state.isOpen]);

  useEffect(() => {
    const handler = (e:KeyboardEvent) => {
        if(e.target != containerRef.current) return;
        switch (e.code) {
            case "Enter":
            case "Space":
                setState(prev=>({...prev,isOpen:!prev.isOpen}))
                if(state.isOpen) SelectOption(options[state.hilightedIndex])
                break;
            case "ArrowUp":
            case "ArrowDown":{
                if(!state.isOpen){
                    setState(prev=>({...prev,isOpen:true}));
                    break;
                }

                const newValue = state.hilightedIndex + (e.code === "ArrowDown" ? 1 : -1);
                if(newValue >= 0 && newValue < options.length){
                    setState(prev=>({...prev,hilightedIndex:newValue}));
                }
                break;}
            case "Escape":
                setState((prev) => ({...prev, isOpen:false}));
            }

    }

    containerRef.current?.addEventListener("keydown", handler);

    return () => {
        containerRef.current?.removeEventListener("keydown",handler);
    }
  }, [state.isOpen, state.hilightedIndex, options])
  

  return (
    <div
      ref={containerRef}
      onClick={() => setState((prev) => ({ ...prev, isOpen: !prev.isOpen }))}
      onBlur={() => setState({ ...state, isOpen: false })}
      tabIndex={0}
      className={styles.container}
    >
      <span className={styles.value}>
        {multiple
          ? value.map((v) => (
              <button
                key={v.value}
                onClick={(e) => {
                  e.stopPropagation();
                  SelectOption(v);
                }}
                className={styles["option-badge"]}
              >
                {v.label}
                <span className={styles["remove-btn"]}>&times;</span>
              </button>
            ))
          : value?.label}
      </span>

      <button
        onClick={(e) => {
          e.stopPropagation();
          clearOption();
        }}
        className={styles["clear-btn"]}
      >
        &times;
      </button>

      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${state.isOpen ? styles.show : ""}`}>
        {options?.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              SelectOption(option);
              setState({ ...state, isOpen: false });
            }}
            onMouseEnter={() =>
              setState((prev) => ({ ...prev, hilightedIndex: index }))
            }
            key={option.value}
            className={`${styles.option} ${
              isOptionSelected(option) ? styles.selected : ""
            } ${index === state.hilightedIndex ? styles.highlighted : ""} `}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
