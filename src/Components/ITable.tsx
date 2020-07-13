import {
    HTMLAttributes,
    MouseEvent,
    CSSProperties,
    Dispatch,
    SetStateAction,
    ReactNode,
    ReactElement,
    FC,
} from 'react';
import { Body, Head, Row, HoverButtonProps, Size } from './';

export interface ExtraTableProps {
    className?: string;
    style?: CSSProperties;
    template?: TableTemplateType;
    spinner?: () => ReactElement | null;
    toUpdate?: ToUpdate;
}

export interface TableProps<T> extends ExtraTableProps {
    columns: ColumnProps<T>[];
    data: T[];
}
export interface TableState<T> extends Omit<TableProps<T>, 'data' | 'columns'> {
    data?: T[];
    columns?: ColumnProps<T>[];
}

export interface TableFuncType<T> extends FC<TableProps<T>>, TableComponentProps {}

export interface TableComponentProps {
    Body?: typeof Body;
    Head?: typeof Head;
}

export type TableTemplateType = 'list' | 'table';

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

export interface PagesWrapperProps extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
}

export interface RowWrapperProps<T> extends Omit<RowProps<T>, 'hoverButton'> {
    children?: ReactNode;
    record: T;
    index: number;
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

export type PaginationSizeType = 's' | 'm' | 'l';
export type PaginationShortPosType = 'lt' | 'lb' | 'rt' | 'rb' | 'mt' | 'mb';
export type PaginationFullPosType =
    | 'left-top'
    | 'left-bottom'
    | 'right-top'
    | 'right-bottom'
    | 'middle-top'
    | 'middle-bottom';
// export type PaginationPosType = PaginationShortPosType | PaginationFullPosType;

export interface PaginationBaseProps {
    position?: PositionType;
    disabled?: boolean;
}
export interface PaginationWrapperProps
    extends HTMLAttributes<HTMLDivElement>,
        PaginationBaseProps {}
export interface PaginationProps extends HTMLAttributes<HTMLDivElement>, PaginationBaseProps {
    size?: PaginationSizeType;
    arrowSize?: Size;
    pageSize: number;
}

export interface PaginationMainProps extends Omit<PaginationProps, 'pageSize'> {
    disabled?: boolean;
}

export interface PageProps {
    data?: any[];
    number?: number;
}

export type PageListProps = {
    size?: PaginationSizeType;
};

export interface PaginationState extends Omit<PaginationProps, 'pageSize'> {
    pages?: PageProps[];
    curPage?: PageProps;
    prevPage?: PageProps;
    pData?: any[];
    total?: number;
    pageSize?: number;
    isPagination?: boolean;
    count?: number;
}

export interface RowFuncType<T> extends FC<RowProps<T>>, RowComponentProps {}
export interface RowComponentProps {
    // HoverButton?: typeof HoverButton;
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

export type ObjectMap<Map extends string, V> = { [K in Map]: V };
