import React from 'react';
import { ColumnProps } from '../src/Components/ITable';

export interface DataProps {
    name?: string;
    country?: string;
    victims?: number;
}

export const columns: ColumnProps<DataProps>[] = [
    {
        title: 'Name',
        key: 'name',
        dataIndex: 'name',
        toRender: ({ record }) => <span className='render_column_wrapper'>{record.name}</span>,
    },
    {
        title: 'Country',
        key: 'country',
        dataIndex: 'country',
        toRender: ({ record }) => <span className='render_column_wrapper'>{record.country}</span>,
    },
    {
        title: 'victims number',
        key: 'victims',
        dataIndex: 'victims',
        toRender: ({ record }) => <span className='render_column_wrapper'>{record.victims}</span>,
    },
];

export const data: DataProps[] = [
    { name: 'Luis Garavito', country: 'Colombia', victims: 300 },
    { name: 'Pedro López', country: 'Colombia', victims: 300 },
    { name: 'Javed Iqbal', country: 'Pakistan', victims: 100 },
    { name: 'Mikhail Popkov', country: 'Russia', victims: 81 },
    { name: 'Daniel Camargo Barbosa', country: 'Ecuador', victims: 180 },
    { name: 'Pedro Rodrigues Filho', country: 'Brazil', victims: 100 },
    { name: 'Kampatimar Shankariya', country: 'India', victims: 70 },
    { name: 'Yang Xinhai', country: 'China', victims: 67 },
    { name: 'Andrei Chikatilo', country: 'Soviet Union', victims: 56 },
    { name: 'Anatoly Onoprienko', country: 'Ukraine', victims: 52 },
    { name: 'Samuel Little', country: 'USA', victims: 93 },
    { name: 'Florisvaldo de Oliveira', country: 'Brazil', victims: 50 },
];
