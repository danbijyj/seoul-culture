import { useEffect, useState } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';

const TopButton = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const trigger = window.innerWidth <= 768 ? 80 : 100;
            setShow(window.scrollY > trigger);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!show) return null;

    return (
        <button
            className="fixed right-6 lg:right-10 bottom-6 lg:bottom-10 
            flex flex-col items-center justify-center 
            w-10 md:w-14 h-10 md:h-14 
            bg-main-blue/70 hover:bg-main-blue shadow-lg text-white 
            text-[10px] md:text-xs 
            transition z-40 cursor-pointer"
            onClick={scrollToTop}
        >
            <BiArrowFromBottom className="text-xl lg:text-3xl" />
            TOP
        </button>
    );
};

export default TopButton;
