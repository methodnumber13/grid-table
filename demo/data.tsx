import React from 'react';
import { ColumnProps } from '../src/Components';

export interface DataProps {
    name?: string;
    country?: string;
    number?: number;
}

export const columns: ColumnProps<DataProps>[] = [
    {
        title: 'Name',
        key: 'name',
        dataIndex: 'name',
    },
    {
        title: 'Country',
        key: 'country',
        dataIndex: 'country',
    },
    {
        title: 'Number',
        key: 'number',
        dataIndex: 'number',
    },
];

export const data: DataProps[] = [
    { name: 'Luis Garavito', country: 'Colombia', number: 300 },
    { name: 'Pedro López', country: 'Colombia', number: 300 },
    { name: 'Javed Iqbal', country: 'Pakistan', number: 100 },
    { name: 'Mikhail Popkov', country: 'Russia', number: 81 },
    { name: 'Daniel Camargo Barbosa', country: 'Ecuador', number: 180 },
    { name: 'Pedro Rodrigues Filho', country: 'Brazil', number: 100 },
    { name: 'Kampatimar Shankariya', country: 'India', number: 70 },
    { name: 'Yang Xinhai', country: 'China', number: 67 },
    { name: 'Andrei Chikatilo', country: 'Soviet Union', number: 56 },
    { name: 'Anatoly Onoprienko', country: 'Ukraine', number: 52 },
    { name: 'Samuel Little', country: 'USA', number: 93 },
    { name: 'Florisvaldo de Oliveira', country: 'Brazil', number: 50 },
];
