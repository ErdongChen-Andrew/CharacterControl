export interface OnResizeOptions {
    container?: HTMLElement;
}
export declare type OnResizeCallback = (rect: Pick<DOMRectReadOnly, 'width' | 'height'> & Partial<Omit<DOMRectReadOnly, 'width' | 'height'>>) => void;
export declare const onResize: (callback: OnResizeCallback, { container }?: OnResizeOptions) => (() => void);
