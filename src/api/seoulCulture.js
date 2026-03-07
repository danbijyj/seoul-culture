export const fetchCultureData = async () => {
    const res = await fetch(`/api/seoul`);

    if (!res.ok) throw new Error('데이터 요청 실패');

    const data = await res.json();
    const rows = data?.culturalEventInfo?.row ?? [];

    return rows.map((item, index) => ({
        ...item,
        id: `${item.IDX}-${index}`,
    }));
};
