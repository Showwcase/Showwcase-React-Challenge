import InputStyle from 'src/components/UI/Input/Input.styled';
import React, { ChangeEvent, FC, useRef, useState } from "react";
import { SelectOption, SchoolType } from "src/utils/types";
import { useContainerRef } from 'src/hooks/useContainerRef';

interface Props {
  type: string;
  name: string;
  value: string | number;
  label?: string;
  error?: boolean;
  disabled?: boolean;
  placeholder?: string;
  isLoading?: boolean;
  isAutocomplete?: boolean;
  autocompleteInput?: object;
  setAutocompleteInput?: React.Dispatch<React.SetStateAction<any>>;
  options?: SelectOption[] | SchoolType[] | null;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<Props> = ({
  type,
  name,
  value,
  label,
  error,
  disabled,
  placeholder,
  isLoading,
  isAutocomplete,
  autocompleteInput,
  setAutocompleteInput,
  options,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [optionsMatch, setOptionsMatch] = useState<SelectOption[] | SchoolType[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const containerRef = useRef<HTMLInputElement>(null);

  //handle autocomplete
  const handleAutocomplete = (e:React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    if (setAutocompleteInput) {
      setAutocompleteInput({...autocompleteInput, [name]: val});
    };

    if (options) {
      setIsOpen(true);

      // Filter the options based on the input value
      const filtered = options.filter((option) =>
        option.name.toLowerCase().includes(val.toLowerCase())
      );
      
      setOptionsMatch(filtered);
    } else {
      setIsOpen(false);
    };
  };

  //handle select options
  const selectOption = (val: SelectOption) => {
    if (setAutocompleteInput) {
      setAutocompleteInput({...autocompleteInput, [name]: val.name});
    };
  };

  //hook for handle container ref to allow users to choose the options by using their keyboard
  useContainerRef(containerRef, isOpen, setIsOpen, highlightedIndex, setHighlightedIndex, optionsMatch, selectOption);

  return (
    <InputStyle>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={isAutocomplete? handleAutocomplete : onChange}
        ref={containerRef}
        tabIndex={0}
      />

      { (isLoading || optionsMatch.length > 0) &&
        <ul className={`options ${isOpen ? "show" : ""}`}>
          { isLoading ? <div className='loader'>Loading...</div> :
            optionsMatch.map((option, index) => (
              <li
                onClick={e => {
                  e.stopPropagation();
                  setIsOpen(false);
                  selectOption(option);
                }}
                onMouseEnter={() => setHighlightedIndex(index)}
                key={index+1}
                className={`option ${index === highlightedIndex ? "highlighted" : ""}`}
              >
                {option.name}
              </li>
            ))
          }
        </ul>
      }

      {error && <p className="error">Input filed can't be empty!</p>}
    </InputStyle>
  )
}

export default Input