import Banner from './components/Banner';
import CarouselDiscount from './components/CarouselDiscount';
import CarouselPhotos from './components/CarouselPhotos';
import CarouselRooms from './components/CarouselRooms';
import Icons from './components/Icons';
import './homepage.css'
export default function HomePage() {
    return (
        <section className='homepage'>
            <div className="container">
                <div className="homepage__wrapper">
                    <Banner />
                    <Icons />
                    <CarouselPhotos />
                    <CarouselRooms />
                    <CarouselDiscount />
                </div>
            </div>
        </section>
    );
}