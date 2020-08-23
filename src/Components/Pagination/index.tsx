import React, { useEffect, FC } from 'react';
import { tableSvc, paginationSvc } from '../services/services';
import { useObservable } from '../../Hooks';
import './pagination.scss';
import { PaginationProps, PageProps } from '../';
import { PaginationWrapper } from '../Wrappers';
import { PaginationMain } from './PaginationMain';

export const Pagination: FC<PaginationProps> = function (props) {
    const { data } = useObservable(tableSvc.State);
    const { total = 0, pages, curPage, items = [], count = 0 } = useObservable(paginationSvc.State);
    const { pageSize, size, arrowSize, ...rest } = props;

    const getCount = () => Math.ceil(total / pageSize);

    useEffect(() => {
        paginationSvc.setPaginationState({ count: getCount() });
    }, [total, pageSize]);

    useEffect(() => {
        paginationSvc.setPaginationState({ size });
    }, [size]);

    useEffect(() => {
        paginationSvc.setPaginationState({ arrowSize });
    }, [arrowSize]);

    function getPages() {
        const pages: PageProps[] = [];
        const pageData = [...items];
        for (let i = 1; i <= count; i++) {
            pages.push({ data: pageData.slice(0, pageSize), number: i });
            pageData.splice(0, pageSize);
        }
        return pages;
    }

    useEffect(() => {
        if (data?.length && total !== data.length && !items?.length)
            paginationSvc.setPaginationState({ total: data.length, items: data });
    }, [data]);

    useEffect(() => {
        if (!pages?.length && total) {
            const _pages = getPages();
            const _curPage = _pages.length ? _pages[0] : undefined;
            paginationSvc.setPaginationState({ pages: _pages, curPage: _curPage });
        }
    }, [pages, total]);

    useEffect(() => {
        if (curPage?.data?.length) tableSvc.setTableState({ data: curPage?.data });
    }, [curPage]);

    return (
        <PaginationWrapper {...rest}>
            <PaginationMain disabled={rest?.disabled} />
        </PaginationWrapper>
    );
};
