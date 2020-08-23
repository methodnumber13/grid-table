import { useMemo } from 'react';
import { Position } from '../DataTypes';
import { PositionType } from '../Components';

/**
 * Return css custom variable based on passed position.
 *
 * @param componentName
 * @param position
 */
export const usePosition = (componentName: string, position: PositionType) =>
    useMemo(() => ({ [`--${componentName}-position`]: Position[position] }), [
        componentName,
        position,
    ]);
