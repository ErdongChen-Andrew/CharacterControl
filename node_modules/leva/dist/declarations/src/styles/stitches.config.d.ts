/// <reference types="react" />
export declare const getDefaultTheme: () => {
    colors: {
        elevation1: string;
        elevation2: string;
        elevation3: string;
        accent1: string;
        accent2: string;
        accent3: string;
        highlight1: string;
        highlight2: string;
        highlight3: string;
        vivid1: string;
        folderWidgetColor: string;
        folderTextColor: string;
        toolTipBackground: string;
        toolTipText: string;
    };
    radii: {
        xs: string;
        sm: string;
        lg: string;
    };
    space: {
        xs: string;
        sm: string;
        md: string;
        rowGap: string;
        colGap: string;
    };
    fonts: {
        mono: string;
        sans: string;
    };
    fontSizes: {
        root: string;
        toolTip: string;
    };
    sizes: {
        rootWidth: string;
        controlWidth: string;
        numberInputMinWidth: string;
        scrubberWidth: string;
        scrubberHeight: string;
        rowHeight: string;
        folderTitleHeight: string;
        checkboxSize: string;
        joystickWidth: string;
        joystickHeight: string;
        colorPickerWidth: string;
        colorPickerHeight: string;
        imagePreviewWidth: string;
        imagePreviewHeight: string;
        monitorHeight: string;
        titleBarHeight: string;
    };
    shadows: {
        level1: string;
        level2: string;
    };
    borderWidths: {
        root: string;
        input: string;
        focus: string;
        hover: string;
        active: string;
        folder: string;
    };
    fontWeights: {
        label: string;
        folder: string;
        button: string;
    };
};
export declare type FullTheme = ReturnType<typeof getDefaultTheme>;
export declare type LevaCustomTheme = Partial<{
    [k in keyof FullTheme]: Partial<FullTheme[k]>;
}>;
export declare const styled: <Type extends import("@stitches/react/types/util").Function | keyof JSX.IntrinsicElements | import("react").ComponentType<any>, Composers extends (string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        elevation1: string;
        elevation2: string;
        elevation3: string;
        accent1: string;
        accent2: string;
        accent3: string;
        highlight1: string;
        highlight2: string;
        highlight3: string;
        vivid1: string;
        folderWidgetColor: string;
        folderTextColor: string;
        toolTipBackground: string;
        toolTipText: string;
    };
    radii: {
        xs: string;
        sm: string;
        lg: string;
    };
    space: {
        xs: string;
        sm: string;
        md: string;
        rowGap: string;
        colGap: string;
    };
    fonts: {
        mono: string;
        sans: string;
    };
    fontSizes: {
        root: string;
        toolTip: string;
    };
    sizes: {
        rootWidth: string;
        controlWidth: string;
        numberInputMinWidth: string;
        scrubberWidth: string;
        scrubberHeight: string;
        rowHeight: string;
        folderTitleHeight: string;
        checkboxSize: string;
        joystickWidth: string;
        joystickHeight: string;
        colorPickerWidth: string;
        colorPickerHeight: string;
        imagePreviewWidth: string;
        imagePreviewHeight: string;
        monitorHeight: string;
        titleBarHeight: string;
    };
    shadows: {
        level1: string;
        level2: string;
    };
    borderWidths: {
        root: string;
        input: string;
        focus: string;
        hover: string;
        active: string;
        folder: string;
    };
    fontWeights: {
        label: string;
        folder: string;
        button: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    $flex: () => {
        display: string;
        alignItems: string;
    };
    $flexCenter: () => {
        display: string;
        alignItems: string;
        justifyContent: string;
    };
    $reset: () => {
        outline: string;
        fontSize: string;
        fontWeight: string;
        color: string;
        fontFamily: string;
        border: string;
        backgroundColor: string;
        appearance: string;
    };
    $draggable: () => {
        touchAction: string;
        WebkitUserDrag: string;
        userSelect: string;
    };
    $focus: (value: string) => {
        '&:focus': any;
    };
    $focusWithin: (value: string) => {
        '&:focus-within': any;
    };
    $hover: (value: string) => {
        '&:hover': any;
    };
    $active: (value: string) => {
        '&:active': any;
    };
    $inputStyle: () => (value: string) => any;
    $focusStyle: () => (value: string) => any;
    $hoverStyle: () => (value: string) => any;
    $activeStyle: () => (value: string) => any;
}>>(type: Type, ...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").ComponentType<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? { [Name in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? { [Name_1 in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & { [K2 in keyof Composers[K]]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; }; }) => import("@stitches/react/types/styled-component").StyledComponent<Type, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {}, import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        elevation1: string;
        elevation2: string;
        elevation3: string;
        accent1: string;
        accent2: string;
        accent3: string;
        highlight1: string;
        highlight2: string;
        highlight3: string;
        vivid1: string;
        folderWidgetColor: string;
        folderTextColor: string;
        toolTipBackground: string;
        toolTipText: string;
    };
    radii: {
        xs: string;
        sm: string;
        lg: string;
    };
    space: {
        xs: string;
        sm: string;
        md: string;
        rowGap: string;
        colGap: string;
    };
    fonts: {
        mono: string;
        sans: string;
    };
    fontSizes: {
        root: string;
        toolTip: string;
    };
    sizes: {
        rootWidth: string;
        controlWidth: string;
        numberInputMinWidth: string;
        scrubberWidth: string;
        scrubberHeight: string;
        rowHeight: string;
        folderTitleHeight: string;
        checkboxSize: string;
        joystickWidth: string;
        joystickHeight: string;
        colorPickerWidth: string;
        colorPickerHeight: string;
        imagePreviewWidth: string;
        imagePreviewHeight: string;
        monitorHeight: string;
        titleBarHeight: string;
    };
    shadows: {
        level1: string;
        level2: string;
    };
    borderWidths: {
        root: string;
        input: string;
        focus: string;
        hover: string;
        active: string;
        folder: string;
    };
    fontWeights: {
        label: string;
        folder: string;
        button: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    $flex: () => {
        display: string;
        alignItems: string;
    };
    $flexCenter: () => {
        display: string;
        alignItems: string;
        justifyContent: string;
    };
    $reset: () => {
        outline: string;
        fontSize: string;
        fontWeight: string;
        color: string;
        fontFamily: string;
        border: string;
        backgroundColor: string;
        appearance: string;
    };
    $draggable: () => {
        touchAction: string;
        WebkitUserDrag: string;
        userSelect: string;
    };
    $focus: (value: string) => {
        '&:focus': any;
    };
    $focusWithin: (value: string) => {
        '&:focus-within': any;
    };
    $hover: (value: string) => {
        '&:hover': any;
    };
    $active: (value: string) => {
        '&:active': any;
    };
    $inputStyle: () => (value: string) => any;
    $focusStyle: () => (value: string) => any;
    $hoverStyle: () => (value: string) => any;
    $activeStyle: () => (value: string) => any;
}>>, css: <Composers extends (string | import("@stitches/react/types/util").Function | import("react").JSXElementConstructor<any> | import("react").ExoticComponent<any> | {
    [name: string]: unknown;
})[], CSS = import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        elevation1: string;
        elevation2: string;
        elevation3: string;
        accent1: string;
        accent2: string;
        accent3: string;
        highlight1: string;
        highlight2: string;
        highlight3: string;
        vivid1: string;
        folderWidgetColor: string;
        folderTextColor: string;
        toolTipBackground: string;
        toolTipText: string;
    };
    radii: {
        xs: string;
        sm: string;
        lg: string;
    };
    space: {
        xs: string;
        sm: string;
        md: string;
        rowGap: string;
        colGap: string;
    };
    fonts: {
        mono: string;
        sans: string;
    };
    fontSizes: {
        root: string;
        toolTip: string;
    };
    sizes: {
        rootWidth: string;
        controlWidth: string;
        numberInputMinWidth: string;
        scrubberWidth: string;
        scrubberHeight: string;
        rowHeight: string;
        folderTitleHeight: string;
        checkboxSize: string;
        joystickWidth: string;
        joystickHeight: string;
        colorPickerWidth: string;
        colorPickerHeight: string;
        imagePreviewWidth: string;
        imagePreviewHeight: string;
        monitorHeight: string;
        titleBarHeight: string;
    };
    shadows: {
        level1: string;
        level2: string;
    };
    borderWidths: {
        root: string;
        input: string;
        focus: string;
        hover: string;
        active: string;
        folder: string;
    };
    fontWeights: {
        label: string;
        folder: string;
        button: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    $flex: () => {
        display: string;
        alignItems: string;
    };
    $flexCenter: () => {
        display: string;
        alignItems: string;
        justifyContent: string;
    };
    $reset: () => {
        outline: string;
        fontSize: string;
        fontWeight: string;
        color: string;
        fontFamily: string;
        border: string;
        backgroundColor: string;
        appearance: string;
    };
    $draggable: () => {
        touchAction: string;
        WebkitUserDrag: string;
        userSelect: string;
    };
    $focus: (value: string) => {
        '&:focus': any;
    };
    $focusWithin: (value: string) => {
        '&:focus-within': any;
    };
    $hover: (value: string) => {
        '&:hover': any;
    };
    $active: (value: string) => {
        '&:active': any;
    };
    $inputStyle: () => (value: string) => any;
    $focusStyle: () => (value: string) => any;
    $hoverStyle: () => (value: string) => any;
    $activeStyle: () => (value: string) => any;
}>>(...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("@stitches/react/types/util").Function | import("react").JSXElementConstructor<any> | import("react").ExoticComponent<any> ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS;
            [x: number]: CSS;
        };
    } | undefined;
    compoundVariants?: (("variants" extends keyof Composers[K] ? { [Name in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]> | undefined; } : import("@stitches/react/types/util").WideObject) & {
        css: CSS;
    })[] | undefined;
    defaultVariants?: ("variants" extends keyof Composers[K] ? { [Name_1 in keyof Composers[K][keyof Composers[K] & "variants"]]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]> | undefined; } : import("@stitches/react/types/util").WideObject) | undefined;
} & CSS & { [K2 in keyof Composers[K]]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS ? CSS[K2] : unknown; }; }) => import("@stitches/react/types/styled-component").CssComponent<import("@stitches/react/types/styled-component").StyledComponentType<Composers>, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {}, CSS>, createTheme: <Argument0 extends string | ({
    colors?: {
        elevation1?: string | number | boolean | undefined;
        elevation2?: string | number | boolean | undefined;
        elevation3?: string | number | boolean | undefined;
        accent1?: string | number | boolean | undefined;
        accent2?: string | number | boolean | undefined;
        accent3?: string | number | boolean | undefined;
        highlight1?: string | number | boolean | undefined;
        highlight2?: string | number | boolean | undefined;
        highlight3?: string | number | boolean | undefined;
        vivid1?: string | number | boolean | undefined;
        folderWidgetColor?: string | number | boolean | undefined;
        folderTextColor?: string | number | boolean | undefined;
        toolTipBackground?: string | number | boolean | undefined;
        toolTipText?: string | number | boolean | undefined;
    } | undefined;
    radii?: {
        xs?: string | number | boolean | undefined;
        sm?: string | number | boolean | undefined;
        lg?: string | number | boolean | undefined;
    } | undefined;
    space?: {
        xs?: string | number | boolean | undefined;
        sm?: string | number | boolean | undefined;
        md?: string | number | boolean | undefined;
        rowGap?: string | number | boolean | undefined;
        colGap?: string | number | boolean | undefined;
    } | undefined;
    fonts?: {
        mono?: string | number | boolean | undefined;
        sans?: string | number | boolean | undefined;
    } | undefined;
    fontSizes?: {
        root?: string | number | boolean | undefined;
        toolTip?: string | number | boolean | undefined;
    } | undefined;
    sizes?: {
        rootWidth?: string | number | boolean | undefined;
        controlWidth?: string | number | boolean | undefined;
        numberInputMinWidth?: string | number | boolean | undefined;
        scrubberWidth?: string | number | boolean | undefined;
        scrubberHeight?: string | number | boolean | undefined;
        rowHeight?: string | number | boolean | undefined;
        folderTitleHeight?: string | number | boolean | undefined;
        checkboxSize?: string | number | boolean | undefined;
        joystickWidth?: string | number | boolean | undefined;
        joystickHeight?: string | number | boolean | undefined;
        colorPickerWidth?: string | number | boolean | undefined;
        colorPickerHeight?: string | number | boolean | undefined;
        imagePreviewWidth?: string | number | boolean | undefined;
        imagePreviewHeight?: string | number | boolean | undefined;
        monitorHeight?: string | number | boolean | undefined;
        titleBarHeight?: string | number | boolean | undefined;
    } | undefined;
    shadows?: {
        level1?: string | number | boolean | undefined;
        level2?: string | number | boolean | undefined;
    } | undefined;
    borderWidths?: {
        root?: string | number | boolean | undefined;
        input?: string | number | boolean | undefined;
        focus?: string | number | boolean | undefined;
        hover?: string | number | boolean | undefined;
        active?: string | number | boolean | undefined;
        folder?: string | number | boolean | undefined;
    } | undefined;
    fontWeights?: {
        label?: string | number | boolean | undefined;
        folder?: string | number | boolean | undefined;
        button?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
}), Argument1 extends string | ({
    colors?: {
        elevation1?: string | number | boolean | undefined;
        elevation2?: string | number | boolean | undefined;
        elevation3?: string | number | boolean | undefined;
        accent1?: string | number | boolean | undefined;
        accent2?: string | number | boolean | undefined;
        accent3?: string | number | boolean | undefined;
        highlight1?: string | number | boolean | undefined;
        highlight2?: string | number | boolean | undefined;
        highlight3?: string | number | boolean | undefined;
        vivid1?: string | number | boolean | undefined;
        folderWidgetColor?: string | number | boolean | undefined;
        folderTextColor?: string | number | boolean | undefined;
        toolTipBackground?: string | number | boolean | undefined;
        toolTipText?: string | number | boolean | undefined;
    } | undefined;
    radii?: {
        xs?: string | number | boolean | undefined;
        sm?: string | number | boolean | undefined;
        lg?: string | number | boolean | undefined;
    } | undefined;
    space?: {
        xs?: string | number | boolean | undefined;
        sm?: string | number | boolean | undefined;
        md?: string | number | boolean | undefined;
        rowGap?: string | number | boolean | undefined;
        colGap?: string | number | boolean | undefined;
    } | undefined;
    fonts?: {
        mono?: string | number | boolean | undefined;
        sans?: string | number | boolean | undefined;
    } | undefined;
    fontSizes?: {
        root?: string | number | boolean | undefined;
        toolTip?: string | number | boolean | undefined;
    } | undefined;
    sizes?: {
        rootWidth?: string | number | boolean | undefined;
        controlWidth?: string | number | boolean | undefined;
        numberInputMinWidth?: string | number | boolean | undefined;
        scrubberWidth?: string | number | boolean | undefined;
        scrubberHeight?: string | number | boolean | undefined;
        rowHeight?: string | number | boolean | undefined;
        folderTitleHeight?: string | number | boolean | undefined;
        checkboxSize?: string | number | boolean | undefined;
        joystickWidth?: string | number | boolean | undefined;
        joystickHeight?: string | number | boolean | undefined;
        colorPickerWidth?: string | number | boolean | undefined;
        colorPickerHeight?: string | number | boolean | undefined;
        imagePreviewWidth?: string | number | boolean | undefined;
        imagePreviewHeight?: string | number | boolean | undefined;
        monitorHeight?: string | number | boolean | undefined;
        titleBarHeight?: string | number | boolean | undefined;
    } | undefined;
    shadows?: {
        level1?: string | number | boolean | undefined;
        level2?: string | number | boolean | undefined;
    } | undefined;
    borderWidths?: {
        root?: string | number | boolean | undefined;
        input?: string | number | boolean | undefined;
        focus?: string | number | boolean | undefined;
        hover?: string | number | boolean | undefined;
        active?: string | number | boolean | undefined;
        folder?: string | number | boolean | undefined;
    } | undefined;
    fontWeights?: {
        label?: string | number | boolean | undefined;
        folder?: string | number | boolean | undefined;
        button?: string | number | boolean | undefined;
    } | undefined;
} & {
    [x: string]: {
        [x: string]: string | number | boolean;
        [x: number]: string | number | boolean;
    };
})>(nameOrScalesArg0: Argument0, nameOrScalesArg1?: Argument1 | undefined) => string & {
    className: string;
    selector: string;
} & (Argument0 extends string ? import("@stitches/react/types/stitches").ThemeTokens<Argument1, "leva"> : import("@stitches/react/types/stitches").ThemeTokens<Argument0, "leva">), globalCss: <Styles extends {
    [K: string]: any;
}>(...styles: ({
    '@import'?: unknown;
    '@font-face'?: unknown;
} & { [K in keyof Styles]: K extends "@import" ? string | string[] : K extends "@font-face" ? import("@stitches/react/types/css").AtRule.FontFace | import("@stitches/react/types/css").AtRule.FontFace[] : K extends `@keyframes ${string}` ? {
    [x: string]: import("@stitches/react/types/css-util").CSS<{}, {
        colors: {
            elevation1: string;
            elevation2: string;
            elevation3: string;
            accent1: string;
            accent2: string;
            accent3: string;
            highlight1: string;
            highlight2: string;
            highlight3: string;
            vivid1: string;
            folderWidgetColor: string;
            folderTextColor: string;
            toolTipBackground: string;
            toolTipText: string;
        };
        radii: {
            xs: string;
            sm: string;
            lg: string;
        };
        space: {
            xs: string;
            sm: string;
            md: string;
            rowGap: string;
            colGap: string;
        };
        fonts: {
            mono: string;
            sans: string;
        };
        fontSizes: {
            root: string;
            toolTip: string;
        };
        sizes: {
            rootWidth: string;
            controlWidth: string;
            numberInputMinWidth: string;
            scrubberWidth: string;
            scrubberHeight: string;
            rowHeight: string;
            folderTitleHeight: string;
            checkboxSize: string;
            joystickWidth: string;
            joystickHeight: string;
            colorPickerWidth: string;
            colorPickerHeight: string;
            imagePreviewWidth: string;
            imagePreviewHeight: string;
            monitorHeight: string;
            titleBarHeight: string;
        };
        shadows: {
            level1: string;
            level2: string;
        };
        borderWidths: {
            root: string;
            input: string;
            focus: string;
            hover: string;
            active: string;
            folder: string;
        };
        fontWeights: {
            label: string;
            folder: string;
            button: string;
        };
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        $flex: () => {
            display: string;
            alignItems: string;
        };
        $flexCenter: () => {
            display: string;
            alignItems: string;
            justifyContent: string;
        };
        $reset: () => {
            outline: string;
            fontSize: string;
            fontWeight: string;
            color: string;
            fontFamily: string;
            border: string;
            backgroundColor: string;
            appearance: string;
        };
        $draggable: () => {
            touchAction: string;
            WebkitUserDrag: string;
            userSelect: string;
        };
        $focus: (value: string) => {
            '&:focus': any;
        };
        $focusWithin: (value: string) => {
            '&:focus-within': any;
        };
        $hover: (value: string) => {
            '&:hover': any;
        };
        $active: (value: string) => {
            '&:active': any;
        };
        $inputStyle: () => (value: string) => any;
        $focusStyle: () => (value: string) => any;
        $hoverStyle: () => (value: string) => any;
        $activeStyle: () => (value: string) => any;
    }>;
} : K extends `@property ${string}` ? import("@stitches/react/types/css").AtRule.Property : import("@stitches/react/types/css-util").CSS<{}, {
    colors: {
        elevation1: string;
        elevation2: string;
        elevation3: string;
        accent1: string;
        accent2: string;
        accent3: string;
        highlight1: string;
        highlight2: string;
        highlight3: string;
        vivid1: string;
        folderWidgetColor: string;
        folderTextColor: string;
        toolTipBackground: string;
        toolTipText: string;
    };
    radii: {
        xs: string;
        sm: string;
        lg: string;
    };
    space: {
        xs: string;
        sm: string;
        md: string;
        rowGap: string;
        colGap: string;
    };
    fonts: {
        mono: string;
        sans: string;
    };
    fontSizes: {
        root: string;
        toolTip: string;
    };
    sizes: {
        rootWidth: string;
        controlWidth: string;
        numberInputMinWidth: string;
        scrubberWidth: string;
        scrubberHeight: string;
        rowHeight: string;
        folderTitleHeight: string;
        checkboxSize: string;
        joystickWidth: string;
        joystickHeight: string;
        colorPickerWidth: string;
        colorPickerHeight: string;
        imagePreviewWidth: string;
        imagePreviewHeight: string;
        monitorHeight: string;
        titleBarHeight: string;
    };
    shadows: {
        level1: string;
        level2: string;
    };
    borderWidths: {
        root: string;
        input: string;
        focus: string;
        hover: string;
        active: string;
        folder: string;
    };
    fontWeights: {
        label: string;
        folder: string;
        button: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    $flex: () => {
        display: string;
        alignItems: string;
    };
    $flexCenter: () => {
        display: string;
        alignItems: string;
        justifyContent: string;
    };
    $reset: () => {
        outline: string;
        fontSize: string;
        fontWeight: string;
        color: string;
        fontFamily: string;
        border: string;
        backgroundColor: string;
        appearance: string;
    };
    $draggable: () => {
        touchAction: string;
        WebkitUserDrag: string;
        userSelect: string;
    };
    $focus: (value: string) => {
        '&:focus': any;
    };
    $focusWithin: (value: string) => {
        '&:focus-within': any;
    };
    $hover: (value: string) => {
        '&:hover': any;
    };
    $active: (value: string) => {
        '&:active': any;
    };
    $inputStyle: () => (value: string) => any;
    $focusStyle: () => (value: string) => any;
    $hoverStyle: () => (value: string) => any;
    $activeStyle: () => (value: string) => any;
}>; })[]) => () => string, keyframes: (style: {
    [offset: string]: import("@stitches/react/types/css-util").CSS<{}, {
        colors: {
            elevation1: string;
            elevation2: string;
            elevation3: string;
            accent1: string;
            accent2: string;
            accent3: string;
            highlight1: string;
            highlight2: string;
            highlight3: string;
            vivid1: string;
            folderWidgetColor: string;
            folderTextColor: string;
            toolTipBackground: string;
            toolTipText: string;
        };
        radii: {
            xs: string;
            sm: string;
            lg: string;
        };
        space: {
            xs: string;
            sm: string;
            md: string;
            rowGap: string;
            colGap: string;
        };
        fonts: {
            mono: string;
            sans: string;
        };
        fontSizes: {
            root: string;
            toolTip: string;
        };
        sizes: {
            rootWidth: string;
            controlWidth: string;
            numberInputMinWidth: string;
            scrubberWidth: string;
            scrubberHeight: string;
            rowHeight: string;
            folderTitleHeight: string;
            checkboxSize: string;
            joystickWidth: string;
            joystickHeight: string;
            colorPickerWidth: string;
            colorPickerHeight: string;
            imagePreviewWidth: string;
            imagePreviewHeight: string;
            monitorHeight: string;
            titleBarHeight: string;
        };
        shadows: {
            level1: string;
            level2: string;
        };
        borderWidths: {
            root: string;
            input: string;
            focus: string;
            hover: string;
            active: string;
            folder: string;
        };
        fontWeights: {
            label: string;
            folder: string;
            button: string;
        };
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        $flex: () => {
            display: string;
            alignItems: string;
        };
        $flexCenter: () => {
            display: string;
            alignItems: string;
            justifyContent: string;
        };
        $reset: () => {
            outline: string;
            fontSize: string;
            fontWeight: string;
            color: string;
            fontFamily: string;
            border: string;
            backgroundColor: string;
            appearance: string;
        };
        $draggable: () => {
            touchAction: string;
            WebkitUserDrag: string;
            userSelect: string;
        };
        $focus: (value: string) => {
            '&:focus': any;
        };
        $focusWithin: (value: string) => {
            '&:focus-within': any;
        };
        $hover: (value: string) => {
            '&:hover': any;
        };
        $active: (value: string) => {
            '&:active': any;
        };
        $inputStyle: () => (value: string) => any;
        $focusStyle: () => (value: string) => any;
        $hoverStyle: () => (value: string) => any;
        $activeStyle: () => (value: string) => any;
    }>;
}) => {
    (): string;
    name: string;
};
export declare const globalStyles: () => string;
