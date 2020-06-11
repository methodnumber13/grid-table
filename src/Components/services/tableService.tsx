import { Observable } from '../customHooks/ObservableHook/observable';
import { TableProps } from '../ITable';

export default class TableService<T extends any> {
    readonly initialState: TableProps<T> = {
        data: [],
        columns: [],
        header: undefined,
        body: undefined,
        template: 'list',
    };
    readonly State = new Observable<TableProps<T>>(this.initialState);

    setTableState = (props: TableProps<T>): void => {
        this.State.set({ ...this.State.get(), ...props });
    };
}
