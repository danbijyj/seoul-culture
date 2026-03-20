import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import CultureCard from './CultureCard';

const CultureGrid = ({ data, onSelect, searchKeyword }) => {
    const gridRef = useRef(null);

    useEffect(() => {
        const cards = gridRef.current?.children;

        gsap.fromTo(
            cards,
            { opacity: 0, y: 40, scale: 0.95 },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                stagger: 0.08,
                ease: 'power3.out',
            },
        );
    }, []);

    if (!data || data.length === 0) return null;

    return (
        <section
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
            {data.map((event) => (
                <CultureCard
                    key={event.id}
                    event={event}
                    onSelect={onSelect}
                    searchKeyword={searchKeyword}
                />
            ))}
        </section>
    );
};

export default CultureGrid;
