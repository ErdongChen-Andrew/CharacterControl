import React from 'react';
/**
 * With React 18, renderers will warn when not using the new createRoot signature to opt-in to concurrent mode.
 * We're okay with creating a (blocking) legacy root to support older versions, so we disable the warning.
 * @see https://github.com/facebook/react/pull/21652
 */
export declare function render<P>(element: React.ReactElement<P>, container: HTMLElement): void;
export declare function mergeRefs<T>(refs: Array<React.RefCallback<T> | React.RefObject<T> | null | undefined>): React.RefCallback<T>;
