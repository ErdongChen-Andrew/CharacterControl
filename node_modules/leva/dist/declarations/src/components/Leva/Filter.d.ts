import React from 'react';
import { FolderTitleProps } from '../Folder';
declare type FilterProps = {
    setFilter: (value: string) => void;
    toggle: (flag?: boolean) => void;
};
export declare type TitleWithFilterProps = FilterProps & FolderTitleProps & {
    onDrag: (point: {
        x?: number;
        y?: number;
    }) => void;
    onDragStart: (point: {
        x?: number;
        y?: number;
    }) => void;
    onDragEnd: (point: {
        x?: number;
        y?: number;
    }) => void;
    title: React.ReactNode;
    drag: boolean;
    filterEnabled: boolean;
    from?: {
        x?: number;
        y?: number;
    };
};
export declare function TitleWithFilter({ setFilter, onDrag, onDragStart, onDragEnd, toggle, toggled, title, drag, filterEnabled, from, }: TitleWithFilterProps): JSX.Element;
export {};
