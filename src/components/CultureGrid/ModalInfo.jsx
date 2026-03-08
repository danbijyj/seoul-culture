import { useFavoritesStore } from '../../store/favorites';
import { BiSolidHeart, BiHeart } from 'react-icons/bi';

const InfoRow = ({ label, value }) => {
    if (!value) return null;
    return (
        <div className="flex border-b border-stroke py-3 md:py-4 lg:py-6">
            <dt className="w-20 pl-4 text-base font-bold">{label}</dt>
            <dd className="text-text text-base pr-4">{value}</dd>
        </div>
    );
};

const ModalInfo = ({ event }) => {
    const favorites = useFavoritesStore((state) => state.favorites);
    const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
    const isFavorite = favorites.some((item) => item.id === event.id);

    return (
        <>
            <div className="flex justify-between">
                <p className="flex items-center justify-center text-main-green border border-main-green rounded-lg px-4 py-1 font-bold">
                    {event.CODENAME}
                </p>
                <button
                    onClick={() => toggleFavorite(event)}
                    className="text-3xl cursor-pointer"
                >
                    {isFavorite ? (
                        <BiSolidHeart className="text-red-600" />
                    ) : (
                        <BiHeart className="text-text" />
                    )}
                </button>
            </div>
            <dl className="text-sm">
                <InfoRow label="지역" value={event.GUNAME} />
                <InfoRow label="기관" value={event.ORG_NAME} />
                <InfoRow label="장소" value={event.PLACE} />
                <InfoRow label="기간" value={event.DATE} />
                <InfoRow label="대상" value={event.USE_TRGT} />
                <InfoRow label="요금" value={event.USE_FEE} />
                <InfoRow label="문의" value={event.INQUIRY} />
            </dl>
        </>
    );
};

export default ModalInfo;
