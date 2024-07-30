import dayjs from 'dayjs';
import Banner from './components/Banner';
import Icons from './components/Icons';
import './homepage.css'
import { Discount } from '../../entities/discount/entity';
import { d1, d2, d3, d4, h1, r1, r2, r3, r4, s1, s2, s3, s4, s5, s6 } from '../../shared/images';
import Carousel from './components/Carousel';


export default function HomePage() {
    const discounts: Discount[] = [
        {
            id: 1,
            image: d1,
            category: 'Мебель',
            personName: 'Название товара можно в две строки',
            rate: 3,
            newPrice: 100908,
            oldPrice: 200000,
            comments: 2,
            discountTime: dayjs('2024-07-31 19:30:00').toString()
        }, {
            id: 2,
            image: d2,
            category: 'Мебель',
            personName: 'Название товара можно в две строки',
            rate: 1,
            newPrice: 100908,
            oldPrice: 200000,
            comments: 2,
            discountTime: dayjs('2024-07-31 19:30:00').toString()
        }, {
            id: 3,
            image: d3,
            category: 'Мебель',
            personName: 'Название товара можно в две строки',
            rate: 2,
            newPrice: 100908,
            oldPrice: 200000,
            comments: 2,
            discountTime: dayjs('2024-07-31 19:30:00').toString()
        }, {
            id: 4,
            image: d4,
            category: 'Мебель',
            personName: 'Название товара можно в две строки',
            rate: 4,
            newPrice: 100908,
            oldPrice: 200000,
            comments: 2,
            discountTime: dayjs('2024-07-31 19:30:00').toString()
        }, {
            id: 5,
            image: d1,
            category: 'Мебель',
            personName: 'Название товара можно в две строки',
            rate: 4,
            newPrice: 100908,
            oldPrice: 200000,
            comments: 2,
            discountTime: dayjs('2024-07-31 19:30:00').toString()
        }, {
            id: 6,
            image: d2,
            category: 'Мебель',
            personName: 'Название товара можно в две строки',
            rate: 4,
            newPrice: 100908,
            oldPrice: 200000,
            comments: 2,
            discountTime: dayjs('2024-07-31 19:30:00').toString()
        }, {
            id: 7,
            image: d3,
            category: 'Мебель',
            personName: 'Название товара можно в две строки',
            rate: 4,
            newPrice: 100908,
            oldPrice: 200000,
            comments: 2,
            discountTime: dayjs('2024-07-31 19:30:00').toString()
        }, {
            id: 8,
            image: d4,
            category: 'Мебель',
            personName: 'Название товара можно в две строки',
            rate: 4,
            newPrice: 100908,
            oldPrice: 200000,
            comments: 2,
            discountTime: dayjs('2024-07-31 19:30:00').toString()
        },
    ];
    const interiors: Discount[] = [
        { id: 1, image: s1, personImage: h1, personName: 'Саша' },
        { id: 2, image: s2, personImage: h1, personName: 'Айсулу' },
        { id: 3, image: s3, personImage: h1, personName: 'Арыстан' },
        { id: 4, image: s4, personImage: h1, personName: 'Юля' },
        { id: 5, image: s5, personImage: h1, personName: 'Максат' },
        { id: 6, image: s6, personImage: h1, personName: 'Андрей' },
        { id: 7, image: s1, personImage: h1, personName: 'Саша' },
        { id: 8, image: s2, personImage: h1, personName: 'Айсулу' },
        { id: 9, image: s3, personImage: h1, personName: 'Арыстан' },
        { id: 10, image: s4, personImage: h1, personName: 'Юля' },
        { id: 11, image: s5, personImage: h1, personName: 'Максат' },
        { id: 12, image: s6, personImage: h1, personName: 'Андрей' },
    ];
    const rooms: Discount[] = [
        { id: 1, image: r1, name: 'Современный дом в теплых тонах' },
        { id: 2, image: r2, name: 'Планировка 24 кв/м под один стиль' },
        { id: 3, image: r3, name: 'Эффективное использование пространства' },
        { id: 4, image: r4, name: 'Уютный дом для молодежи' },
        { id: 5, image: r1, name: 'Современный дом в теплых тонах' },
        { id: 6, image: r2, name: 'Планировка 24 кв/м под один стиль' },
        { id: 7, image: r3, name: 'Эффективное использование пространства' },
        { id: 8, image: r4, name: 'Уютный дом для молодежи' },
    ];


    return (
        <section className='homepage'>
            <div className="container">
                <div className="homepage__wrapper">
                    <Banner />
                    <Icons />
                    <Carousel items={interiors} title='Вы ишете такие фотографии?' subtitle='Рекомендуем интерьерные оформления, которые могут вам понравитсья' interior/>
                    <Carousel items={rooms} title='Мы собрали для вас несколько стильных новых домов' house/>
                    <Carousel items={discounts} title='Товарная скидка' discount />
                </div>
            </div>
        </section>
    );
}