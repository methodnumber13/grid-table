import React from 'react';
import './button.scss';
import { HoverButtonProps, ExternalTProps } from '../ITable';
import { joinClasses } from '../Helpers';

export default function TableButton<T extends ExternalTProps>(props: HoverButtonProps<T>) {
    const { children, className = '', record, rowIndex, onClick, renderedData, ...rest } = props;

    const OnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClick!({ event, record, renderedData });
        event.stopPropagation();
    };
    return (
        <button
            onClick={OnClick}
            className={joinClasses('hover-btn', className)}
            key={`hover-button${rowIndex}`}
            {...rest}
        >
            {children}
        </button>
    );
}
