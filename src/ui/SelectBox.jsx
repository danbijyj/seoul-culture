import { BiCaretDown } from 'react-icons/bi';

const SelectBox = ({ value, onChange, ariaLabel, children }) => {
    return (
        <div className="relative">
            <select
                value={value}
                onChange={onChange}
                aria-label={ariaLabel}
                className="border border-main-green w-full bg-white appearance-none focus:outline-none 
                px-4 lg:px-6
                py-2 md:py-4
                "
            >
                {children}
            </select>
            <BiCaretDown
                className="absolute top-1/2 -translate-y-1/2 
            right-2 md:right-4
            text-main-green text-xl pointer-events-none"
            />
        </div>
    );
};

export default SelectBox;
