import {
    ButtonHTMLAttributes,
    HTMLAttributes,
    MouseEvent,
    CSSProperties,
    Dispatch,
    SetStateAction,
    ReactNode,
    ReactElement,
    FC,
} from 'react';
import { Body, Head, Row, HoverButton } from './index';

export interface TableProps<T> extends ExtraTableProps<T> {
    columns?: ColumnProps<T>[];
    data?: T[];
    children?: ReactNode;
}
export interface TableFuncType<T> extends FC<TableProps<T>>, TableComponentProps {}

export interface TableComponentProps {
    Body?: typeof Body;
    Head?: typeof Head;
}

export interface HoverButtonProps<T>
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>,
        Partial<Omit<RenderRowProps<T>, 'index'>> {
    recordCallback?: RecordFilter<T>;
    dataButton?: RecordFilter<T>;
    onClick?: HoverOnclickEvent;
    rowIndex?: number;
    renderedData?: T[];
}

export type TableTemplateType = 'list' | 'table';
export interface ExtraTableProps<T> {
    header?: HeaderProps<T>;
    body?: BodyProps<T>;
    className?: string;
    style?: CSSProperties;
    template?: TableTemplateType;
    spinner?: () => ReactElement | null;
}

export type PositionType = 'start' | 'end' | 'center';

export interface HeaderProps<T> extends HTMLAttributes<HTMLDivElement> {
    position?: PositionType;
    wrapperStyle?: CSSProperties;
}

export interface BodyProps<T> extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    toUpdate?: ToUpdate;
    className?: string;
}

export interface SpinnerWrapperProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}

export interface HeadWrapperProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}

export interface BodyFuncType<T> extends FC<BodyProps<T>>, BodyComponentProps {}
export interface BodyComponentProps {
    Row?: typeof Row;
}

export type RecordFilter<T> = (props: Partial<RenderRowProps<T>>) => React.ReactNode | void;

export interface ColumnProps<T> {
    title?: React.ReactNode;
    key?: React.Key;
    dataIndex?: string;
    toRender?({ ...props }: RenderRowProps<T>): React.ReactElement<T>;
}

export interface ColumnType<T> extends HTMLAttributes<HTMLSpanElement> {
    column: ColumnProps<T>;
    record: T;
    children?: ReactNode;
    rowIndex: number;
}

export interface ColumnFuncType<T> extends FC<ColumnType<T>>, ColumnComponentProps {}
export interface ColumnComponentProps {}

export interface RowProps<T> extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
    onClick?: RowOnclickEvent;
    toUpdate?: ToUpdate;
    hoverButton?: HoverButtonProps<T> | null;
}

export interface RowFuncType<T> extends FC<RowProps<T>>, RowComponentProps {}
export interface RowComponentProps {
    HoverButton?: typeof HoverButton;
}
export interface ExternalTProps {
    id?: string;
    index?: number;
}
export interface RenderRowProps<T> {
    record: T;
    index?: number;
    classsName?: string;
    renderedData?: T[];
    toUpdate?: ToUpdate;
}
export type HoverOnclickEvent = ({
    ...props
}: {
    event?: MouseEvent<any>;
    record?: ExternalTProps;
    renderedData?: any[];
}) => void;
export type RowOnclickEvent = ({
    ...props
}: {
    event?: MouseEvent<any>;
    record?: ExternalTProps;
}) => void;

export type ToUpdate = Dispatch<SetStateAction<any>>;
export type isType<T> = T | undefined;
export type ComponentReturnType =
    | ReactElement
    | Array<ReactElement>
    | string
    | number
    | boolean
    | null;
