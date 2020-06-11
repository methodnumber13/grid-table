import React from 'react';
import { SpinnerWrapperProps } from '../../ITable';
import './spinnerWrapper.scss';

export default function SpinnerWrapper(props: SpinnerWrapperProps) {
    const { children, ...rest } = props;
    return (
        <div {...rest} className='spinner_wrapper_div'>
            {children}
        </div>
    );
}
