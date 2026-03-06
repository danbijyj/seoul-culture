const Footer = () => {
    return (
        <footer className="bg-[url('/images/bg_footer.png')] bg-cover bg-center bg-no-repeat h-60 flex items-center">
            <div className="inner flex justify-between items-center">
                <div className="font-extrabold text-4xl">
                    2026 SEOUL
                    <br />
                    CULTURE PORTAL
                </div>
                <div className="text-right text-gray-600">
                    <p>ⓒ 2026 Seoul Culture Portal. All rights reserved.</p>
                    <p>Data provided by Seoul Public Data (data.seoul.go.kr)</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
