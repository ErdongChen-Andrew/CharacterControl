import { SpringRef } from '../SpringRef';
/**
 * Used to orchestrate animation hooks in sequence with one another.
 * This is best used when you specifically want to orchestrate different
 * types of animation hook e.g. `useSpring` & `useTransition` in
 * sequence as opposed to multiple `useSpring` hooks.
 *
 *
 * ```jsx
 * export const MyComponent = () => {
 *  //...
 *  useChain([springRef, transitionRef])
 *  //...
 * }
 * ```
 *
 * @param refs – An array of `SpringRef`s.
 * @param timeSteps – Optional array of numbers that define the
 * delay between each animation from 0-1. The length should correlate
 * to the length of `refs`.
 * @param timeFrame – Optional number that defines the total duration
 *
 * @public
 */
export declare function useChain(refs: ReadonlyArray<SpringRef>, timeSteps?: number[], timeFrame?: number): void;
