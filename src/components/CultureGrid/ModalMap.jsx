import { useEffect, useRef } from 'react';

const ModalMap = ({ event }) => {
    const mapRef = useRef(null);

    useEffect(() => {
        if (!event?.LAT || !event?.LOT) return;
        window.kakao.maps.load(() => {
            const container = mapRef.current;
            const options = {
                center: new window.kakao.maps.LatLng(event.LAT, event.LOT),
                level: 3,
            };
            const map = new window.kakao.maps.Map(container, options);
            const markerPosition = new window.kakao.maps.LatLng(
                event.LAT,
                event.LOT,
            );
            const marker = new window.kakao.maps.Marker({
                position: markerPosition,
            });
            marker.setMap(map);
        });
    }, [event]);

    return (
        <div className="flex flex-col gap-0">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">위치</h3>
                <a
                    href={`https://map.kakao.com/link/map/${event.PLACE},${event.LAT},${event.LOT}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-main-blue text-white text-center
                    py-1 md:py-2 px-5                      
                    transform will-change-transform
                    transition-all duration-200 ease-out 
                    hover:bg-main-blue/90
                    hover:-translate-y-1
                    hover:shadow-lg
                    active:scale-95"
                >
                    카카오 지도
                </a>
            </div>
            <div
                ref={mapRef}
                className="w-full h-[320px] border border-stroke"
            ></div>
        </div>
    );
};

export default ModalMap;
