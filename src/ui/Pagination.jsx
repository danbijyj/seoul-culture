const Pagination = ({ page, totalPages, onFirst, onPrev, onNext }) => {
    const baseBtn =
        'transition-all duration-200 ease-out active:scale-95 hover:-translate-y-0.5 hover:shadow-md';

    return (
        <div className="relative mt-15 flex justify-between items-center">
            <button
                onClick={onFirst}
                disabled={page <= 1}
                className={`${baseBtn} bg-gray-200 disabled:opacity-40 
                px-3 md:px-8 
                py-1 md:py-3`}
            >
                처음
            </button>

            <div className="absolute left-1/2 -translate-x-1/2 flex gap-2">
                <button
                    onClick={onPrev}
                    disabled={page <= 1}
                    className={`${baseBtn} 
                    border border-main-blue text-main-blue 
                    disabled:opacity-40 
                    hover:bg-main-blue/10
                    px-4 md:px-8 
                    py-1 md:py-3`}
                >
                    이전
                </button>

                <button
                    onClick={onNext}
                    disabled={page >= totalPages}
                    className={`${baseBtn} 
                    bg-main-blue text-white 
                    disabled:opacity-40
                    hover:bg-main-blue/90
                    px-4 md:px-8 
                    py-1 md:py-3`}
                >
                    다음
                </button>
            </div>

            <div className="text-base lg:text-xl flex items-center gap-2">
                <span
                    key={page}
                    className="text-main-blue font-bold transition-all duration-200 animate-pulse"
                >
                    {page}
                </span>
                /<span>{totalPages}</span>
            </div>
        </div>
    );
};

export default Pagination;
