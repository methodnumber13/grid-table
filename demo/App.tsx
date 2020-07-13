import React, { useEffect, useState, FC } from 'react';
import { Table, Head, Body, Row, HoverOnclickEventProps, Pagination } from '../src/Components';
import { columns, data as tableData } from './data';
import './app.scss';

const App: FC = () => {
    const [data, setData] = useState(tableData);

    useEffect(() => {
        setTimeout(() => {
            setData(data);
        }, 2);
    }, [data]);

    const onClick = ({ event, record, renderedData }: HoverOnclickEventProps) => {
        console.log('EVENT:', event, '\n', 'RECORD:', record, '\n', 'RENDEREDDATA:', renderedData);
    };

    return (
        <Table template='list' columns={columns} data={data} className='test_table'>
            <Head />
            <Body>
                <Row
                    onClick={onClick}
                    hoverButton={{
                        ...onClick,
                    }}
                ></Row>
            </Body>
            <Pagination pageSize={3} position='center' size='l' />
        </Table>
    );
};

export default App;
