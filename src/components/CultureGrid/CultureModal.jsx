import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BiSolidXSquare } from 'react-icons/bi';
import ModalMap from './ModalMap';
import ModalInfo from './ModalInfo';

const CultureModal = ({ event, onClose }) => {
    const modalRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            modalRef.current,
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.4,
                ease: 'power3.out',
            },
        );
    }, []);

    useEffect(() => {
        gsap.fromTo(
            overlayRef.current,
            { opacity: 0, backdropFilter: 'blur(0px)' },
            {
                opacity: 1,
                backdropFilter: 'blur(8px)',
                duration: 0.4,
                ease: 'power2.out',
            },
        );
    }, []);

    useEffect(() => {
        gsap.fromTo(
            '.modal-item',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.2,
                ease: 'power3.out',
                delay: 0.2,
                clearProps: 'all',
            },
        );
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    if (!event) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            onClick={handleOverlayClick}
            role="dialog"
            aria-modal="true"
        >
            <div
                ref={modalRef}
                className="
                    bg-white shadow-2xl rounded-2xl overflow-hidden
                    w-[95vw] lg:w-full lg:max-w-5xl 
                    max-h-[85vh] lg:max-h-[90vh]
                "
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative overflow-y-auto max-h-[85vh] lg:max-h-[90vh]">
                    <button
                        className="
                            absolute 
                            text-3xl md:text-5xl 
                            top-3 md:top-5 lg:top-6 
                            right-3 md:right-5 lg:right-6
                            transition duration-300
                            hover:scale-110 hover:rotate-90
                            z-10
                        "
                        onClick={onClose}
                        aria-label="모달 닫기"
                    >
                        <BiSolidXSquare className="text-white cursor-pointer" />
                    </button>

                    <div
                        className="w-full h-40 md:h-60 relative flex items-center justify-center overflow-hidden mb-15 px-5 md:px-10 lg:px-15"
                        style={{
                            backgroundImage: `url(${event.MAIN_IMG})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="absolute inset-0 bg-black/40"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        <h2 className="modal-item text-white text-lg md:text-2xl font-bold text-center font-[MaruBuri] break-keep z-10">
                            {event.TITLE}
                        </h2>
                    </div>

                    <div className="flex flex-col gap-13 px-5 md:px-10 lg:px-15">
                        <div className="modal-item flex flex-col lg:flex-row justify-center gap-10 items-start">
                            <p className="w-full md:w-md flex-shrink-0 m-auto overflow-hidden">
                                <img
                                    src={event.MAIN_IMG}
                                    alt={event.TITLE}
                                    className="
                                        w-full h-auto object-contain
                                    "
                                />
                            </p>

                            <div className="flex-1 w-full">
                                <ModalInfo event={event} />
                            </div>
                        </div>

                        {event.PROGRAM?.trim() && (
                            <div className="modal-item">
                                <h3 className="text-lg font-bold mb-2">
                                    프로그램소개
                                </h3>
                                <p className="text-text text-base leading-relaxed">
                                    {event.PROGRAM}
                                </p>
                            </div>
                        )}

                        {event.PLAYER?.trim() && (
                            <div className="modal-item">
                                <h3 className="text-lg font-bold mb-2">
                                    출연자 정보
                                </h3>
                                <p className="text-text text-base leading-relaxed">
                                    {event.PLAYER}
                                </p>
                            </div>
                        )}

                        <div className="modal-item">
                            <ModalMap event={event} />
                        </div>

                        {event.ORG_LINK && (
                            <a
                                className="
                                    modal-item
                                    bg-main-blue text-white 
                                    py-2 md:py-4 w-45 md:w-70 
                                    mb-16 md:mb-25
                                    text-center m-auto 
                                    transition duration-300
                                    hover:bg-main-blue/80 hover:scale-105
                                "
                                href={event.ORG_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                홈페이지
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CultureModal;
