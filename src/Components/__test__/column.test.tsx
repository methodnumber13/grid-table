import React from 'react';
import { render } from '@testing-library/react';
import { Column } from '../';

describe('<Column />', () => {
    it('Column should render', () => {
        const result = render(
            <Column
                record={null}
                rowIndex={1}
                column={{
                    title: 'Name',
                    key: 'name',
                    dataIndex: 'name',
                    toRender: ({ record }) => <span>{record.name}</span>,
                }}
            />
        );

        expect(result).toMatchSnapshot();
    });
});
