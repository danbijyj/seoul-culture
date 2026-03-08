import { useMemo } from 'react';
import { todayYMD, isOngoingOrUpcoming } from '../utils/date';
import { getPageSize } from '../utils/pageSize';

export const useExplore = ({
    data,
    selectedGu,
    selectedCode,
    selectedFree,
    selectedSort,
    searchKeyword,
    page,
}) => {
    const today = todayYMD();
    const PAGE_SIZE = getPageSize();

    const exploreBase = useMemo(() => {
        const rows = data || [];
        return rows.filter((e) => isOngoingOrUpcoming(e, today));
    }, [data, today]);

    const guOptions = useMemo(() => {
        return [
            ...new Set(exploreBase.map((e) => e.GUNAME).filter(Boolean)),
        ].sort((a, b) => a.localeCompare(b, 'ko'));
    }, [exploreBase]);

    const codeOptions = useMemo(() => {
        return [
            ...new Set(exploreBase.map((e) => e.CODENAME).filter(Boolean)),
        ].sort((a, b) => a.localeCompare(b, 'ko'));
    }, [exploreBase]);

    const filteredSortedData = useMemo(() => {
        let list = [...exploreBase];
        if (selectedGu) {
            list = list.filter((e) => e.GUNAME === selectedGu);
        }
        if (selectedCode) {
            list = list.filter((e) => e.CODENAME === selectedCode);
        }
        if (selectedFree === 'free') {
            list = list.filter((e) => String(e.IS_FREE).trim() === '무료');
        }
        if (selectedFree === 'paid') {
            list = list.filter((e) => String(e.IS_FREE).trim() === '유료');
        }
        if (searchKeyword) {
            const keyword = searchKeyword.toLowerCase();
            list = list.filter(
                (e) =>
                    e.TITLE?.toLowerCase().includes(keyword) ||
                    e.PLACE?.toLowerCase().includes(keyword) ||
                    e.CODENAME?.toLowerCase().includes(keyword) ||
                    e.GUNAME?.toLowerCase().includes(keyword) ||
                    e.ORG_NAME?.toLowerCase().includes(keyword),
            );
        }
        if (selectedSort === 'startAsc') {
            list.sort((a, b) => new Date(a.STRTDATE) - new Date(b.STRTDATE));
        }
        if (selectedSort === 'startDesc') {
            list.sort((a, b) => new Date(b.STRTDATE) - new Date(a.STRTDATE));
        }
        if (selectedSort === 'endAsc') {
            list.sort((a, b) => new Date(a.END_DATE) - new Date(b.END_DATE));
        }
        return list;
    }, [
        exploreBase,
        selectedGu,
        selectedCode,
        selectedFree,
        selectedSort,
        searchKeyword,
    ]);

    const totalPages = Math.max(
        1,
        Math.ceil(filteredSortedData.length / PAGE_SIZE),
    );

    const startIndex = (page - 1) * PAGE_SIZE;

    const pagedExplore = filteredSortedData.slice(
        startIndex,
        startIndex + PAGE_SIZE,
    );

    return {
        pagedExplore,
        guOptions,
        codeOptions,
        totalPages,
        totalCount: filteredSortedData.length,
    };
};
