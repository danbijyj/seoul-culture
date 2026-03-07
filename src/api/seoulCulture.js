export const fetchCultureData = async () => {
    const url = import.meta.env.DEV
        ? `/seoul/${import.meta.env.VITE_SEOUL_KEY}/json/culturalEventInfo/1/1000/`
        : `/api/seoul`;

    const res = await fetch(url);

    if (!res.ok) throw new Error('데이터 요청 실패');

    const data = await res.json();
    const rows = data?.culturalEventInfo?.row ?? [];

    return rows.map((item, index) => ({
        ...item,
        id: `${item.IDX}-${index}`,
    }));
};
