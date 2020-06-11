import React from 'react';
import { HeaderProps } from '../ITable';
import { useObservable } from '../customHooks/ObservableHook/observableHook';
import { tableService } from '../services/services';
import { joinClasses, setTemplate } from '../Helpers';
import HeadWrapper from '../Wrappers/Head/HeadWrapper';
import './head.scss';
import { Position } from '../DataTypes';

function Head<T>({
    className = '',
    style = {},
    position,
    wrapperStyle = {},
    ...rest
}: HeaderProps<T>) {
    const { columns, template } = useObservable(tableService.State);
    function setPosition() {
        const pos = Position[position!];
        if (pos) return { justifyContent: pos };
    }
    function renderHead() {
        return columns?.map(column => (
            <span
                {...rest}
                className={joinClasses(
                    'head_subgrid',
                    `column_container`,
                    setTemplate(template!),
                    className
                )}
                key={column.key}
                style={{ ...style, ...setPosition() }}
            >
                <span className='render_column_wrapper'>{column.title}</span>
            </span>
        ));
    }

    return <HeadWrapper style={wrapperStyle}>{renderHead()}</HeadWrapper>;
}
export default Head;
