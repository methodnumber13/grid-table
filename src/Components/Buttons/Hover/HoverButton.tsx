import React from 'react';
import './hoverButton.scss';
import { jc } from '../../Helpers';
import constant from '../../constants';
import { IHoverButtonProps, Button } from '../';

export const HoverButton: IHoverButtonProps = function (props) {
    const { children, className = '', record, rowIndex, onClick, renderedData, ...rest } = props;

    const OnClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClick ? onClick!({ event, record, renderedData }) : null;
        event.stopPropagation();
    };
    return (
        <Button
            onClick={OnClick}
            className={jc('hover_btn', className)}
            key={`${constant.GridTable}_button${rowIndex}`}
            {...rest}
        >
            {children}
        </Button>
    );
};
