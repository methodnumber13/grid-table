import React, { useEffect } from 'react';
import { RowProps, ExternalTProps } from '../ITable';
import HoverButton from '../Button/Button';
import { tableSvc } from '../services/services';
import { useObservable } from '../customHooks/ObservableHook/observableHook';
import Column from '../Column/Column';
import RowWrapper from '../Wrappers/Row/RowWrapper';
import './row.scss';

function Row<T extends ExternalTProps>(props: RowProps<T>) {
    const { hoverButton, ...rest } = props;
    const { columns, data } = useObservable(tableSvc.State);
    const addHoverButton = () => {
        columns.push({
            title: '',
            key: 'hover-button',
            dataIndex: 'hoverButton',
            toRender: ({ index, record, renderedData }) => (
                <HoverButton
                    renderedData={renderedData}
                    record={record}
                    rowIndex={index}
                    {...hoverButton}
                />
            ),
        });
    };
    useEffect(() => {
        if (hoverButton && !columns.find(el => el.key === 'hover-button')) {
            addHoverButton();
            tableSvc.setTableState({ columns });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [columns, hoverButton]);

    function renderRow(record: T) {
        return columns.map((column, i) => (
            <Column column={column} record={record} rowIndex={i} key={`${column.key}${i}`} />
        ));
    }

    return (
        <>
            {[...data].map((record, index) => (
                <RowWrapper record={record} index={index} {...rest}>
                    {renderRow(record)}
                </RowWrapper>
            ))}
        </>
    );
}
Row.HoverButton = HoverButton;
export default Row;
