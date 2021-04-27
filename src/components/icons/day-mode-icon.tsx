import React, {FC} from 'react';
import {IClassName} from '../../types/common';

const DayModeIcon: FC<IClassName> = ({className}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             className={className}
             fill="none"
             viewBox="0 0 20 20"
        >
            <path d="M10 15a5 5 0 110-10 5 5 0 010 10zm0-1.67a3.33 3.33 0 100-6.66 3.33 3.33 0 000 6.66zM9.17.83h1.66v2.5H9.17V.83zm0 15.84h1.66v2.5H9.17v-2.5zM2.93 4.1L4.1 2.93 5.88 4.7 4.7 5.87 2.93 4.11zm11.2 11.2l1.17-1.19 1.77 1.77-1.18 1.18-1.77-1.77zm1.76-12.38l1.18 1.18-1.77 1.76-1.18-1.17 1.77-1.77zM4.7 14.13l1.19 1.17-1.77 1.77-1.18-1.18 1.77-1.77zm14.48-4.96v1.66h-2.5V9.17h2.5zm-15.84 0v1.66H.83V9.17h2.5z" />
        </svg>
    )
}

export default DayModeIcon;