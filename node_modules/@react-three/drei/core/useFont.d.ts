export declare type Glyph = {
    _cachedOutline: string[];
    ha: number;
    o: string;
};
export declare type FontData = {
    boundingBox: {
        yMax: number;
        yMin: number;
    };
    familyName: string;
    glyphs: {
        [k: string]: Glyph;
    };
    resolution: number;
    underlineThickness: number;
};
export declare function useFont(font: string | FontData): import("three-stdlib").Font;
export declare namespace useFont {
    var preload: (font: string | FontData) => undefined;
    var clear: (font: string | FontData) => void;
}
