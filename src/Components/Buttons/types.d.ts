import { ExternalTProps, RecordFilter, RenderRowProps } from '../ITable';
import { DetailedHTMLProps, ButtonHTMLAttributes, CSSProperties, ReactElement, FC } from 'react';

export type IconButtonProps = {
    iconSize?: Size;
    style?: CSSProperties;
    className?: string;
    buttonSize?: ButtonSize;
} & IconProps &
    Omit<IButtonProps, 'size'>;

export type ArrowBtnProps = {
    direction?: Direction;
    children?: ReactElement;
} & Omit<IconButtonProps, 'children'>;

export type HoverButtonProps<T> = {
    recordCallback?: RecordFilter<T>;
    dataButton?: RecordFilter<T>;
    onClick?: HoverOnclickEvent;
    rowIndex?: number;
    renderedData?: T[];
} & Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'onClick'> &
    Partial<Omit<RenderRowProps<T>, 'index'>>;

export type HoverOnclickEvent = ({ ...props }: HoverOnclickEventProps) => void;

export type HoverOnclickEventProps = {
    event?: React.MouseEvent<any>;
    record?: ExternalTProps;
    renderedData?: any[];
};

export type ExternalIconCSSProps = {
    '--icon-size'?: string;
};

export type ExtCSSProps = CSSProperties & ExternalIconCSSProps;

export type IconProps = {
    className?: string;
    children: ReactElement;
    iconSize?: Size | number;
    style?: ExtCSSProps;
};

export type ButtonSize = 's' | 'm' | 'l' | 'xl';

export type IButtonProps = { size?: ButtonSize } & ButtonHTMLAttributes<HTMLButtonElement>;

export type IHoverButtonProps<T = ExternalTProps | any> = FC<HoverButtonProps<T>>;

export type Size = 'xxs' | 'xs' | 's' | 'm' | 'l';

export type Direction = 'left' | 'right' | 'top' | 'bottom';
