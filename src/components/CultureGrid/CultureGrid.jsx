import CultureCard from './CultureCard';

const CultureGrid = ({ data, onSelect, searchKeyword }) => {
    if (!data || data.length === 0) return null;

    return (
        <section className="grid grid-cols-3 gap-8">
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
