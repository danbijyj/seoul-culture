import { useEffect, useState } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';

const TopButton = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const trigger = window.innerWidth <= 820 ? 80 : 100;
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
            className="fixed right-10 bottom-10 py-2 px-4 bg-main-blue/60 hover:bg-main-blue shadow-lg text-white text-xs transition z-40"
            onClick={scrollToTop}
        >
            <BiArrowFromBottom className="text-3xl" />
            TOP
        </button>
    );
};

export default TopButton;
