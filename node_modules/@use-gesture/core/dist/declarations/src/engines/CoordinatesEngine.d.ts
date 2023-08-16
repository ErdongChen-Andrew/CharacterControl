import { Engine } from './Engine';
import { CoordinatesKey, Vector2 } from '../types';
export declare abstract class CoordinatesEngine<Key extends CoordinatesKey> extends Engine<Key> {
    aliasKey: string;
    reset(): void;
    init(): void;
    computeOffset(): void;
    computeMovement(): void;
    axisIntent(event?: UIEvent): void;
    restrictToAxis(v: Vector2): void;
}
