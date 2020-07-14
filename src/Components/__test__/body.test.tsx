import React from 'react';
import { create } from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Body } from '../';

describe('<Body />', () => {
    it('Body should render', () => {
        const result = render(<Body />);

        expect(result).toMatchSnapshot();
    });
});
