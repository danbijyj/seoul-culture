import { useState } from 'react';
import CultureGrid from '../components/CultureGrid/CultureGrid';
import CultureModal from '../components/CultureGrid/CultureModal';
import { useFavoritesStore } from '../store/favorites';

const FavoritesPage = () => {
    const [selected, setSelected] = useState(null);
    const favorites = useFavoritesStore((s) => s.favorites);

    return (
        <>
            <section>
                <CultureGrid data={favorites} onSelect={setSelected} />
                {selected && (
                    <CultureModal
                        event={selected}
                        onClose={() => setSelected(null)}
                    />
                )}
            </section>
        </>
    );
};

export default FavoritesPage;
