import Banner from './components/Banner';
import './homepage.css'
export default function HomePage() {
    return (
        <section className='homepage'>
            <div className="container">
                <div className="homepage__wrapper">
                    <Banner />
                </div>
            </div>
        </section>
    );
}