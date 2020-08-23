import React, { useEffect, FC } from 'react';
import { RowProps, ExternalTProps, Column, HoverButton } from '../';
import { RowWrapper } from '../Wrappers';
import { tableSvc } from '../services/services';
import { useObservable } from '../../Hooks';
import './row.scss';

export type IRowProps<T = ExternalTProps> = FC<RowProps<T>>;
type RenderRowProps = { record: unknown };

export const Row: IRowProps = function (props) {
    const { hoverButton = null, ...rest } = props;
    const { columns, data } = useObservable(tableSvc.State);
    const addHoverButton = () => {
        columns.push({
            title: '',
            key: 'hover-button',
            dataIndex: 'hoverButton',
            toRender: ({ index, record, renderedData }) => (
                <HoverButton
                    className='hover-btn'
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

    return (
        <>
            {[...data].map((record, index) => (
                <RowWrapper record={record} index={index} key={`row${index}`} {...rest}>
                    <RenderRow record={record} />
                </RowWrapper>
            ))}
        </>
    );
};

const RenderRow: FC<RenderRowProps> = function ({ record }) {
    const { columns } = useObservable(tableSvc.State);
    return (
        <>
            {columns.map((column, i) => (
                <Column column={column} record={record} rowIndex={i} key={`${column.key}${i}`} />
            ))}
        </>
    );
};
