import { Observable } from '../../Hooks';
import { TableProps, TableState } from '..';

export default class TableService<T extends any> {
    readonly initialState: TableProps<T> = {
        data: [],
        columns: [],
        template: 'list',
    };
    readonly State = new Observable<TableProps<T>>(this.initialState);

    setTableState = (props: TableState<T>): void => {
        this.State.set({ ...this.State.get(), ...props });
    };
}
