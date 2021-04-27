import React, {FC} from 'react';
import {IClassName} from '../../types/common';

const ChatIcon: FC<IClassName> = ({className}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             className={className}
             fill="none"
             viewBox="0 0 20 20"
        >
            <path d="M1.67 7.5a5 5 0 015-5h6.66a5 5 0 015 5v10H6.67a5 5 0 01-5-5v-5zm15 8.33V7.5a3.34 3.34 0 00-3.34-3.33H6.67A3.33 3.33 0 003.33 7.5v5a3.34 3.34 0 003.34 3.33h10zm-5-6.66h1.66v1.66h-1.66V9.17zm-5 0h1.66v1.66H6.67V9.17z" />
        </svg>
    )
}

export default ChatIcon;