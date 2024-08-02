import { FC, useState } from "react";

import styles from "./style.module.css";

interface CFavouriteProps {
  imageSelected: string;
  imageUnselected: string;
  className?: string;
}

export const CFavourite: FC<CFavouriteProps> = ({
  imageSelected,
  imageUnselected,
  className,
}) => {
  const [selected, setSelected] = useState(false);

  const toggleSelected = (e: React.MouseEvent<HTMLDivElement>) => {
    const imgElement = e.currentTarget.querySelector("img");
    if (imgElement) {
      imgElement.classList.add(styles.animate);
      setTimeout(() => {
        imgElement.classList.remove(styles.animate);
        setSelected(!selected);
      }, 100);
    }
  };

  return (
    <div className={className} onClick={toggleSelected}>
      <img
        src={selected ? imageSelected : imageUnselected}
        alt="Favourite Icon"
        className={styles.zoom}
      />
    </div>
  );
};
