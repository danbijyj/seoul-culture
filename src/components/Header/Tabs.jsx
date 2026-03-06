import { BiHeart, BiSearch } from 'react-icons/bi';

const Tabs = ({ activeTab, setActiveTab, scrolled }) => {
    const btnSize = scrolled ? 'w-30 py-2' : 'w-[220px] h-[220px] text-3xl';

    return (
        <div className="flex gap-4 font-bold text-white">
            <button
                onClick={() => setActiveTab('explore')}
                className={`cursor-pointer flex flex-col items-center justify-center gap-3 ${btnSize} ${
                    activeTab === 'explore'
                        ? 'bg-main-green border-white border-2 hover:bg-main-green/80 transition'
                        : 'bg-white/30 border-white border'
                }`}
            >
                Explore
                {!scrolled && <BiSearch className="text-6xl opacity-30" />}
            </button>
            <button
                onClick={() => setActiveTab('favorites')}
                className={`cursor-pointer flex flex-col items-center justify-center gap-3 ${btnSize} ${
                    activeTab === 'favorites'
                        ? 'bg-main-green border-white border-2 hover:bg-main-green/80 transition'
                        : 'bg-white/30 border-white border'
                }`}
            >
                Favorites
                {!scrolled && <BiHeart className="text-6xl opacity-30" />}
            </button>
        </div>
    );
};

export default Tabs;
