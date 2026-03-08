import { useState } from 'react';
import CultureGrid from '../components/CultureGrid/CultureGrid';
import CultureModal from '../components/CultureGrid/CultureModal';
import Pagination from '../ui/Pagination';
import { useFavoritesStore } from '../store/favorites';
import { getPageSize } from '../utils/pageSize';

const FavoritesPage = () => {
    const [selected, setSelected] = useState(null);
    const [page, setPage] = useState(1);
    const favorites = useFavoritesStore((s) => s.favorites);

    const PAGE_SIZE = getPageSize();
    const totalPages = Math.ceil(favorites.length / PAGE_SIZE);

    const pagedFavorites = favorites.slice(
        (page - 1) * PAGE_SIZE,
        page * PAGE_SIZE,
    );

    return (
        <section className="inner pb-20 lg:pb-40 px-4 lg:px-0">
            <div className="py-14 md:py-20 lg:py-25">
                <h2
                    className="relative font-bold text-center
                text-2xl md:text-3xl lg:text-4xl 
                after:absolute after:content-[' '] 
                after:left-1/2 after:-translate-x-1/2 
                after:-bottom-3 md:after:-bottom-5 lg:after:-bottom-7 
                after:w-10 md:after:w-15 lg:after:w-18 
                after:h-[2px] lg:after:h-1 
                after:bg-main-green"
                >
                    Favorites
                </h2>
            </div>

            <CultureGrid data={pagedFavorites} onSelect={setSelected} />

            {totalPages > 1 && (
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    onFirst={() => setPage(1)}
                    onPrev={() => setPage((p) => Math.max(1, p - 1))}
                    onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
                />
            )}

            {selected && (
                <CultureModal
                    event={selected}
                    onClose={() => setSelected(null)}
                />
            )}
        </section>
    );
};

export default FavoritesPage;
