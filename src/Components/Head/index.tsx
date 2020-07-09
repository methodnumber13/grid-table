import React, { FC } from 'react';
import { HeaderProps, HeadWrapper } from '../';
import { useObservable } from '../customHooks/ObservableHook/observableHook';
import { tableSvc } from '../services/services';
import { jc, setTemplate } from '../Helpers';
import './head.scss';
import { Position } from '../DataTypes';

export type IHeadProps<T = any> = FC<HeaderProps<T>>;

export const Head: IHeadProps = function (props) {
    const { className = '', style = {}, position, wrapperStyle = {}, ...rest } = props;
    const { columns, template } = useObservable(tableSvc.State);

    function setPosition() {
        const pos = Position[position!];
        if (pos) return { justifyContent: pos };
    }

    function renderHead() {
        const cn = jc('head_subgrid', `column_container`, setTemplate(template!), className);
        return columns.map(column => (
            <span {...rest} className={cn} key={column.key} style={{ ...style, ...setPosition() }}>
                <span className='render_column_wrapper'>{column.title}</span>
            </span>
        ));
    }

    return <HeadWrapper style={wrapperStyle}>{renderHead()}</HeadWrapper>;
};
