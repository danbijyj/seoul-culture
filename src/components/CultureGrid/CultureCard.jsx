import FavoriteButton from '../../ui/FavoriteButton';
import { highlightText } from '../../utils/highlightText';

const CultureCard = ({ event, onSelect, searchKeyword }) => {
    return (
        <div
            onClick={() => onSelect(event)}
            className="bg-white border border-gray-200 rounded-2xl p-8 overflow-hidden cursor-pointer"
        >
            <div className="relative mb-6">
                <img
                    src={event.MAIN_IMG}
                    alt={event.TITLE}
                    className="relative w-full h-110 object-cover"
                />
                <FavoriteButton event={event} />
            </div>

            <h3 className="font-bold text-xl mb-4 line-clamp-2">
                {highlightText(event.TITLE, searchKeyword)}
            </h3>
            <p className="font-[Pretendard] text-gray-600 line-clamp-1 mb-1">
                {highlightText(event.PLACE, searchKeyword)}
            </p>
            <p className="font-[Pretendard] text-gray-400">{event.DATE}</p>
        </div>
    );
};

export default CultureCard;
