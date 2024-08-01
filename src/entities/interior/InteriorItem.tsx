import { BookMark, Liked } from "../../shared/icons";
import { CFavourite } from "../../shared/ui";
import { Discount } from "../discount/entity";
import styles from './style.module.css';

interface Props {
    interior: Discount;
}

const InteriorItem: React.FC<Props> = ({ interior }) => {
    return (
        <>
            <div className={styles.personIcon}>
                <div className={styles.personInfo}>
                    <img src={interior.personImage} alt="" />
                    <p>{interior.personName}</p>
                </div>
            </div>
            <div className={styles.carouselItem}>
                <img src={interior.image} alt={interior.name} />
            </div>
            <CFavourite imageSelected={Liked} imageUnselected={BookMark} className={styles.saves} />
        </>
    );
};

export default InteriorItem;
