import { useState, useEffect } from 'react';
import { h1, s1, s2, s3, s4, s5, s6 } from '../../../shared/images';
import { Button, Typography } from '@mui/material';
import { Save } from '../../../shared/icons';

interface Props {
    srcImage: string;
    srcPerson: string;
    name: string;
}

export default function CarouselPhotos() {
    const items: Props[] = [
        { srcImage: s1, srcPerson: h1, name: 'Саша' },
        { srcImage: s2, srcPerson: h1, name: 'Айсулу' },
        { srcImage: s3, srcPerson: h1, name: 'Арыстан' },
        { srcImage: s4, srcPerson: h1, name: 'Юля' },
        { srcImage: s5, srcPerson: h1, name: 'Максат' },
        { srcImage: s6, srcPerson: h1, name: 'Андрей' },
        { srcImage: s1, srcPerson: h1, name: 'Саша' },
        { srcImage: s2, srcPerson: h1, name: 'Айсулу' },
        { srcImage: s3, srcPerson: h1, name: 'Арыстан' },
        { srcImage: s4, srcPerson: h1, name: 'Юля' },
        { srcImage: s5, srcPerson: h1, name: 'Максат' },
        { srcImage: s6, srcPerson: h1, name: 'Андрей' },
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
                    <Typography sx={{ color: '#2F3438', fontWeight: '700', fontFamily: 'Inter' }}>Вы ишете такие фотографии?</Typography>
                    <Typography sx={{ color: '#2F3438', fontSize: '14px', fontWeight: '500', fontFamily: 'Inter' }}>Рекомендуем интерьерные оформления, которые могут вам понравитсья</Typography>
                </div>
                <Button>Узнать больше</Button>
            </div>
            <div
                className="carousel-content"
                style={{ transform: `translateX(-${currentIndex * (100 / 6)}%)` }}
            >
                {items.concat(items.slice(0, 6)).map((item, index) => (
                    <>
                        <div className='person-icon'>
                            <div className="person-info">
                                <img src={item.srcPerson} alt="" />
                                <p>{item.name}</p>
                            </div>
                        </div>
                        <div className="carousel-item" key={index}>
                            <img src={item.srcImage} alt={item.name} className='zoom'/>
                        </div>
                        <div className="saves">
                            <img src={Save} alt="" />
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}
