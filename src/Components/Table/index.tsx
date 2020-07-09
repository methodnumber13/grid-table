import React, { useEffect, FC } from 'react';
import './table.scss';
import { Body, Head, Row, TableProps, SpinnerWrapper } from '../';
import constant from '../constants';
import { tableSvc } from '../services/services';

export type ITableProps<T = unknown> = FC<TableProps<T>>;

export const Table: ITableProps = function (props) {
    const { columns, data, className, children, spinner, template, ...rest } = props;
    const isData = () => Array.isArray(data);
    const Children = () => (
        <>
            <Head />
            <Body>
                <Row />
            </Body>
        </>
    );

    function checkSpinner() {
        if (!spinner && !data.length) {
            return <span>{'No data!'}</span>;
        } else if (spinner && !data.length) {
            return <SpinnerWrapper>{spinner()}</SpinnerWrapper>;
        }
        return children ?? <Children />;
    }

    const renderTable = () => {
        if (isData()) return checkSpinner();
    };

    useEffect(() => {
        if (data.length) tableSvc.setTableState({ data });

        if (columns.length) tableSvc.setTableState({ columns });
    }, [data, columns]);

    useEffect(() => {
        tableSvc.setTableState({ template });
    }, [template]);

    return (
        <div {...rest} className={`${constant.GridTable} ${className}`}>
            {renderTable()}
        </div>
    );
};
