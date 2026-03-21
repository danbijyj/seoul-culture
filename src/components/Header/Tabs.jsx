import { BiHeart, BiSearch } from 'react-icons/bi';

const Tabs = ({ activeTab, setActiveTab, scrolled }) => {
    const btnSize = scrolled
        ? 'w-22 md:w-30 py-1 md:py-2 text-sm'
        : 'w-40 md:w-70 lg:w-55 h-28 md:h-35 lg:h-55 text-lg md:text-2xl';

    const baseStyle =
        'flex flex-col items-center justify-center gap-1 lg:gap-3 font-bold text-white font-[GMarketSans] transition-all duration-200 ease-out active:scale-95 hover:scale-105';

    const activeBtn =
        'bg-main-green border-white border-2 shadow-[0_20px_40px_rgba(24,161,134,0.6)]';

    const inactiveBtn = 'bg-white/25 border-white border';

    return (
        <div className="flex gap-2 lg:gap-5">
            <button
                onClick={() => setActiveTab('explore')}
                className={`${baseStyle} ${btnSize} ${
                    activeTab === 'explore' ? activeBtn : inactiveBtn
                }`}
            >
                Explore
                {!scrolled && (
                    <BiSearch className="text-4xl md:text-5xl lg:text-6xl opacity-30" />
                )}
            </button>

            <button
                onClick={() => setActiveTab('favorites')}
                className={`${baseStyle} ${btnSize} ${
                    activeTab === 'favorites' ? activeBtn : inactiveBtn
                }`}
            >
                Favorites
                {!scrolled && (
                    <BiHeart className="text-4xl md:text-5xl lg:text-6xl opacity-30" />
                )}
            </button>
        </div>
    );
};

export default Tabs;
