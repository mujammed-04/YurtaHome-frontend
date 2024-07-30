import { Save } from "../../shared/icons";
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
                <img src={interior.image} alt={interior.name} className='zoom' />
            </div>
            <div className={styles.saves}>
                <img src={Save} alt="" />
            </div>
        </>
    );
};

export default InteriorItem;
