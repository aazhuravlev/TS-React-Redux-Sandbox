import React, {FC, useState, useEffect, useRef, memo} from "react";
import {CSSTransition} from "react-transition-group"
import "./select.css"
import {IClassName} from "../../types/common";

interface ISpec {
    label: string;
    value: string;
}

interface ISelectDropdownProps {
    specs: ISpec[],
    onClick: (item: ISpec | undefined) => void
}

interface ISelectProps extends IClassName, ISelectDropdownProps {
    label: string
}

const SelectDropdown: FC<ISelectDropdownProps> = memo(({specs, onClick}) => {
    const dropdown = useRef(null);
    
    useEffect(() => {
        const onClickOutside = (e) => {
            // @ts-ignore
            if (dropdown && !dropdown.current.contains(e.target)) {
                onClick(undefined);
            }
        }
        setTimeout(() => document.addEventListener('click', onClickOutside), 0)

        return () => {
            document.removeEventListener('click', onClickOutside);
        }
    }, [onClick])

    return (
        <ul ref={dropdown} className="select__list">
            {
                specs.map((item, i) => (
                    <li
                        className="select__item"
                        key={i}
                    >
                        <button
                            className="select__item-btn"
                            onClick={() => onClick(item)}
                        >
                            {item.label}
                        </button>
                    </li>
                ))
            }
        </ul>
    )
}, () => true)

const Select: FC<ISelectProps> =
    memo(({
         label,
         specs,
         onClick,
    }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const clickHandler = (item: ISpec | undefined) => {
        if (item) {
            onClick(item)
        }
        setIsOpen(false)
    }

    return (
        <div className="select">
            <button
                className={`select__btn ${isOpen ? '_opened' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {label}
            </button>
            <CSSTransition
                in={isOpen}
                classNames="appear"
                unmountOnExit
                timeout={300}
            >
                <SelectDropdown specs={specs} onClick={clickHandler} />
            </CSSTransition>
        </div>
    )
})

export default Select;