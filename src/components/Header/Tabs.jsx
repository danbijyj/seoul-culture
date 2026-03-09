import { BiHeart, BiSearch } from 'react-icons/bi';

const Tabs = ({ activeTab, setActiveTab, scrolled }) => {
    const btnSize = scrolled
        ? 'w-20 md:w-30 py-1 md:py-2 font-normal'
        : 'w-40 md:w-70 lg:w-55 h-28 md:h-35 lg:h-55 text-xl md:text-2xl lg:text-3xl';

    const activeBtn =
        'bg-main-green border-white border-2 hover:bg-main-green/80 transition';
    const inactiveBtn = 'bg-white/30 border-white border';

    return (
        <div className="flex gap-1 lg:gap-5 font-bold text-white">
            <button
                onClick={() => setActiveTab('explore')}
                className={`cursor-pointer flex flex-col items-center justify-center gap-1 lg:gap-3 ${btnSize} ${
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
                className={`cursor-pointer flex flex-col items-center justify-center gap-1 lg:gap-3 ${btnSize} ${
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
