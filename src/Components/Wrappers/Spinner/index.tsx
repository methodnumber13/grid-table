import React, { FC } from 'react';
import { SpinnerWrapperProps } from '../../';
import './spinnerWrapper.scss';

export const SpinnerWrapper: FC<SpinnerWrapperProps> = function (props) {
    const { children, ...rest } = props;
    return (
        <div {...rest} className='spinner_wrapper_div'>
            {children}
        </div>
    );
};
