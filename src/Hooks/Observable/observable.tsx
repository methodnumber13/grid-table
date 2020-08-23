type Listener<T> = (val: T) => void;
type Unsubscriber = () => void;

export class Observable<T> {
    private _listeners: Listener<T>[] = [];

    constructor(private _val: T) {}

    get(): T {
        return this._val;
    }

    set(val: T) {
        if (this._val !== val) {
            this._val = val;
            this._listeners.forEach(l => l(val));
        }
    }

    subscribe(listener: Listener<T>): Unsubscriber {
        this._listeners.push(listener);
        return () => {
            this._listeners = this._listeners.filter(l => l !== listener);
        };
    }
}
