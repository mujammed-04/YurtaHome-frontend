import React, { FC, ChangeEvent } from "react";

interface CInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  paddding?: string;
}

export const CInput: FC<CInputProps> = ({ placeholder, value, onChange, className }) => {
  return (
    <div className={className}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};