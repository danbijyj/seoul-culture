const Pagination = ({ page, totalPages, onFirst, onPrev, onNext }) => {
    return (
        <div className="relative mt-15 flex justify-between items-center">
            <button
                onClick={onFirst}
                disabled={page <= 1}
                className="bg-gray-300 disabled:opacity-40
                px-3 md:px-10 lg:px-20 
                py-1 md:py-3 lg:py-4"
            >
                처음으로
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 flex">
                <button
                    onClick={onPrev}
                    disabled={page <= 1}
                    className="bg-white border border-main-blue disabled:opacity-50 enabled:bg-main-blue/8
                    px-4 md:px-10 lg:px-20 
                    py-1 md:py-3 lg:py-4"
                >
                    이전
                </button>
                <button
                    onClick={onNext}
                    disabled={page >= totalPages}
                    className="bg-main-blue text-white disabled:opacity-50
                    px-4 md:px-10 lg:px-20 
                    py-1 md:py-3 lg:py-4"
                >
                    다음
                </button>
            </div>
            <div className="text-base lg:text-xl">
                <span className="text-main-blue font-bold">{page}</span> /{' '}
                {totalPages}
            </div>
        </div>
    );
};

export default Pagination;
