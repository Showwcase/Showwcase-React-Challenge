import InputStyle from 'src/components/UI/Input/Input.styled';
import React, { ChangeEvent, FC } from "react";

interface Props {
  type: 'text' | 'number' | 'email' | 'password'
  name: string
  value: string | number
  label?: string
  placeholder?: string
  error?: boolean
  disabled?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input: FC<Props> = ({
  type,
  label,
  value,
  name,
  placeholder,
  error,
  disabled,
  onChange,
}) => {
  return (
    <InputStyle>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
      {error && <p className="error">Input filed can't be empty!</p>}
    </InputStyle>
  )
}

export default Input