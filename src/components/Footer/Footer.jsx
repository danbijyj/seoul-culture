const Footer = () => {
    return (
        <footer className="bg-[url('/images/bg_footer.png')] bg-cover bg-center bg-no-repeat h-40 lg:h-60 flex items-center">
            <div className="inner px-4 lg:px-0 flex flex-wrap justify-between items-center gap-2 md:gap-0">
                <div className="font-extrabold text-xl md:text-2xl lg:text-4xl">
                    SEOUL CULTURE PORTAL
                </div>
                <div className="text-left md:text-right text-gray-600 text-sm lg:text-base">
                    <p>ⓒ Seoul Culture Portal. All rights reserved.</p>
                    <p>
                        Data provided by Seoul Public Data (openapi.seoul.go.kr)
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
