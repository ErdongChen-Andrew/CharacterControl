import { Object3D } from 'three';
/**
 * Usage:
 *  const exporter = new STLExporter();
 *
 *  // second argument is a list of options
 *  const data = exporter.parse( mesh, { binary: true } );
 *
 */
export interface STLExporterOptions {
    binary?: boolean;
}
declare class STLExporter {
    private binary;
    private output;
    private offset;
    private objects;
    private triangles;
    private vA;
    private vB;
    private vC;
    private cb;
    private ab;
    private normal;
    constructor();
    parse(scene: Object3D, options: STLExporterOptions): string | DataView;
    private writeFace;
    private writeNormal;
    private writeVertex;
}
export { STLExporter };
