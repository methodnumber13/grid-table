import React, { FC } from 'react';
import { ColumnType } from '../';
import constant from '../../constants';
import { jc, setTemplate } from '../../Helpers';
import { useObservable } from '../../Hooks';
import { tableSvc } from '../services/services';
import './column.scss';

export type IColumnProps<T = any> = FC<ColumnType<T>>;

export const Column: IColumnProps = function (props) {
    const { column, record, rowIndex, children, className = '', ...rest } = props;
    const { data, template = 'table' } = useObservable(tableSvc.State);

    function renderColumn() {
        if (record) {
            if (column.toRender) {
                return column.toRender({
                    record,
                    index: rowIndex,
                    renderedData: data,
                });
            }
            return (
                <span className='render_column_wrapper'>{record[column.dataIndex as string]}</span>
            );
        }
        return null;
    }

    return (
        <span
            {...rest}
            className={jc(
                `${constant.GridTable}_column`,
                `column_container`,
                setTemplate(template),
                className
            )}
            data-key={`column${rowIndex}`}
        >
            {renderColumn()}
            {children}
        </span>
    );
};
