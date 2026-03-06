import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useFavoritesStore = create(
    persist(
        (set, get) => ({
            favorites: [],
            toggleFavorite: (event) => {
                const { favorites } = get();
                const exists = favorites.find((item) => item.id === event.id);

                if (exists) {
                    set({
                        favorites: favorites.filter(
                            (item) => item.id !== event.id,
                        ),
                    });
                } else {
                    set({ favorites: [...favorites, event] });
                }
            },
        }),
        { name: 'favorites-storage' },
    ),
);
