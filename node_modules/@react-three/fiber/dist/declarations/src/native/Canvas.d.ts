import * as React from 'react';
import { View, ViewProps, ViewStyle } from 'react-native';
import { RenderProps } from '../core';
export interface CanvasProps extends Omit<RenderProps<HTMLCanvasElement>, 'size' | 'dpr'>, ViewProps {
    children: React.ReactNode;
    style?: ViewStyle;
}
export interface Props extends CanvasProps {
}
export declare const Canvas: React.ForwardRefExoticComponent<Props & React.RefAttributes<View>>;
