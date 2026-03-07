import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import HeaderSticky from './components/Header/HeaderSticky';
import ExplorePage from './pages/ExplorePage';
import FavoritesPage from './pages/FavoritesPage';
import Footer from './components/Footer/Footer';
import TopButton from './components/TopButton/TopButton';

const App = () => {
    const [activeTab, setActiveTab] = useState('explore');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 500);
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
            <Footer />
            <TopButton />
        </>
    );
};

export default App;
