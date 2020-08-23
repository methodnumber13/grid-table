import React, { FC } from 'react';
import { PaginationWrapperProps } from '../..';
import { jc } from '../../../Helpers';
import './index.scss';
import { usePosition } from '../../../Hooks';

const isDisabled = (disabled: boolean) => (disabled ? `disabled` : '');

export const PaginationWrapper: FC<PaginationWrapperProps> = function (props) {
    const { children, disabled = false, position = 'end', style = {}, className = '' } = props;

    const setPosition = usePosition('pagination', position);

    return (
        <div
            style={{ ...style, ...setPosition }}
            className={jc('pagination_wrapper', isDisabled(disabled), className)}
        >
            {children}
        </div>
    );
};
