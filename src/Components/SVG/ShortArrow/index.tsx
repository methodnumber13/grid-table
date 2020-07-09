import React, { SVGProps, FC } from 'react';
import { ObjectMap, Direction } from '../../';

export interface ShortArrowProps extends SVGProps<SVGSVGElement> {
    direction?: Direction;
}

const rotationByDirection: ObjectMap<Direction, number> = {
    right: 0,
    top: -90,
    left: -180,
    bottom: 90,
};

export const ShortArrow: FC<ShortArrowProps> = ({ direction = 'right', ...props }) => (
    <svg viewBox='0 0 9 14' xmlns='http://www.w3.org/2000/svg' {...props}>
        <path
            style={{
                transformOrigin: 'center',
                transform: `rotate(${rotationByDirection[direction]}deg)`,
            }}
            fillRule='evenodd'
            clipRule='evenodd'
            d='M1.6 0L0 1.6L5.4 6.99995L0 12.4L1.6 14L8.6 6.99995L1.6 0Z'
        />
    </svg>
);
