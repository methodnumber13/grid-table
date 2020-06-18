import React, { useEffect } from 'react';
import './table.scss';
import { TableProps } from '../ITable';
import Body from '../Body/Body';
import Head from '../Head/Head';
import Row from '../Row/Row';
import constant from '../constants';
import { tableSvc } from '../services/services';
import SpinnerWrapper from '../Wrappers/Spinner/SpinnerWrapper';

export default function Table<T>(props: TableProps<T>) {
    const { columns, data, className, children, spinner, template, ...rest } = props;

    const isData = () => Array.isArray(data);

    function checkSpinner() {
        if (!spinner && !data.length) {
            return <span>{'No data!'}</span>;
        } else if (spinner && !data.length) {
            return <SpinnerWrapper>{spinner()}</SpinnerWrapper>;
        }
        return (
            children || (
                <>
                    <Head />
                    <Body>
                        <Row />
                    </Body>
                </>
            )
        );
    }

    const renderTable = () => {
        if (isData()) return checkSpinner();
    };

    useEffect(() => {
        tableSvc.setTableState({ data });
    }, [data]);
    useEffect(() => {
        tableSvc.setTableState({ columns });
    }, [columns]);
    useEffect(() => {
        tableSvc.setTableState({ template });
    }, [template]);

    return (
        <div {...rest} className={`${constant.GridTable} ${className}`}>
            {renderTable()}
        </div>
    );
}
Table.Body = Body;
Table.Head = Head;
