<h1 align="left">Grid-table</h1>

_**Custom react table based on typescript, grid and flex.**_

## Install

```bash
npm install grid-table
```

```bash
yarn add grid-table
```

## Documentation

Will be soon...

## Basic usage

```jsx
import { Table } from 'grid-table';
import { ColumnProps } from 'grid-table/ITable';

// just example
interface YourDataProps {
    status?: string;
    id?: string;
}

const columns: ColumnProps<YourDataProps>[] = [
    {
        title: 'First title', // title for head
        key: 'title1', // column key
        dataIndex: 'data1', // index for data-matching
    },
    {
        title: 'Second title',
        key: 'title2',
        dataIndex: 'data2',
    },
];

const data = getData(); // data from any API

const App = () => <Table columns={columns} data={data} />;
```

### TypeScript

`grid-table` is written in TypeScript with complete definitions.
You can use it with both, typescript or javascript.

### Contributing

Please refer to each project's style and contribution guidelines for submitting patches and additions.<br/> In general, we follow the `"fork-and-pull"` Git workflow.

1.  **Fork** the repo on GitHub
2.  **Clone** the project to your own machine
3.  **Commit** changes to your own branch
4.  **Push** your work back up to your fork
5.  **Submit** a **Pull request** so that we can review your changes

**_NOTE_**: Be sure to merge the latest from "upstream" before making a pull request!
