import React from 'react';
import { BodyProps } from '../ITable';
import Row from '../Row/Row';
import { useObservable } from '../customHooks/ObservableHook/observableHook';
import { tableSvc } from '../services/services';
import { joinClasses } from '../Helpers';

export default function Body<T>(props: BodyProps<T>) {
    const { children, className = '', ...rest } = props;
    const { data } = useObservable(tableSvc.State);

    const renderChildren = () => {
        if (data && data.length) return children;

        return null;
    };

    return (
        <div className={joinClasses('grid_table_body', className)} {...rest}>
            {renderChildren()}
        </div>
    );
}
Body.Row = Row;
