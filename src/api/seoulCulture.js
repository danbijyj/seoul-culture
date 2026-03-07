const API_KEY = import.meta.env.VITE_SEOUL_KEY;

const BASE_URL = import.meta.env.DEV
    ? `/seoul/${API_KEY}`
    : `https://openapi.seoul.go.kr:8088/${API_KEY}`;

export const fetchCultureData = async () => {
    const res = await fetch(`${BASE_URL}/json/culturalEventInfo/1/1000/`);

    if (!res.ok) throw new Error('데이터 요청 실패');

    const data = await res.json();
    const rows = data?.culturalEventInfo?.row ?? [];

    return rows.map((item, index) => ({
        ...item,
        id: `${item.IDX}-${index}`,
    }));
};
