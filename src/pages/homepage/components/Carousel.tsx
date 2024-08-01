import { useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import { Props } from '../../../entities/discount/entity';
import DiscountItem from '../../../entities/discount/DiscountItem';
import InteriorItem from '../../../entities/interior/InteriorItem';
import RoomItem from '../../../entities/room/RoomItem';

const Carousel: React.FC<Props> = ({ items, title, subtitle, interior, house, discount }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const length = items.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
        }, 10000);

        return () => clearInterval(interval);
    }, [length]);

    return (
        <div className="carousel">
            <div className="carousel-header">
                <div className="carousel-title">
                    <Typography sx={{ color: '#2F3438', fontWeight: '700', fontFamily: 'Inter' }}>{title}</Typography>
                    <Typography sx={{ color: '#2F3438', fontSize: '14px', fontWeight: '500', fontFamily: 'Inter' }}>{subtitle}</Typography>
                </div>
                <Button>Узнать больше</Button>
            </div>
            <div
                className="discount-carousel"
                style={{ transform: `translateX(-${currentIndex * (200 / length )}%)` }}
            >
                {interior && items.map((item) => (
                    <InteriorItem interior={item} key={item.id} />
                ))}

                {house && items.map((item) => (
                    <RoomItem room={item} key={item.id} />
                ))}

                {discount && items.map((item) => (
                    <DiscountItem discount={item} key={item.id} />
                ))}
            </div>
        </div>
    );
}

export default Carousel;