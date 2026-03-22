import { BiCaretDown } from 'react-icons/bi';

const SelectBox = ({ value, onChange, ariaLabel, children }) => {
    return (
        <div className="relative group">
            <select
                value={value}
                onChange={onChange}
                aria-label={ariaLabel}
                className="border border-main-green 
                           w-full bg-white appearance-none 
                           px-4 lg:px-6
                           py-2 md:py-4
                           transition-all duration-200
                         hover:border-main-blue
                         focus:border-main-blue
                           focus:outline-none"
            >
                {children}
            </select>
            <BiCaretDown
                className="absolute top-1/2 -translate-y-1/2 
                           right-2 md:right-4 
                           transition-all duration-200
                         text-main-green 
                         group-hover:text-main-blue
                           text-xl pointer-events-none"
            />
        </div>
    );
};

export default SelectBox;
