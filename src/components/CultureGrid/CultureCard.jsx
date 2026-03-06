import FavoriteButton from '../../ui/FavoriteButton';
import { highlightText } from '../../utils/highlightText';
import { BiPlusCircle } from 'react-icons/bi';

const CultureCard = ({ event, onSelect, searchKeyword }) => {
    return (
        <div
            onClick={() => onSelect(event)}
            className="relative group bg-white border border-gray-200 rounded-2xl p-8 overflow-hidden cursor-pointer transition duration-300 hover:shadow-xl"
        >
            <div className="relative mb-6 overflow-hidden">
                <img
                    src={event.MAIN_IMG}
                    alt={event.TITLE}
                    className="w-full h-110 object-cover transition duration-300 group-hover:scale-105"
                />
                <FavoriteButton event={event} />
            </div>

            <div className="absolute -bottom-1 left-0 w-full h-1/2 flex flex-col items-center justify-center gap-3 bg-black/70 backdrop-blur-xs text-white translate-y-full group-hover:translate-y-0 transition duration-300 ease-out z-10 ">
                <BiPlusCircle className="text-6xl transition group-hover:scale-110" />
                <p className="text-xl font-bold">자세히 보기</p>
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
