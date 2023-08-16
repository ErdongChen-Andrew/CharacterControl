import { ScrollInfo } from './ScrollHandler';
export declare type OnScrollCallback = (info: ScrollInfo) => void;
export declare type OnScrollOptions = {
    /**
     * The root container to measure against
     */
    container?: HTMLElement;
};
export declare const onScroll: (callback: OnScrollCallback, { container }?: OnScrollOptions) => () => void;
