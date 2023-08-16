import { ForwardedRef, MutableRefObject } from "react";
export declare const useForwardedRef: <T>(forwardedRef: ForwardedRef<T>, defaultValue?: T | null) => MutableRefObject<T>;
