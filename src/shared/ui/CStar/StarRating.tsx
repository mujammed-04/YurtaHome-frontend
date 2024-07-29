import { Star, StarY } from '../../../shared/icons';

const StarRating = ({ rating }: { rating: number }) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        stars.push(
            <img key={i} src={i <= rating ? StarY : Star} alt={`${i <= rating ? 'filled' : 'unfilled'} star`} />
        );
    }

    return <div>{stars}</div>;
};

export default StarRating;