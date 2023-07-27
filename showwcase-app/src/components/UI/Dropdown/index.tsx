import DropdownStyle from 'src/components/UI/Dropdown/Dropdown.styled';
import { useRef, useState } from "react";
import { SelectOption } from "src/utils/types";
import { useContainerRef } from 'src/hooks/useContainerRef';

type SelectProps = {
  options: SelectOption[];
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
}

export default function Dropdown({ value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);

  function selectOption(option: SelectOption) {
    if (option !== value) onChange(option);
  };

  function isOptionSelected(option: SelectOption) {
    return option.id === value?.id;
  };

  //hook for handle container ref to allow users to choose the options by using their keyboard
  useContainerRef(containerRef, isOpen, setIsOpen, highlightedIndex, setHighlightedIndex, options, selectOption);

  return (
    <DropdownStyle
      ref={containerRef}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen(prev => !prev)}
      tabIndex={0}
    >
      <span className="value">
        {value?.name}
      </span>
      <div className="divider"></div>
      <div className="caret"></div>
      <ul className={`options ${isOpen ? "show" : ""}`}>
        {options.map((option, index) => (
          <li
            onClick={e => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.name}
            className={`option ${
              isOptionSelected(option) ? "selected" : ""
            } ${index === highlightedIndex ? "highlighted" : ""}`}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </DropdownStyle>
  )
}