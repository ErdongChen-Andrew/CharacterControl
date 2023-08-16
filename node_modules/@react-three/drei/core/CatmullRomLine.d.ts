import * as React from 'react';
import { Line2 } from 'three-stdlib';
import { LineProps } from './Line';
export declare const CatmullRomLine: React.ForwardRefExoticComponent<Omit<LineProps, "ref"> & {
    closed?: boolean | undefined;
    curveType?: "centripetal" | "chordal" | "catmullrom" | undefined;
    tension?: number | undefined;
    segments?: number | undefined;
} & React.RefAttributes<Line2>>;
