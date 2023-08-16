import { RawIntegrationParameters } from "../raw";
export declare class IntegrationParameters {
    raw: RawIntegrationParameters;
    constructor(raw?: RawIntegrationParameters);
    /**
     * Free the WASM memory used by these integration parameters.
     */
    free(): void;
    /**
     * The timestep length (default: `1.0 / 60.0`)
     */
    get dt(): number;
    /**
     * The Error Reduction Parameter in `[0, 1]` is the proportion of
     * the positional error to be corrected at each time step (default: `0.2`).
     */
    get erp(): number;
    /**
     * Amount of penetration the engine wont attempt to correct (default: `0.001m`).
     */
    get allowedLinearError(): number;
    /**
     * The maximal distance separating two objects that will generate predictive contacts (default: `0.002`).
     */
    get predictionDistance(): number;
    /**
     * Maximum number of iterations performed by the velocity constraints solver (default: `4`).
     */
    get maxVelocityIterations(): number;
    /**
     * Maximum number of friction iterations performed by the position-based constraints solver (default: `1`).
     */
    get maxVelocityFrictionIterations(): number;
    /**
     * Maximum number of stabilization iterations performed by the position-based constraints solver (default: `1`).
     */
    get maxStabilizationIterations(): number;
    /**
     * Minimum number of dynamic bodies in each active island (default: `128`).
     */
    get minIslandSize(): number;
    /**
     * Maximum number of substeps performed by the  solver (default: `1`).
     */
    get maxCcdSubsteps(): number;
    set dt(value: number);
    set erp(value: number);
    set allowedLinearError(value: number);
    set predictionDistance(value: number);
    set maxVelocityIterations(value: number);
    set maxVelocityFrictionIterations(value: number);
    set maxStabilizationIterations(value: number);
    set minIslandSize(value: number);
    set maxCcdSubsteps(value: number);
}
