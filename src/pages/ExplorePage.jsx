import { useCallback, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import CultureGrid from '../components/CultureGrid/CultureGrid';
import CultureModal from '../components/CultureGrid/CultureModal';
import FilterBar from '../ui/FilterBar';
import SearchBar from '../ui/SearchBar';
import Pagination from '../ui/Pagination';

import { fetchCultureData } from '../api/seoulCulture';
import { useExplore } from '../hooks/useExplore';
import { useDebounce } from '../hooks/useDebounce';

const DEFAULT_FILTERS = {
    gu: '',
    code: '',
    free: '',
    sort: 'startAsc',
    keyword: '',
};

const ExplorePage = () => {
    const [selected, setSelected] = useState(null);
    const [page, setPage] = useState(1);
    const [filters, setFilters] = useState(DEFAULT_FILTERS);

    const debouncedKeyword = useDebounce(filters.keyword, 400);

    const { data, isLoading, isError } = useQuery({
        queryKey: ['culture'],
        queryFn: fetchCultureData,
        staleTime: 1000 * 60 * 10,
    });

    const { pagedExplore, guOptions, codeOptions, totalPages, totalCount } =
        useExplore({
            data,
            selectedGu: filters.gu,
            selectedCode: filters.code,
            selectedFree: filters.free,
            selectedSort: filters.sort,
            searchKeyword: debouncedKeyword,
            page,
        });

    const updateFilter = useCallback((key, value) => {
        setPage(1);
        setFilters((prev) => ({
            ...prev,
            [key]: value,
        }));
    }, []);

    const handleReset = useCallback(() => {
        setFilters(DEFAULT_FILTERS);
        setPage(1);
    }, []);

    if (isLoading)
        return <div className="p-20 text-center text-gray-600">로딩중...</div>;

    if (isError)
        return <div className="p-20 text-center text-red-500">에러 발생</div>;

    return (
        <section className="inner">
            <div className="py-25">
                <h2 className="relative font-[Pretendard] font-bold text-4xl text-center after:absolute after:content-[' '] after:left-1/2 after:-translate-x-1/2 after:-bottom-7 after:w-18 after:h-1 after:bg-main-green">
                    Explore
                </h2>
            </div>

            <article className="bg-gray-200 p-12 mb-14 rounded-2xl font-[Pretendard]">
                <SearchBar
                    value={filters.keyword}
                    onChange={(v) => updateFilter('keyword', v)}
                />
                <FilterBar
                    filters={filters}
                    guOptions={guOptions}
                    codeOptions={codeOptions}
                    onChange={updateFilter}
                    onReset={handleReset}
                    defaultFilters={DEFAULT_FILTERS}
                />
                <div className="text-right">
                    총 <strong className="text-main-blue">{totalCount}</strong>
                    개의 문화행사가 검색되었습니다.
                </div>
                {totalCount === 0 && (
                    <div className="py-16 text-center text-gray-400">
                        검색 조건 또는 검색어를 변경해보세요.
                    </div>
                )}
            </article>

            <CultureGrid
                data={pagedExplore}
                onSelect={setSelected}
                searchKeyword={filters.keyword}
            />

            {totalPages > 1 && (
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    onPrev={() => setPage((p) => Math.max(1, p - 1))}
                    onNext={() => setPage((p) => Math.min(totalPages, p + 1))}
                />
            )}

            {selected && (
                <CultureModal
                    event={selected}
                    onClose={() => setSelected(null)}
                />
            )}
        </section>
    );
};

export default ExplorePage;
