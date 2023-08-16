export declare const RangeGrid: import("@stitches/react/types/styled-component").StyledComponent<"div", {
    hasRange?: boolean | "true" | undefined;
}, {}, import("@stitches/react/types/css-util").CSS<{}, {
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
}>>;
