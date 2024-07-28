import Banner from './components/Banner';
import Icons from './components/Icons';
import './homepage.css'
export default function HomePage() {
    return (
        <section className='homepage'>
            <div className="container">
                <div className="homepage__wrapper">
                    <Banner />
                    <Icons />
                </div>
            </div>
        </section>
    );
}