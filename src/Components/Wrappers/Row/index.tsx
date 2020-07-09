import React, { FC } from 'react';
import { RowWrapperProps } from '../../';
import './rowWrapper.scss';

export type IRowWrapperProps<T = any> = FC<RowWrapperProps<T>>;

export const RowWrapper: IRowWrapperProps = function ({
    children,
    onClick,
    record,
    index,
    ...rest
}) {
    return (
        <div
            {...rest}
            onClick={event => onClick!({ event, record: record })}
            key={`row_subgrid${index}`}
            className='row_subgrid'
        >
            {children}
        </div>
    );
};
