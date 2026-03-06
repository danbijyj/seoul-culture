const Pagination = ({ page, totalPages, onPrev, onNext }) => {
    return (
        <div className="flex flex-col items-center gap-3 pb-10">
            <div className="flex gap-3">
                <button
                    onClick={onPrev}
                    disabled={page <= 1}
                    className="px-4 py-2 rounded bg-gray-200 disabled:opacity-40"
                >
                    이전
                </button>
                <button
                    onClick={onNext}
                    disabled={page >= totalPages}
                    className="px-4 py-2 rounded bg-black text-white disabled:opacity-40"
                >
                    다음
                </button>
            </div>
            <div className="text-sm text-gray-400">
                {page} / {totalPages}
            </div>
        </div>
    );
};

export default Pagination;
