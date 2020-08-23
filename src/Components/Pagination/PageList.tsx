import React, { FC } from 'react';
import { Button, PageProps, PageListProps } from '..';
import { jc } from '../../Helpers';
import { tableSvc, paginationSvc } from '../services/services';
import { PageListWrapper } from '../Wrappers';
import constant from '../../constants';
import { useObservable } from '../../Hooks';

export const PageList: FC<PageListProps> = function (props) {
    const { pages, curPage, size = 'm' } = useObservable(paginationSvc.State);

    function pageOnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: PageProps) {
        event.stopPropagation();
        if (curPage?.number !== page.number) {
            tableSvc.setTableState({ data: page.data });
            paginationSvc.setPaginationState({ curPage: page, prevPage: curPage });
        }
    }

    const setSize = () => `${constant.PagSize}_${size}`;

    const setActive = (i: number) => (curPage?.number === i + 1 ? `page_active_btn` : '');

    return (
        <PageListWrapper>
            {pages?.map((page, i) => (
                <Button
                    key={`page${i}`}
                    onClick={event => pageOnClick(event, page)}
                    className={jc('pagination_btn', setSize(), setActive(i))}
                >
                    {page.number}
                </Button>
            ))}
        </PageListWrapper>
    );
};
