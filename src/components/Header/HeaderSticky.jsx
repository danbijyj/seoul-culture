import Tabs from './Tabs';
import HeaderBg from '/images/bg_main.png';

const HeaderSticky = ({ activeTab, setActiveTab, scrolled }) => {
    if (!scrolled) return null;

    return (
        <header className="fixed top-0 left-0 w-full h-20 z-50">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{ backgroundImage: `url(${HeaderBg})` }}
            />

            <div className="absolute inset-0 bg-white/5 backdrop-blur-md" />

            <div className="relative inner h-full flex items-center justify-between text-white">
                <Tabs
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    scrolled
                />
                <h1 className="text-2xl font-bold">서울시 문화행사</h1>
            </div>
        </header>
    );
};

export default HeaderSticky;
