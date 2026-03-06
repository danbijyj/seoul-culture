const SearchBar = ({ value, onChange }) => {
    return (
        <div className="mb-6 bg-white">
            <input
                type="text"
                placeholder="문화행사를 검색하세요."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full px-6 py-4 border-3 border-main-green font-bold text-lg"
            />
        </div>
    );
};

export default SearchBar;
