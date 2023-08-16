import { StringInput } from './string-types';
export declare const schema: (o: any) => boolean;
export declare const sanitize: (v: any) => string;
export declare const normalize: ({ value, editable, rows }: StringInput) => {
    value: string;
    settings: {
        editable: boolean;
        rows: number;
    };
};
