import SelectBox from './SelectBox';
import { BiCaretDown } from 'react-icons/bi';

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
        <div className="mb-4 grid grid-cols-5 gap-6">
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
                className={`py-4 w-full transition bg-main-blue text-white text-lg font-bold 
                ${
                    isFiltered
                        ? 'hover:bg-main-blue/80 text-white'
                        : 'cursor-not-allowed'
                }`}
            >
                전체 초기화
            </button>
        </div>
    );
};

export default FilterBar;
