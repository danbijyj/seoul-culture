const SearchBar = ({ value, onChange }) => {
    return (
        <div className="mb-2 lg:mb-6 bg-white">
            <input
                type="text"
                placeholder="문화행사를 검색하세요."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full 
                px-4 lg:px-6
                py-2 md:py-4 
                text-base md:text-lg 
                border-3 border-main-green focus:outline-none"
            />
        </div>
    );
};

export default SearchBar;
