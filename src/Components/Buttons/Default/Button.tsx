import React, { FC } from 'react';
import './button.scss';
import { jc } from '../../Helpers';
import { IButtonProps } from '../';

export const Button: FC<IButtonProps> = function (props) {
    const { children, className = '', size, ...rest } = props;
    return (
        <button className={jc('default_btn', className)} {...rest}>
            {children}
        </button>
    );
};
