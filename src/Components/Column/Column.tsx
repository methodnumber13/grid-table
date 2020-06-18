import React from 'react';
import { ColumnType } from '../ITable';
import constant from '../constants';
import { joinClasses, setTemplate } from '../Helpers';
import { useObservable } from '../customHooks/ObservableHook/observableHook';
import { tableSvc } from '../services/services';
import './column.scss';

export default function Column<T>(props: ColumnType<T>) {
    const { column, record, rowIndex, children, className = '', ...rest } = props;
    const { data, template } = useObservable(tableSvc.State);

    function renderColumn() {
        if (record) {
            if (column.toRender) {
                return column.toRender({
                    record,
                    index: rowIndex,
                    renderedData: data,
                });
            }
            return record[column.dataIndex as keyof T];
        }
        return null;
    }

    return (
        <span
            {...rest}
            className={joinClasses(
                `${constant.GridTable}_column`,
                `column_container`,
                setTemplate(template!),
                className
            )}
            data-key={`column${rowIndex}`}
        >
            {renderColumn()}
            {children}
        </span>
    );
}
