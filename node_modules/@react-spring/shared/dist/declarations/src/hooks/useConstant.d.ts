declare type Init<T> = () => T;
/**
 * Creates a constant value over the lifecycle of a component.
 */
export declare function useConstant<T>(init: Init<T>): T;
export {};
