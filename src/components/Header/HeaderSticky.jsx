import Tabs from './Tabs';

const HeaderSticky = ({ activeTab, setActiveTab, scrolled }) => {
    if (!scrolled) return null;

    return (
        <header className="fixed top-0 left-0 w-full h-17 z-50">
            <div className="absolute inset-0 bg-[url('/images/bg_small.png')] bg-cover bg-center opacity-90" />

            <div className="absolute inset-0 backdrop-blur-xs" />

            <div className="relative inner h-full flex items-center justify-between text-white">
                <Tabs
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    scrolled
                />
                <h1 className="text-2xl font-bold font-[MaruBuri]">
                    2026 서울시 문화행사
                </h1>
            </div>
        </header>
    );
};

export default HeaderSticky;
