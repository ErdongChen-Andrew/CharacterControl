import { Lookup } from '@react-spring/types';
import { Valid } from '../types/common';
import { PickAnimated, SpringValues } from '../types';
import { SpringRef } from '../SpringRef';
import { Controller } from '../Controller';
import { UseSpringProps } from './useSpring';
export declare type UseTrailProps<Props extends object = any> = UseSpringProps<Props>;
export declare function useTrail<Props extends object>(length: number, props: (i: number, ctrl: Controller) => UseTrailProps | (Props & Valid<Props, UseTrailProps<Props>>), deps?: readonly any[]): PickAnimated<Props> extends infer State ? State extends Lookup<any> ? [SpringValues<State>[], SpringRef<State>] : never : never;
/**
 * This hook is an abstraction around `useSprings` and is designed to
 * automatically orchestrate the springs to stagger one after the other
 *
 * ```jsx
 * export const MyComponent = () => {
 *  const trails = useTrail(3, {opacity: 0})
 *
 *  return trails.map(styles => <animated.div style={styles} />)
 * }
 * ```
 *
 * @param length – The number of springs you want to create
 * @param propsArg – The props to pass to the internal `useSprings` hook,
 * therefore is the same as `useSprings`.
 *
 * @public
 */
export declare function useTrail<Props extends object>(length: number, props: UseTrailProps | (Props & Valid<Props, UseTrailProps<Props>>)): SpringValues<PickAnimated<Props>>[];
/**
 * This hook is an abstraction around `useSprings` and is designed to
 * automatically orchestrate the springs to stagger one after the other
 *
 * ```jsx
 * export const MyComponent = () => {
 *  const trails = useTrail(3, {opacity: 0}, [])
 *
 *  return trails.map(styles => <animated.div style={styles} />)
 * }
 * ```
 *
 * @param length – The number of springs you want to create
 * @param propsArg – The props to pass to the internal `useSprings` hook,
 * therefore is the same as `useSprings`.
 * @param deps – The optional array of dependencies to pass to the internal
 * `useSprings` hook, therefore is the same as `useSprings`.
 *
 * @public
 */
export declare function useTrail<Props extends object>(length: number, props: UseTrailProps | (Props & Valid<Props, UseTrailProps<Props>>), deps: readonly any[]): PickAnimated<Props> extends infer State ? State extends Lookup<any> ? [SpringValues<State>[], SpringRef<State>] : never : never;
