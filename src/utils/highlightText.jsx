export const highlightText = (text, keyword) => {
    const safeText = String(text ?? '');

    if (!keyword?.trim()) {
        return <>{safeText}</>;
    }

    const escaped = escapeRegExp(keyword.trim());
    const regex = new RegExp(`(${escaped})`, 'gi');

    const parts = safeText.split(regex);

    return (
        <>
            {parts.map((part, i) =>
                part.toLowerCase() === keyword.toLowerCase() ? (
                    <mark key={i} className="bg-yellow-300 rounded">
                        {part}
                    </mark>
                ) : (
                    part
                ),
            )}
        </>
    );
};

const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
