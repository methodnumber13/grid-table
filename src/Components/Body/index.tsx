import React, { FC } from 'react';
import { BodyProps } from '../';
import { useObservable } from '../../Hooks';
import { tableSvc } from '../services/services';
import { jc } from '../../Helpers';

export const Body: FC<BodyProps> = function (props) {
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
