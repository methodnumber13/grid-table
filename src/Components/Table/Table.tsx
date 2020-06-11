import React, { useEffect } from 'react';
import './table.scss';
import { TableProps } from '../ITable';
import Body from '../Body/Body';
import Head from '../Head/Head';
import constant from '../constants';
import { tableService } from '../services/services';
import SpinnerWrapper from '../Wrappers/Spinner/SpinnerWrapper';

export default function Table<T>(props: TableProps<T>) {
    const { columns, data, className, children, spinner, template, ...rest } = props;

    const isData = () => Array.isArray(data);

    function checkSpinner() {
        if (!spinner && !data?.length) {
            return <span>{'No data!'}</span>;
        } else if (spinner && !data?.length) {
            return <SpinnerWrapper>{spinner()}</SpinnerWrapper>;
        }
        return children;
    }

    const renderTable = () => {
        if (isData()) return checkSpinner();
    };

    useEffect(() => {
        tableService.setTableState({ data });
    }, [data]);
    useEffect(() => {
        tableService.setTableState({ columns });
    }, [columns]);
    useEffect(() => {
        tableService.setTableState({ template });
    }, [template]);

    return (
        <div {...rest} className={`${constant.GridTable} ${className}`}>
            {renderTable()}
        </div>
    );
}
Table.Body = Body;
Table.Head = Head;
