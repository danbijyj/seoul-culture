import Tabs from './Tabs';

const Header = ({ activeTab, setActiveTab }) => {
    return (
        <header className="h-110 md:h-125 bg-[url('/images/bg_main.png')] bg-cover bg-center bg-no-repeat">
            <div className="inner h-full text-white flex items-center">
                <div className="w-full">
                    <p className="text-center lg:text-right text-2xl md:text-3xl font-bold opacity-70 mb-6 font-[MaruBuri]">
                        2026 Seoul Culture Portal
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-between items-center gap-10 md:gap-14 lg:gap-0">
                        <Tabs
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                        <div className="text-center lg:text-right">
                            <h1
                                className="font-bold tracking-tighter leading-none text-5xl md:text-6xl lg:text-[80px] font-[MaruBuri]
                                "
                            >
                                서울시 문화행사
                            </h1>
                            <p className="text-sm md:text-lg lg:text-xl opacity-80 leading-none mt-4 md:mt-5 lg:mt-28 font-[MaruBuri] font-bold">
                                서울문화포털에서 제공하는 서울특별시
                                문화공간정보입니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
