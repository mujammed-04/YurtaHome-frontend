import { useState, useEffect } from 'react';
import { sBanner1, sBanner2, sBanner3, sBanner4 } from '../../../shared/images';
import { colors } from '@mui/material';

export default function CarouselComponent() {
    const [active, setActive] = useState(1);
    const images = [
        {
            id: 1,
            src: sBanner1,
            alt: 'banner 1',
            color: '#E2F4F8',
        },
        {   
            id: 2,
            src: sBanner2,
            alt: 'banner 2',
            color: '#e1abc1'
        },
        {
            id: 3,
            src: sBanner3,
            alt: 'banner 3',
            color: '#dac5a4'
        },
        {   
            id: 4,
            src: sBanner4,
            alt: 'banner 4',
            color: '#edb7e7'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActive(prevActive => (prevActive === images.length ? 1 : prevActive + 1));
        }, 30000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <>
            {images.map(item => (
                <div 
                    key={item.id} 
                    className={active === item.id ? 'small-banner active' : 'small-banner fade-out'}
                    style={{ backgroundColor: item.color }}
                >
                    <p className="title">Тренды в дизайне</p>
                    <img src={item.src} alt={item.alt} />
                    <p className="subtitle">Цвета на 2024 год</p>
                </div>
            ))}
        </>
    );
}
