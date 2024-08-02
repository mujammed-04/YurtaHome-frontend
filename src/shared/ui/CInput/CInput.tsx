import { FC } from "react";

import styles from "./style.module.css";

interface CInputProps {
  image?: string;
}

export const CInput: FC<CInputProps> = ({ image }) => {
  return (
    <form className={styles.form}>
      <input type="text" className={styles.input} />
      <img src={image} alt="" className={styles.fa} />
    </form>
  );
};
