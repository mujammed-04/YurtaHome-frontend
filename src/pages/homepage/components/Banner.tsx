import { bBanner } from "../../../shared/images";
import CarouselComponent from './Carousel';


export default function Banner() {
    return (
        <div className="banner">
            <div className="big-banner">
                <img src={bBanner} alt="Big Banner" />
            </div>
            <CarouselComponent />
        </div>
    );
}
