const Pagination = ({ page, totalPages, onFirst, onPrev, onNext }) => {
    return (
        <div className="relative font-[Pretendard] mt-15 flex justify-between items-center">
            <button
                onClick={onFirst}
                disabled={page <= 1}
                className="px-20 py-4 bg-gray-300 disabled:opacity-40"
            >
                처음으로
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 flex">
                <button
                    onClick={onPrev}
                    disabled={page <= 1}
                    className="px-20 py-4 bg-white border border-main-blue disabled:opacity-50"
                >
                    이전
                </button>
                <button
                    onClick={onNext}
                    disabled={page >= totalPages}
                    className="px-20 py-4 bg-main-blue text-white disabled:opacity-50"
                >
                    다음
                </button>
            </div>
            <div className="text-xl">
                <span className="text-main-blue font-bold">{page}</span> /{' '}
                {totalPages}
            </div>
        </div>
    );
};

export default Pagination;
