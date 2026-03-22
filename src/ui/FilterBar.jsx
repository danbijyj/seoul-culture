import SelectBox from './SelectBox';

const FilterBar = ({
    filters,
    guOptions,
    codeOptions,
    onChange,
    onReset,
    defaultFilters,
}) => {
    const isFiltered = Object.keys(defaultFilters).some(
        (key) => filters[key] !== defaultFilters[key],
    );

    return (
        <div className="mb-4 grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-6">
            <SelectBox
                value={filters.gu}
                onChange={(e) => onChange('gu', e.target.value)}
                aria-label="구 선택"
            >
                <option value="">구 전체</option>
                {guOptions?.map((gu) => (
                    <option key={gu} value={gu}>
                        {gu}
                    </option>
                ))}
            </SelectBox>

            <SelectBox
                value={filters.code}
                onChange={(e) => onChange('code', e.target.value)}
                aria-label="분류 선택"
            >
                <option value="">분류 전체</option>
                {codeOptions?.map((code) => (
                    <option key={code} value={code}>
                        {code}
                    </option>
                ))}
            </SelectBox>

            <SelectBox
                value={filters.free}
                onChange={(e) => onChange('free', e.target.value)}
                aria-label="요금 선택"
            >
                <option value="">요금 전체</option>
                <option value="free">무료</option>
                <option value="paid">유료</option>
            </SelectBox>

            <SelectBox
                value={filters.sort}
                onChange={(e) => onChange('sort', e.target.value)}
                aria-label="시작일 선택"
            >
                <option value="startAsc">빠른 시작일 순</option>
                <option value="startDesc">늦은 시작일 순</option>
                <option value="endAsc">종료 임박순</option>
            </SelectBox>

            <button
                type="button"
                onClick={onReset}
                disabled={!isFiltered}
                className={`col-span-2 lg:col-span-1 
                    py-2 md:py-4 w-full
                    bg-main-blue text-white text-base md:text-lg font-bold
                    transform will-change-transform
                    transition-all duration-200 ease-out
                    hover:-translate-y-1
                    hover:shadow-lg
                    active:scale-95 
                ${
                    isFiltered
                        ? 'hover:bg-main-blue/90 text-white cursor-pointer'
                        : 'cursor-not-allowed'
                }`}
            >
                전체 초기화
            </button>
        </div>
    );
};

export default FilterBar;
