export default async function handler(req, res) {
    const API_KEY = process.env.VITE_SEOUL_KEY;

    const url = `http://openapi.seoul.go.kr:8088/${API_KEY}/json/culturalEventInfo/1/1000/`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'API 요청 실패' });
    }
}
