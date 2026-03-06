import Tabs from './Tabs';

const Header = ({ activeTab, setActiveTab }) => {
    return (
        <header className="h-[550px] bg-[url('/images/bg_main.png')] bg-cover bg-center bg-no-repeat">
            <div className="inner h-full text-white flex items-center">
                <div className="w-full">
                    <p className="font-[Pretendard] text-right text-4xl font-bold opacity-70 mb-6">
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
                                text-[88px]
                                "
                            >
                                서울시 문화행사
                            </h1>
                            <p className="text-xl font-bold opacity-70 leading-none mt-28">
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
