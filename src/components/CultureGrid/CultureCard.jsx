import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import FavoriteButton from '../../ui/FavoriteButton';
import { highlightText } from '../../utils/highlightText';
import { BiPlusCircle } from 'react-icons/bi';

const CultureCard = ({ event, onSelect, searchKeyword }) => {
    const cardRef = useRef(null);
    const glowRef = useRef(null);
    const overlayRef = useRef(null);
    const rotateXTo = useRef(null);
    const rotateYTo = useRef(null);

    useEffect(() => {
        rotateXTo.current = gsap.quickTo(cardRef.current, 'rotateX', {
            duration: 0.3,
            ease: 'power2.out',
        });

        rotateYTo.current = gsap.quickTo(cardRef.current, 'rotateY', {
            duration: 0.3,
            ease: 'power2.out',
        });
    }, []);

    const handleMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 25;
        const rotateY = (x - centerX) / 25;

        gsap.set(cardRef.current, {
            rotateX,
            rotateY,
            transformPerspective: 800,
        });

        gsap.set(glowRef.current, {
            left: x,
            top: y,
            xPercent: -50,
            yPercent: -50,
        });
    };

    const handleMouseEnter = () => {
        gsap.to(glowRef.current, {
            opacity: 1,
            duration: 0.2,
        });

        gsap.to(overlayRef.current, {
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out',
        });
    };

    const handleMouseLeave = () => {
        gsap.to(cardRef.current, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.4,
            ease: 'power3.out',
        });

        gsap.to(glowRef.current, {
            opacity: 0,
            duration: 0.3,
        });

        gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.3,
        });
    };

    return (
        <div
            ref={cardRef}
            onClick={() => onSelect(event)}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative group bg-white border border-stroke rounded-2xl p-8 overflow-hidden cursor-pointer 
            transition duration-300 
            hover:shadow-[0_30px_100px_rgba(0,0,0,0.3)]
            [transform-style:preserve-3d]
            [perspective:800px]"
        >
            <div
                ref={glowRef}
                className="pointer-events-none absolute top-0 left-0
                           w-80 h-80 rounded-full
                        bg-[radial-gradient(circle,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.3)_30%,transparent_70%)]
                        opacity-0
                        mix-blend-overlay
                        blur-xl
                        z-20
    "
            />

            <div className="relative mb-6 overflow-hidden">
                <img
                    src={event.MAIN_IMG}
                    alt={event.TITLE}
                    className="
                        w-full h-110 object-cover
                        transition duration-500 ease-out
                        group-hover:scale-110
                    "
                />
                <FavoriteButton event={event} />
            </div>

            <div
                ref={overlayRef}
                className="
                    absolute inset-0 flex flex-col items-center justify-center gap-5
                    text-white bg-black/40 backdrop-blur-sm
                    opacity-0
                    [transform:translateZ(60px)]
                "
            >
                <BiPlusCircle className="text-5xl" />
                <p className="text-xl">자세히 보기</p>
            </div>

            <div className="[transform:translateZ(30px)]">
                <h3 className="text-lg md:text-xl font-bold mb-4 line-clamp-2 font-[MaruBuri]">
                    {highlightText(event.TITLE, searchKeyword)}
                </h3>

                <p className="text-gray-600 line-clamp-1 mb-1">
                    {highlightText(event.PLACE, searchKeyword)}
                </p>

                <p className="text-gray-500">{event.DATE}</p>
            </div>
        </div>
    );
};

export default CultureCard;
