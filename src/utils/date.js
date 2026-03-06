export const todayYMD = () => {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
};

export const isOngoingOrUpcoming = (event, today) => {
    const end = event?.END_DATE;
    if (!end) return false;
    return String(end) >= today;
};
