import React, { FC } from 'react';
import { HeaderProps } from '../';
import { HeadWrapper } from '../Wrappers';
import { useObservable } from '../../Hooks';
import { tableSvc } from '../services/services';
import { jc, setTemplate } from '../../Helpers';
import './head.scss';
import { usePosition } from '../../Hooks';

export const Head: FC<HeaderProps> = function (props) {
    const { className = '', style = {}, position = 'start', wrapperStyle = {}, ...rest } = props;
    const { columns, template = 'table' } = useObservable(tableSvc.State);

    const setPosition = usePosition('head', position);

    const RenderHead = function () {
        const cn = jc('head_subgrid', `column_container`, setTemplate(template), className);
        return (
            <>
                {columns.map(column => (
                    <span
                        {...rest}
                        className={cn}
                        key={column.key}
                        style={{ ...style, ...setPosition }}
                    >
                        <span className='render_column_wrapper'>{column.title}</span>
                    </span>
                ))}
            </>
        );
    };

    return (
        <HeadWrapper style={wrapperStyle}>
            <RenderHead />
        </HeadWrapper>
    );
};
