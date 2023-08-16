import { DependencyList } from "react";
/**
 * Initiate an instance and return a safe getter
 */
export declare const useImperativeInstance: <InstanceType_1>(createFn: () => InstanceType_1, destroyFn: (instance: InstanceType_1) => void, dependencyList: DependencyList) => () => InstanceType_1;
