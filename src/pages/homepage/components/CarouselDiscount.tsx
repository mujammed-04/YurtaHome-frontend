import { useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import { d1, d2, d3, d4 } from '../../../shared/images';
import { Discount } from '../../../entities/discount/entity';
import DiscountItem from '../../../entities/discount/DiscountItem';
import dayjs from 'dayjs';

export default function CarouselDiscount() {
    const items: Discount[] = [
        {
            id: 1,
            image: d1,
            category: 'Мебель',
            name: 'Название товара можно в две строки',
            rate: 3,
            newPrice: 100908,
            oldPrice: 200000,
            comments: 2,
            discountTime: dayjs('2024-07-29 19:30:00').toString()
        }, {
            id: 2,
            image: d2,
            category: 'Мебель',
            name: 'Название товара можно в две строки',
            rate: 1,
            newPrice: 100908,
            oldPrice: 200000,
            comments: 2,
            discountTime: dayjs('2024-07-29 19:30:00').toString()
        }, {
            id: 3,
            image: d3,
            category: 'Мебель',
            name: 'Название товара можно в две строки',
            rate: 2,
            newPrice: 100908,
            oldPrice: 200000,
            comments: 2,
            discountTime: dayjs('2024-07-29 19:30:00').toString()
        }, {
            id: 4,
            image: d4,
            category: 'Мебель',
            name: 'Название товара можно в две строки',
            rate: 4,
            newPrice: 100908,
            oldPrice: 200000,
            comments: 2,
            discountTime: dayjs('2024-07-29 19:30:00').toString()
        }, {
            id: 1,
            image: d1,
            category: 'Мебель',
            name: 'Название товара можно в две строки',
            rate: 4,
            newPrice: 100908,
            oldPrice: 200000,
            comments: 2,
            discountTime: dayjs('2024-07-29 19:30:00').toString()
        }, {
            id: 2,
            image: d2,
            category: 'Мебель',
            name: 'Название товара можно в две строки',
            rate: 4,
            newPrice: 100908,
            oldPrice: 200000,
            comments: 2,
            discountTime: dayjs('2024-07-29 19:30:00').toString()
        }, {
            id: 3,
            image: d3,
            category: 'Мебель',
            name: 'Название товара можно в две строки',
            rate: 4,
            newPrice: 100908,
            oldPrice: 200000,
            comments: 2,
            discountTime: dayjs('2024-07-29 19:30:00').toString()
        }, {
            id: 4,
            image: d4,
            category: 'Мебель',
            name: 'Название товара можно в две строки',
            rate: 4,
            newPrice: 100908,
            oldPrice: 200000,
            comments: 2,
            discountTime: dayjs('2024-07-29 19:30:00').toString()
        },
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
                        Товарная скидка
                    </Typography>
                </div>
                <Button>Узнать больше</Button>
            </div>
            <div
                className="discount-carousel"
                style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
            >
                {items.concat(items.slice(0, 4)).map((item) => (
                    <DiscountItem discount={item} key={item.id} />
                ))}
            </div>
        </div>
    );
}
