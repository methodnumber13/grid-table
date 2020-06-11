import React from 'react';
import constant from '../../constants';
import { HeadWrapperProps } from '../../ITable';
import './headWrapper.scss';
import { useObservable } from '../../customHooks/ObservableHook/observableHook';
import { tableService } from '../../services/services';

export default function RenderHeads({ children, style = {} }: HeadWrapperProps) {
    const { columns, data } = useObservable(tableService.State);
    const checkAfterFiltering = () => {
        const lengthAfterFilter = columns?.filter(col => col.title).length;
        return lengthAfterFilter === columns?.length || lengthAfterFilter === columns!.length - 1;
    };

    function renderWrapper() {
        if (data && data.length && checkAfterFiltering())
            return (
                <div className={`${constant.GridTable}_wrapper_head`} style={style}>
                    {children}
                </div>
            );

        return null;
    }

    return renderWrapper();
}
