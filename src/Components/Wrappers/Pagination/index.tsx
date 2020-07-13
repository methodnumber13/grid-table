import React, { FC } from 'react';
import { PagesWrapperProps } from '../../';
import './index.scss';

export { PaginationWrapper } from './PaginationWrapper';

export const PagesWrapper: FC<PagesWrapperProps> = function ({ children }) {
    return <div className='pagination_pages_wrapper'>{children}</div>;
};
