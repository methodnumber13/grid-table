import React, { FC } from 'react';
import './button.scss';
import { jc } from '../../../Helpers';
import { IButtonProps } from '..';

export const Button: FC<IButtonProps> = function (props) {
    const { children, disabled, style, className = '', size, ...rest } = props;
    const isDisabled = (name: string) => (disabled ? name : '');

    return (
        <button className={jc('default_btn', isDisabled('btn_disabled'), className)} {...rest}>
            {children}
        </button>
    );
};
