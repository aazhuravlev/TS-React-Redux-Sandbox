import React, {FC, useState} from "react";
import {CSSTransition} from "react-transition-group"
import "./select.css"
import {IClassName} from "../../types/common";

interface ISpec {
    label: string;
    value: string;
}

interface ISelectProps extends IClassName {
    label: string,
    specs: ISpec[],
    onClick: (item: ISpec) => void
}


const Select: FC<ISelectProps> =
    ({
         label,
         specs,
         onClick,
    }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const List: FC = () => {
        const clickHandler = (item: ISpec): void => {
            setIsOpen(false);
            onClick(item);
        }
        return (
            <ul className="select__list">
                {
                    specs.map((item, i) => (
                        <li
                            className="select__item"
                            key={i}
                        >
                            <button
                                className="select__item-btn"
                                onClick={() => clickHandler(item)}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))
                }
            </ul>
        )
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
                <List />
            </CSSTransition>
        </div>
    )
}

export default Select;