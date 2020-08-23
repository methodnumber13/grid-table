import React, { FC } from 'react';
import { PaginationMainProps, ExtCSSProps } from '..';
import { PageList } from './PageList';
import { jc } from '../../Helpers';
import './pagination.scss';
import { useObservable } from '../../Hooks';
import { paginationSvc } from '../services/services';

export const PaginationMain: FC<PaginationMainProps> = function (props) {
    const { style, disabled = false } = props;
    const { curPage, count } = useObservable(paginationSvc.State);
    const isDisabled = (name: string) => (disabled ? name : '');

    const getCustomStyles = () => {
        const styles: ExtCSSProps = {
            ['--button-cursor']:
                curPage?.number === 1 || curPage?.number === count ? 'not-allowed' : 'pointer',
            ...style,
        };
        return styles;
    };

    return (
        <div
            className={jc('pagination_main', isDisabled('main_disabled'))}
            style={getCustomStyles()}
        >
            <PageList />
        </div>
    );
};
