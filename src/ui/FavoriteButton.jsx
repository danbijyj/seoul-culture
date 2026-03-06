import { useFavoritesStore } from '../store/favorites';
import { BiSolidHeart, BiHeart } from 'react-icons/bi';

const FavoriteButton = ({ event }) => {
    const favorites = useFavoritesStore((state) => state.favorites);
    const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
    const isFavorite = favorites.some((item) => item.id === event.id);

    return (
        <button
            onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(event);
            }}
            className="absolute top-2 right-2 flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 backdrop-blur-xs text-2xl hover:bg-white/20 transition"
        >
            {isFavorite ? (
                <BiSolidHeart />
            ) : (
                <BiHeart className="text-main-green" />
            )}
        </button>
    );
};

export default FavoriteButton;
