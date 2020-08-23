import React, { FC } from 'react';
import constant from '../../../constants';
import { HeadWrapperProps } from '../../';
import './headWrapper.scss';
import { useObservable } from '../../../Hooks';
import { tableSvc } from '../../services/services';

export const HeadWrapper: FC<HeadWrapperProps> = function ({ children, style = {} }) {
    const { columns, data } = useObservable(tableSvc.State);
    const checkAfterFiltering = () => {
        const lengthAfterFilter = columns?.filter(col => col.title).length;
        return lengthAfterFilter === columns?.length || lengthAfterFilter === columns.length - 1;
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
};
