import { useEffect } from 'react';
import { BiSolidXSquare } from 'react-icons/bi';
import ModalMap from './ModalMap';
import ModalInfo from './ModalInfo';

const CultureModal = ({ event, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
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
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            onClick={handleOverlayClick}
            role="dialog"
            aria-modal="true"
        >
            <div
                className=" bg-white shadow-2xl rounded-2xl overflow-hidden
                w-[95vw] lg:w-full lg:max-w-5xl 
                max-h-[85vh] lg:max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    className="relative overflow-y-auto max-h-[85vh] lg:max-h-[90vh]
                px-5 md:px-10 lg:px-15 
                py-16 md:py-25"
                >
                    <button
                        className="absolute 
                        text-3xl md:text-5xl 
                        top-4 md:top-6 lg:top-10 
                        right-4 md:right-6 lg:right-10"
                        onClick={onClose}
                        aria-label="모달 닫기"
                    >
                        <BiSolidXSquare className="text-main-green cursor-pointer" />
                    </button>

                    <h2 className="text-lg md:text-2xl font-bold text-center font-[MaruBuri]">
                        {event.TITLE}
                    </h2>

                    <hr className="w-full border-none h-[1px] bg-main-green my-7 md:my-9" />

                    <div className="flex flex-col gap-13">
                        <div className="flex flex-wrap justify-center gap-10 items-start">
                            <p className="w-full md:w-md flex-shrink-0">
                                <img
                                    src={event.MAIN_IMG}
                                    alt={event.TITLE}
                                    className="w-full h-auto object-contain"
                                />
                            </p>
                            <div className="flex-1">
                                <ModalInfo event={event} />
                            </div>
                        </div>

                        {event.PROGRAM?.trim() && (
                            <div>
                                <h3 className="text-lg font-bold mb-2">
                                    프로그램소개
                                </h3>
                                <p className="text-text text-base">
                                    {event.PROGRAM}
                                </p>
                            </div>
                        )}

                        {event.PLAYER?.trim() && (
                            <div>
                                <h3 className="text-lg font-bold mb-2">
                                    출연자 정보
                                </h3>
                                <p className="text-text text-base">
                                    {event.PLAYER}
                                </p>
                            </div>
                        )}

                        <ModalMap event={event} />

                        {event.ORG_LINK && (
                            <a
                                href={event.ORG_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-main-blue text-white py-2 md:py-4 w-45 md:w-70 text-center m-auto hover:bg-main-blue/80"
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
