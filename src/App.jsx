import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import ExplorePage from './pages/ExplorePage';
import FavoritesPage from './pages/FavoritesPage';
import HeaderSticky from './components/Header/HeaderSticky';

const App = () => {
    const [activeTab, setActiveTab] = useState('explore');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 550);
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
            <Header activeTab={activeTab} setActiveTab={setActiveTab} />
            <main>
                {activeTab === 'explore' ? <ExplorePage /> : <FavoritesPage />}
            </main>
        </>
    );
};

export default App;
