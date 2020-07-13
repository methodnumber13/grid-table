import React, { FC } from 'react';
import { Button, PageProps, PageListProps } from '..';
import { jc } from '../Helpers';
import { tableSvc, paginationSvc } from '../services/services';
import { PagesWrapper } from '../Wrappers';
import constant from '../constants';
import { useObservable } from '../customHooks/ObservableHook/observableHook';

const Pages: FC<PageListProps> = function (props) {
    const { pages, curPage } = useObservable(paginationSvc.State);
    const { size } = props;

    function pageOnClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, page: PageProps) {
        event.stopPropagation();
        if (curPage?.number !== page.number) {
            tableSvc.setTableState({ data: page.data });
            paginationSvc.setPaginationState({ curPage: page, prevPage: curPage });
        }
    }

    const setSize = () => `${constant.PagSize}_${size}`;

    return (
        <>
            {pages?.map((page, i) => (
                <Button
                    key={`page${i}`}
                    onClick={event => pageOnClick(event, page)}
                    className={jc('pagination_btn', setSize())}
                >
                    {page.number}
                </Button>
            ))}
        </>
    );
};

export const PageList: FC<PageListProps> = props => {
    return (
        <PagesWrapper>
            <Pages {...props} />
        </PagesWrapper>
    );
};
