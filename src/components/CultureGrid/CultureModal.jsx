import { useFavoritesStore } from '../../store/favorites';

const CultureModal = ({ event, onClose }) => {
    const favorites = useFavoritesStore((state) => state.favorites);
    const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

    if (!event) return null;

    const isFavorite = favorites.some((item) => item.id === event.id);

    return (
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="relative bg-white p-8 rounded-lg w-180"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="absolute top-4 right-4" onClick={onClose}>
                    X
                </button>
                <h2 className="text-xl font-bold mb-4">{event.TITLE}</h2>
                <button
                    onClick={() => toggleFavorite(event)}
                    className="text-xl"
                >
                    {isFavorite ? '❤️' : '🤍'}
                </button>
                <p>{event.DATE}</p>
                <p>{event.PLACE}</p>
                <p className="mt-4">{event.CODENAME}</p>
            </div>
        </div>
    );
};

export default CultureModal;
