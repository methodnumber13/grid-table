import React, { FC } from 'react';
import { Button, IconButtonProps } from '../';
import { Icon } from '../../Icon/Icon';

export const IconButton: FC<IconButtonProps> = function (props) {
    const { iconSize, style, className, children, buttonSize, ...rest } = props;
    return (
        <Button className={className} style={style} size={buttonSize} {...rest}>
            <Icon iconSize={iconSize}>{children}</Icon>
        </Button>
    );
};
