import { BiCaretDown } from 'react-icons/bi';

const SelectBox = ({ value, onChange, ariaLabel, children }) => {
    return (
        <div className="relative">
            <select
                value={value}
                onChange={onChange}
                aria-label={ariaLabel}
                className="px-6 py-4 border border-main-green w-full bg-white appearance-none focus:outline-none"
            >
                {children}
            </select>
            <BiCaretDown className="absolute right-4 top-1/2 -translate-y-1/2 text-main-green text-xl pointer-events-none" />
        </div>
    );
};

export default SelectBox;
