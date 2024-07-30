import React from 'react';
import styles from './style.module.css';
import { EIcon } from './entity';

interface Props {
    icon: EIcon;
}

const IconItem: React.FC<Props> = ({ icon }) => {
    return (
        <div className={styles.iconItem}>
            <div className={styles.iconImage}>
                <img src={icon.image} alt="" />
            </div>
            <p>{icon.name}</p>
        </div>
    );
};

export default IconItem;
