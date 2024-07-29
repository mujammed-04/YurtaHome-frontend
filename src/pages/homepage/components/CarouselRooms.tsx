import { useState, useEffect } from 'react';
import { Button, Typography } from '@mui/material';
import { r1, r2, r3, r4 } from '../../../shared/images';

interface Props {
    srcImage: string;
    name: string;
}

export default function CarouselRooms() {
    const items: Props[] = [
        { srcImage: r1, name: 'Современный дом в теплых тонах' },
        { srcImage: r2, name: 'Планировка 24 кв/м под один стиль' },
        { srcImage: r3, name: 'Эффективное использование пространства' },
        { srcImage: r4, name: 'Уютный дом для молодежи' },
        { srcImage: r1, name: 'Современный дом в теплых тонах' },
        { srcImage: r2, name: 'Планировка 24 кв/м под один стиль' },
        { srcImage: r3, name: 'Эффективное использование пространства' },
        { srcImage: r4, name: 'Уютный дом для молодежи' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 10000);

        return () => clearInterval(interval);
    }, [items.length]);

    return (
        <div className="carousel">
            <div className="carousel-header">
                <div className="carousel-title">
                    <Typography sx={{ color: '#2F3438', fontWeight: 700, fontFamily: 'Inter' }}>
                        Мы собрали для вас несколько стильных новых домов
                    </Typography>
                </div>
                <Button>Узнать больше</Button>
            </div>
            <div
                className="carousel-content-r"
                style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
            >
                {items.concat(items.slice(0, 4)).map((item, index) => (
                    <div className="carousel-item-r" key={index}>
                        <img src={item.srcImage} alt={item.name} />
                        <Typography sx={{ color: '#2F3438', fontWeight: 700, fontFamily: 'Inter' }}>{item.name}</Typography>
                    </div>
                ))}
            </div>
        </div>
    );
}
