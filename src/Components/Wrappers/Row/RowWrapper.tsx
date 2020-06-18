import React from 'react';
import { RowWrapperProps } from '../../ITable';
import './rowWrapper.scss';

export default function RowWrapper<T>({
    children,
    onClick,
    record,
    index,
    ...rest
}: RowWrapperProps<T>) {
    return (
        <div
            {...rest}
            onClick={event => onClick!({ event, record: record as T })}
            key={`row_subgrid${index}`}
            className='row_subgrid'
        >
            {children}
        </div>
    );
}
