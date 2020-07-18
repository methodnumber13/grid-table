import { Observable } from '../customHooks/ObservableHook/observable';
import { PaginationState } from '../';

export default class PaginationService<T> {
    readonly initialState: PaginationState = {
        size: 'm',
        disabled: false,
        curPage: undefined,
        prevPage: undefined,
        total: 0,
        position: 'end', //'rb'
        pages: [],
        items: [],
        isPagination: false,
        count: 1,
    };
    readonly State = new Observable<PaginationState>(this.initialState);

    setPaginationState = (props: PaginationState): void => {
        this.State.set({ ...this.State.get(), ...props });
    };
}
