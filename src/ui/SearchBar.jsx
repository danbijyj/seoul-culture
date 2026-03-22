const SearchBar = ({ value, onChange }) => {
    return (
        <div className="mb-2 lg:mb-6 bg-white">
            <input
                type="text"
                placeholder="문화행사를 검색하세요."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full text-base md:text-lg
                px-4 lg:px-6 py-2 md:py-4 
                border-3 border-main-green
                transition-all duration-200
                focus:outline-none 
                focus:ring-3 focus:ring-main-green/30
              focus:border-main-green
              placeholder:text-gray-400"
            />
        </div>
    );
};

export default SearchBar;
