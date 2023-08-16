import type { StateCreator, StoreApi, StoreMutatorIdentifier } from '../vanilla';
type Action<T = any> = {
    type: T;
};
type ActionCreator<A, P extends any[] = any[]> = {
    (...args: P): A;
};
type EnhancerOptions = {
    name?: string;
    actionCreators?: ActionCreator<any>[] | {
        [key: string]: ActionCreator<any>;
    };
    latency?: number;
    maxAge?: number;
    serialize?: boolean | {
        options?: undefined | boolean | {
            date?: true;
            regex?: true;
            undefined?: true;
            error?: true;
            symbol?: true;
            map?: true;
            set?: true;
            function?: true | ((fn: (...args: any[]) => any) => string);
        };
        replacer?: (key: string, value: unknown) => any;
        reviver?: (key: string, value: unknown) => any;
        immutable?: any;
        refs?: any;
    };
    actionSanitizer?: <A extends Action>(action: A, id: number) => A;
    stateSanitizer?: <S>(state: S, index: number) => S;
    actionsBlacklist?: string | string[];
    actionsWhitelist?: string | string[];
    actionsDenylist?: string | string[];
    actionsAllowlist?: string | string[];
    predicate?: <S, A extends Action>(state: S, action: A) => boolean;
    shouldRecordChanges?: boolean;
    pauseActionType?: string;
    autoPause?: boolean;
    shouldStartLocked?: boolean;
    shouldHotReload?: boolean;
    shouldCatchErrors?: boolean;
    features?: {
        pause?: boolean;
        lock?: boolean;
        persist?: boolean;
        export?: boolean | 'custom';
        import?: boolean | 'custom';
        jump?: boolean;
        skip?: boolean;
        reorder?: boolean;
        dispatch?: boolean;
        test?: boolean;
    };
    trace?: boolean | (<A extends Action>(action: A) => string);
    traceLimit?: number;
};
type Config = EnhancerOptions & {
    type?: string;
};
declare module '../vanilla' {
    interface StoreMutators<S, A> {
        'zustand/devtools': WithDevtools<S>;
    }
}
type Cast<T, U> = T extends U ? T : U;
type Write<T, U> = Omit<T, keyof U> & U;
type TakeTwo<T> = T extends {
    length: 0;
} ? [undefined, undefined] : T extends {
    length: 1;
} ? [...a0: Cast<T, unknown[]>, a1: undefined] : T extends {
    length: 0 | 1;
} ? [...a0: Cast<T, unknown[]>, a1: undefined] : T extends {
    length: 2;
} ? T : T extends {
    length: 1 | 2;
} ? T : T extends {
    length: 0 | 1 | 2;
} ? T : T extends [infer A0, infer A1, ...unknown[]] ? [A0, A1] : T extends [infer A0, (infer A1)?, ...unknown[]] ? [A0, A1?] : T extends [(infer A0)?, (infer A1)?, ...unknown[]] ? [A0?, A1?] : never;
type WithDevtools<S> = Write<S, StoreDevtools<S>>;
type StoreDevtools<S> = S extends {
    setState: (...a: infer Sa) => infer Sr;
} ? {
    setState<A extends string | {
        type: unknown;
    }>(...a: [...a: TakeTwo<Sa>, action?: A]): Sr;
} : never;
export interface DevtoolsOptions extends Config {
    enabled?: boolean;
    anonymousActionType?: string;
    store?: string;
}
type Devtools = <T, Mps extends [StoreMutatorIdentifier, unknown][] = [], Mcs extends [StoreMutatorIdentifier, unknown][] = []>(initializer: StateCreator<T, [...Mps, ['zustand/devtools', never]], Mcs>, devtoolsOptions?: DevtoolsOptions) => StateCreator<T, Mps, [['zustand/devtools', never], ...Mcs]>;
declare module '../vanilla' {
    interface StoreMutators<S, A> {
        'zustand/devtools': WithDevtools<S>;
    }
}
export type NamedSet<T> = WithDevtools<StoreApi<T>>['setState'];
export declare const devtools: Devtools;
export {};
