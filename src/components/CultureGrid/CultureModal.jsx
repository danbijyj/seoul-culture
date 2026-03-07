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
                className=" bg-white shadow-2xl rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative px-15 py-25 overflow-y-auto max-h-[90vh]">
                    <button
                        className="absolute top-10 right-10 text-5xl"
                        onClick={onClose}
                        aria-label="모달 닫기"
                    >
                        <BiSolidXSquare className="text-main-green cursor-pointer" />
                    </button>

                    <h2 className="text-2xl font-bold text-center font-[MaruBuri]">
                        {event.TITLE}
                    </h2>

                    <p className="w-full h-[1px] bg-main-green mt-9 mb-10"></p>

                    <div className="flex flex-col gap-13">
                        <div className="flex gap-10 items-start">
                            <p className="w-md flex-shrink-0">
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
                                className="bg-main-blue text-white py-4 w-70 text-center m-auto hover:bg-main-blue/80"
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
