import Tabs from './Tabs';

const Header = ({ activeTab, setActiveTab }) => {
    return (
        <header className="h-125 bg-[url('/images/bg_main.png')] bg-cover bg-center bg-no-repeat">
            <div className="inner h-full text-white flex items-center">
                <div className="w-full">
                    <p className="text-right text-3xl font-bold opacity-70 mb-6 font-[MaruBuri]">
                        2026 Seoul Culture Portal
                    </p>
                    <div className="flex justify-between items-center">
                        <Tabs
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                        <div className="text-right">
                            <h1
                                className="font-bold tracking-tighter leading-none
                                text-[80px] font-[MaruBuri]
                                "
                            >
                                서울시 문화행사
                            </h1>
                            <p className="text-xl opacity-80 leading-none mt-28 font-[MaruBuri]">
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
