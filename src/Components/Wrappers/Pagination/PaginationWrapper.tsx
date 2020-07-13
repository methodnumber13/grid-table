import React, { useMemo, FC } from 'react';
import { PaginationWrapperProps } from '../..';
import { jc } from '../../Helpers';
import { Position } from '../../DataTypes';
import './index.scss';

const isDisabled = (disabled: boolean) => (disabled ? `disabled` : '');

export const PaginationWrapper: FC<PaginationWrapperProps> = function (props) {
    const { children, disabled = false, position = 'end', style = {}, className = '' } = props;

    const setPosition = useMemo(
        function () {
            const pos = Position[position!];
            if (pos) return { justifyContent: pos };
        },
        [position]
    );

    return (
        <div
            style={{ ...style, ...setPosition }}
            className={jc('pagination_wrapper', isDisabled(disabled), className)}
        >
            {children}
        </div>
    );
};
