import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Tabs from './Tabs';

const Header = ({ activeTab, setActiveTab, scrolled }) => {
    const headerRef = useRef(null);
    const bgRef = useRef(null);
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);
    const line3Ref = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            gsap.fromTo(
                bgRef.current,
                { scale: 1 },
                {
                    scale: 1.3,
                    duration: 3,
                    ease: 'none',
                },
            );

            tl.fromTo(
                line1Ref.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 0.7, duration: 0.8, ease: 'power3.out' },
            );

            tl.fromTo(
                line2Ref.current,
                { y: 80, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
                '-=0.6',
            );

            tl.fromTo(
                line3Ref.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 0.7, duration: 0.8, ease: 'power3.out' },
                '-=0.3',
            );
        }, headerRef);

        return () => ctx.revert();
    }, []);

    return (
        <header
            ref={headerRef}
            className="relative h-110 md:h-125 overflow-hidden text-white"
        >
            <div
                ref={bgRef}
                className="absolute inset-0 bg-[url('/images/bg_main.png')] bg-cover bg-center will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

            <div className="relative inner h-full flex items-center">
                <div className="w-full">
                    <p
                        ref={line1Ref}
                        className="text-center lg:text-right text-xl md:text-3xl font-bold mb-6 font-[GMarketSans]"
                    >
                        Seoul Culture Portal
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-between items-center gap-10 md:gap-14 lg:gap-0">
                        <Tabs
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            scrolled={scrolled}
                        />
                        <div className="text-center lg:text-right">
                            <h1
                                ref={line2Ref}
                                className="font-bold tracking-tighter leading-none text-5xl md:text-6xl lg:text-[80px] font-[GMarketSans]
                                "
                            >
                                서울시 문화행사
                            </h1>
                            <p
                                ref={line3Ref}
                                className="text-sm md:text-lg lg:text-xl leading-none mt-4 md:mt-5 lg:mt-28 font-[GMarketSans] tracking-tighter md:tracking-normal"
                            >
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
