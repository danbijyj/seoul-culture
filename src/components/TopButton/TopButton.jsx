import { useEffect, useState } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';

const TopButton = ({ isModalOpen }) => {
    const [show, setShow] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const trigger = window.innerWidth <= 768 ? 80 : 100;
            const scrollY = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            setShow(scrollY > trigger);

            const percent = (scrollY / docHeight) * 100;
            setProgress(percent);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    if (!show || isModalOpen) return null;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`
                group fixed right-6 lg:right-10 bottom-6 lg:bottom-10
                flex flex-col items-center justify-center
                w-12 md:w-14 h-12 md:h-14
                rounded-full
                bg-main-blue/70 hover:bg-main-blue
                text-white text-[10px] md:text-xs
                shadow-[0_8px_30px_rgba(0,0,0,0.2)]
                backdrop-blur-md
                transition-all duration-300
                cursor-pointer z-50
                hover:-translate-y-1
                ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'}
            `}
        >
            <svg className="absolute w-full h-full" viewBox="0 0 36 36">
                <path
                    d="M18 2 a 16 16 0 0 1 0 32 a 16 16 0 0 1 0 -32"
                    fill="none"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="2"
                />
                <path
                    d="M18 2 a 16 16 0 0 1 0 32 a 16 16 0 0 1 0 -32"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray={`${progress}, 100`}
                />
            </svg>

            <BiArrowFromBottom className="text-lg md:text-xl transition-transform duration-300" />

            <span className="mt-0.5">TOP</span>
        </button>
    );
};

export default TopButton;
