import TextAreaStyle from 'src/components/UI/TextArea/TextArea.styled';
import React, { ChangeEvent, FC } from "react";

interface Props {
  name: string;
  value: string;
  label?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const TextArea: FC<Props> = ({
  label,
  value,
  name,
  placeholder,
  onChange,
}) => {
  return (
    <TextAreaStyle>
      <label htmlFor={name}>{label}</label>
      <textarea 
        id={name}
        name={name} 
        value={value}
        spellCheck="false" 
        onChange={onChange}
        placeholder={placeholder}
      ></textarea>
    </TextAreaStyle>
  )
}

export default TextArea