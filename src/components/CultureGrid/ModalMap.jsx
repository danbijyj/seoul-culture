import { useEffect, useRef } from 'react';

const ModalMap = ({ event }) => {
    return (
        <>
            <div className="flex justify-between items-center">
                <h3 className="font-bold">위치</h3>
                <a
                    href={`https://map.kakao.com/link/map/${event.PLACE},${event.LAT},${event.LOT}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-main-blue text-white font-bold py-2 px-4 text-center transition hover:bg-main-blue/80"
                >
                    카카오 지도
                </a>
            </div>
            <div></div>
        </>
    );
};

export default ModalMap;
