import React, { useEffect } from 'react';
import { RowProps, ExternalTProps } from '../ITable';
import HoverButton from '../Button/Button';
import { tableService } from '../services/services';
import { useObservable } from '../customHooks/ObservableHook/observableHook';
import Column from '../Column/Column';
import './row.scss';

function Row<T extends ExternalTProps>(props: RowProps<T>) {
    const { onClick, children, hoverButton, ...rest } = props;
    const { columns, data } = useObservable(tableService.State);
    const addHoverButton = () => {
        columns?.push({
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
        if (hoverButton && !columns?.find(el => el.key === 'hover-button')) {
            addHoverButton();
            tableService.setTableState({ columns });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [columns, hoverButton]);

    function renderRow(record: T) {
        return columns?.map((column, i) => (
            <Column column={column} record={record} rowIndex={i} key={`${column.key}${i}`} />
        ));
    }

    function renderRows(record: T, index: number) {
        return (
            <div
                {...rest}
                onClick={event => onClick!({ event, record })}
                key={`row_subgrid${index}`}
                className='row_subgrid'
            >
                {renderRow(record)}
            </div>
        );
    }

    return <>{[...data!].map((record, index) => renderRows(record, index))}</>;
}
Row.HoverButton = HoverButton;
export default Row;
