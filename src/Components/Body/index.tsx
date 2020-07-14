import React, { FC } from 'react';
import { BodyProps } from '../';
import { useObservable } from '../customHooks/ObservableHook/observableHook';
import { tableSvc } from '../services/services';
import { jc } from '../Helpers';

export type IBodyProps<T = unknown> = FC<BodyProps<T>>;

export const Body: IBodyProps = function (props) {
    const { children, className = '', ...rest } = props;
    const { data } = useObservable(tableSvc.State);

    const renderChildren = () => {
        if (data && data.length) return children;

        return null;
    };

    return (
        <div className={jc('grid_table_body', className)} {...rest}>
            {renderChildren()}
        </div>
    );
};
