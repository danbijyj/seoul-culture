import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import HeaderSticky from './components/Header/HeaderSticky';
import ExplorePage from './pages/ExplorePage';
import FavoritesPage from './pages/FavoritesPage';
import Footer from './components/Footer/Footer';
import TopButton from './components/TopButton/TopButton';
import CultureModal from './components/CultureGrid/CultureModal';

const App = () => {
    const [activeTab, setActiveTab] = useState('explore');
    const [scrolled, setScrolled] = useState(false);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        const onScroll = () => {
            const headerhold = window.innerWidth < 768 ? 400 : 500;
            setScrolled(window.scrollY > headerhold);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <HeaderSticky
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                scrolled={scrolled}
            />
            <Header
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                scrolled={scrolled}
            />

            <main>
                {activeTab === 'explore' ? (
                    <ExplorePage onSelect={setSelected} />
                ) : (
                    <FavoritesPage onSelect={setSelected} />
                )}
            </main>

            {selected && (
                <CultureModal
                    event={selected}
                    onClose={() => setSelected(null)}
                />
            )}

            <Footer />
            <TopButton />
        </>
    );
};

export default App;
