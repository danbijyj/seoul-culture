import Tabs from './Tabs';

const HeaderSticky = ({ activeTab, setActiveTab, scrolled }) => {
    return (
        <header
            className={`fixed top-0 left-0 w-full h-15 md:h-17 z-50 shadow-lg transition-transform duration-300 ${
                scrolled ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className="absolute inset-0 bg-[url('/images/bg_small.png')] bg-cover bg-center opacity-90" />

            <div className="absolute inset-0 backdrop-blur-xs" />

            <div className="relative inner px-4 lg:px-0 h-full flex items-center justify-between text-white">
                <Tabs
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    scrolled
                />
                <h1 className="text-base md:text-2xl font-bold font-[MaruBuri]">
                    2026 서울시 문화행사
                </h1>
            </div>
        </header>
    );
};

export default HeaderSticky;
