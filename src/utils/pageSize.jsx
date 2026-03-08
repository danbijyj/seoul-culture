export const getPageSize = () => {
    if (typeof window === 'undefined') return 9;

    const w = window.innerWidth;

    if (w < 768) return 5;
    if (w < 1024) return 8;
    return 9;
};
