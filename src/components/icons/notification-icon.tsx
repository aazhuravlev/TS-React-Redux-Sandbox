import React, {FC} from 'react';
import {IClassName} from '../../types/common';

const NotificationIcon: FC<IClassName> = ({className}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             className={className}
             fill="none"
             viewBox="0 0 20 20"
        >
            <path
                fillRule="evenodd"
                d="M17.5 9.92v6.75h-15V9.19a7.51 7.51 0 017.76-7.52A6.5 6.5 0 0010 3.33 5.85 5.85 0 004.17 9.2V15h11.66V9.97a6.58 6.58 0 001.67-.05zm-6.03 9.05c.4-.39.61-.92.61-1.47H7.92a2.08 2.08 0 003.55 1.47z"
                clipRule="evenodd" />
            <circle cx="16.67"
                    cy="3.33"
                    r="2.5"
                    fill="#F84AB3" />
        </svg>
    )
}

export default NotificationIcon;