import { bBanner } from "../../../shared/images";
import CarouselComponent from './CarouselComponent';


export default function Banner() {
    return (
        <div className="banner">
            <div className="big-banner">
                <img src={bBanner} alt="Big Banner" className="zoom"/>
            </div>
            <CarouselComponent />
        </div>
    );
}
