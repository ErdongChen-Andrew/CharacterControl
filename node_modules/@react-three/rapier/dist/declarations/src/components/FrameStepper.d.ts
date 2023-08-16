import React from "react";
import { PhysicsProps } from "./Physics";
interface FrameStepperProps {
    type?: PhysicsProps["updateLoop"];
    onStep: (dt: number) => void;
    updatePriority?: number;
}
declare const _default: React.MemoExoticComponent<({ onStep, type, updatePriority }: FrameStepperProps) => JSX.Element>;
export default _default;
