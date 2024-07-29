import Banner from './components/Banner';
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
                </div>
            </div>
        </section>
    );
}