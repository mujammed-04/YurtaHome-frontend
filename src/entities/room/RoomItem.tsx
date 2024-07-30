import { Typography } from "@mui/material";
import { Discount } from "../discount/entity";
import styles from './style.module.css';

interface Props {
    room: Discount;
}

const RoomItem: React.FC<Props> = ({ room }) => {
    return (
        <div className={styles.carouselItem}>
            <img src={room.image} alt={room.name} />
            <Typography sx={{ color: '#2F3438', fontWeight: 700, fontFamily: 'Inter' }}>{room.name}</Typography>
        </div>
    );
};

export default RoomItem;
