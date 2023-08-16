import type { ButtonInput, ButtonSettings } from '../types';
/**
 *
 * @param name button name
 * @param onClick function that executes when the button is clicked
 */
export declare function button(onClick: ButtonInput['onClick'], settings?: ButtonSettings): ButtonInput;
