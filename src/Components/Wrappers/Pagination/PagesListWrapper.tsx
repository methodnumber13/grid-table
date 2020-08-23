import React, { FC } from 'react';
import { PageListProps, ArrowButton } from '../..';
import { paginationSvc } from '../../services/services';
import { PagesWrapper } from '../../Wrappers';
import { useObservable } from '../../../Hooks';

export const PageListWrapper: FC<PageListProps> = props => {
    const { pages, curPage, count = 0 } = useObservable(paginationSvc.State);
    const arrowOnClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        countToPage: number
    ) => {
        e.stopPropagation();
        if (curPage && curPage.number && (curPage.number > 1 || curPage.number < count))
            paginationSvc.setPaginationState({
                curPage: pages?.[curPage.number - countToPage],
                prevPage: curPage,
            });
    };
    return (
        <PagesWrapper>
            <ArrowButton
                className='arrow_btn'
                onClick={e => arrowOnClick(e, 2)}
                disabled={curPage?.number === 1}
                iconSize={'m'}
                direction='left'
            />
            {props.children}
            <ArrowButton
                className='arrow_btn'
                onClick={e => arrowOnClick(e, 0)}
                disabled={curPage?.number === count}
                iconSize={'m'}
                direction='right'
            />
        </PagesWrapper>
    );
};
