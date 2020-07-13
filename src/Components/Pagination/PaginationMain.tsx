import React, { FC } from 'react';
import { ArrowButton, PaginationMainProps, ExtCSSProps } from '..';
import { PageList } from './PageList';
import { jc } from '../Helpers';
import './pagination.scss';
import { useObservable } from '../customHooks/ObservableHook/observableHook';
import { paginationSvc } from '../services/services';

export const PaginationMain: FC<PaginationMainProps> = function (props) {
    const { arrowSize, size, style, disabled = false } = props;
    const { curPage, count, pages } = useObservable(paginationSvc.State);
    const isDisabled = (name: string) => (disabled ? name : '');

    const getCustomStyles = () => {
        const styles: ExtCSSProps = {
            ['--button-cursor']:
                curPage?.number === 1 || curPage?.number === count ? 'not-allowed' : 'pointer',
            ...style,
        };
        return styles;
    };

    const arrowOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, flag: number) => {
        e.stopPropagation();
        if (curPage?.number! > 1 || curPage?.number! < count!) {
            paginationSvc.setPaginationState({
                curPage: pages?.[curPage?.number! - flag],
                prevPage: curPage,
            });
        }
    };

    return (
        <div
            className={jc('pagination_main', isDisabled('main_disabled'))}
            style={getCustomStyles()}
        >
            <ArrowButton
                onClick={e => arrowOnClick(e, 2)}
                disabled={curPage?.number === 1}
                iconSize={arrowSize ?? size ?? 'm'}
                direction='left'
                style={{ justifyContent: 'flex-end', alignSelf: 'center' }}
            />
            <PageList size={size} />
            <ArrowButton
                onClick={e => arrowOnClick(e, 0)}
                disabled={curPage?.number === count}
                iconSize={arrowSize ?? size ?? 'm'}
                direction='right'
                style={{ justifyContent: 'flex-start', alignSelf: 'center' }}
            />
        </div>
    );
};
