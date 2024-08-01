import React, { FC, ChangeEvent, useState } from "react";
import styles from './style.module.css';

interface CInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  padding?: string;
  image?: string;
}

export const CInput: FC<CInputProps> = ({ placeholder, value, onChange, image }) => {
  const [active, setActive] = useState(false);

  const handleButtonClick = () => {
    setActive(!active);
  };

  return (
    <form className={styles.form}>
        <input type="text" className={styles.input} />
        <img src={image} alt="" className={styles.fa} />
    </form>
  );
};
