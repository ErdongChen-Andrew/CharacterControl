import { Euler, Quaternion, Vector3 } from "three";
/**
 * Takes an object resembling a Vector3 and returs a Three.Vector3
 * @category Math helpers
 */
export declare const vec3: ({ x, y, z }?: {
    x: number;
    y: number;
    z: number;
}) => Vector3;
/**
 * Takes an object resembling a Quaternion and returs a Three.Quaternion
 * @category Math helpers
 */
export declare const quat: ({ x, y, z, w }?: {
    x: number;
    y: number;
    z: number;
    w: number;
}) => Quaternion;
/**
 * Takes an object resembling an Euler and returs a Three.Euler
 * @category Math helpers
 */
export declare const euler: ({ x, y, z }?: {
    x: number;
    y: number;
    z: number;
}) => Euler;
