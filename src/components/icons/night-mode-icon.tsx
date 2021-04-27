import React, {FC} from 'react';
import {IClassName} from '../../types/common';

const NightModeIcon: FC<IClassName> = ({className}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             className={className}
             fill="none"
             viewBox="0 0 20 20"
        >
            <path d="M8.33 5.83a5.83 5.83 0 0010 4.09V10A8.33 8.33 0 1110 1.67h.08a5.82 5.82 0 00-1.75 4.16zm-5 4.17a6.67 6.67 0 0012.55 3.13 7.5 7.5 0 01-9.02-9.01A6.67 6.67 0 003.33 10z" />
        </svg>
    )
}

export default NightModeIcon;