
let wasm;

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachedFloat64Memory0 = new Float64Array();

function getFloat64Memory0() {
    if (cachedFloat64Memory0.byteLength === 0) {
        cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer);
    }
    return cachedFloat64Memory0;
}

let cachedInt32Memory0 = new Int32Array();

function getInt32Memory0() {
    if (cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}

const cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8Memory0 = new Uint8Array();

function getUint8Memory0() {
    if (cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
/**
* @returns {string}
*/
export function version() {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.version(retptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(r0, r1);
    }
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}

let cachedFloat32Memory0 = new Float32Array();

function getFloat32Memory0() {
    if (cachedFloat32Memory0.byteLength === 0) {
        cachedFloat32Memory0 = new Float32Array(wasm.memory.buffer);
    }
    return cachedFloat32Memory0;
}

let stack_pointer = 32;

function addBorrowedObject(obj) {
    if (stack_pointer == 1) throw new Error('out of js stack');
    heap[--stack_pointer] = obj;
    return stack_pointer;
}

function getArrayF32FromWasm0(ptr, len) {
    return getFloat32Memory0().subarray(ptr / 4, ptr / 4 + len);
}

let cachedUint32Memory0 = new Uint32Array();

function getUint32Memory0() {
    if (cachedUint32Memory0.byteLength === 0) {
        cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32Memory0;
}

function getArrayU32FromWasm0(ptr, len) {
    return getUint32Memory0().subarray(ptr / 4, ptr / 4 + len);
}

let WASM_VECTOR_LEN = 0;

function passArrayF32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4);
    getFloat32Memory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function passArray32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4);
    getUint32Memory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}
/**
*/
export const RawJointType = Object.freeze({ Revolute:0,"0":"Revolute",Fixed:1,"1":"Fixed",Prismatic:2,"2":"Prismatic",Spherical:3,"3":"Spherical",Generic:4,"4":"Generic", });
/**
*/
export const RawMotorModel = Object.freeze({ AccelerationBased:0,"0":"AccelerationBased",ForceBased:1,"1":"ForceBased", });
/**
*/
export const RawJointAxis = Object.freeze({ X:0,"0":"X",Y:1,"1":"Y",Z:2,"2":"Z",AngX:3,"3":"AngX",AngY:4,"4":"AngY",AngZ:5,"5":"AngZ", });
/**
*/
export const RawRigidBodyType = Object.freeze({ Dynamic:0,"0":"Dynamic",Fixed:1,"1":"Fixed",KinematicPositionBased:2,"2":"KinematicPositionBased",KinematicVelocityBased:3,"3":"KinematicVelocityBased", });
/**
*/
export const RawFeatureType = Object.freeze({ Vertex:0,"0":"Vertex",Edge:1,"1":"Edge",Face:2,"2":"Face",Unknown:3,"3":"Unknown", });
/**
*/
export const RawShapeType = Object.freeze({ Ball:0,"0":"Ball",Cuboid:1,"1":"Cuboid",Capsule:2,"2":"Capsule",Segment:3,"3":"Segment",Polyline:4,"4":"Polyline",Triangle:5,"5":"Triangle",TriMesh:6,"6":"TriMesh",HeightField:7,"7":"HeightField",Compound:8,"8":"Compound",ConvexPolyhedron:9,"9":"ConvexPolyhedron",Cylinder:10,"10":"Cylinder",Cone:11,"11":"Cone",RoundCuboid:12,"12":"RoundCuboid",RoundTriangle:13,"13":"RoundTriangle",RoundCylinder:14,"14":"RoundCylinder",RoundCone:15,"15":"RoundCone",RoundConvexPolyhedron:16,"16":"RoundConvexPolyhedron",HalfSpace:17,"17":"HalfSpace", });
/**
*/
export class RawBroadPhase {

    static __wrap(ptr) {
        const obj = Object.create(RawBroadPhase.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawbroadphase_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.rawbroadphase_new();
        return RawBroadPhase.__wrap(ret);
    }
}
/**
*/
export class RawCCDSolver {

    static __wrap(ptr) {
        const obj = Object.create(RawCCDSolver.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawccdsolver_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.rawccdsolver_new();
        return RawCCDSolver.__wrap(ret);
    }
}
/**
*/
export class RawCharacterCollision {

    static __wrap(ptr) {
        const obj = Object.create(RawCharacterCollision.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawcharactercollision_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.rawcharactercollision_new();
        return RawCharacterCollision.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    handle() {
        const ret = wasm.rawcharactercollision_handle(this.ptr);
        return ret;
    }
    /**
    * @returns {RawVector}
    */
    translationApplied() {
        const ret = wasm.rawcharactercollision_translationApplied(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    translationRemaining() {
        const ret = wasm.rawcharactercollision_translationRemaining(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    toi() {
        const ret = wasm.rawcharactercollision_toi(this.ptr);
        return ret;
    }
    /**
    * @returns {RawVector}
    */
    worldWitness1() {
        const ret = wasm.rawcharactercollision_worldWitness1(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    worldWitness2() {
        const ret = wasm.rawcharactercollision_worldWitness2(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    worldNormal1() {
        const ret = wasm.rawcharactercollision_worldNormal1(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    worldNormal2() {
        const ret = wasm.rawcharactercollision_worldNormal2(this.ptr);
        return RawVector.__wrap(ret);
    }
}
/**
*/
export class RawColliderSet {

    static __wrap(ptr) {
        const obj = Object.create(RawColliderSet.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawcolliderset_free(ptr);
    }
    /**
    * The world-space translation of this collider.
    * @param {number} handle
    * @returns {RawVector}
    */
    coTranslation(handle) {
        const ret = wasm.rawcolliderset_coTranslation(this.ptr, handle);
        return RawVector.__wrap(ret);
    }
    /**
    * The world-space orientation of this collider.
    * @param {number} handle
    * @returns {RawRotation}
    */
    coRotation(handle) {
        const ret = wasm.rawcolliderset_coRotation(this.ptr, handle);
        return RawRotation.__wrap(ret);
    }
    /**
    * Sets the translation of this collider.
    *
    * # Parameters
    * - `x`: the world-space position of the collider along the `x` axis.
    * - `y`: the world-space position of the collider along the `y` axis.
    * - `z`: the world-space position of the collider along the `z` axis.
    * - `wakeUp`: forces the collider to wake-up so it is properly affected by forces if it
    * wasn't moving before modifying its position.
    * @param {number} handle
    * @param {number} x
    * @param {number} y
    * @param {number} z
    */
    coSetTranslation(handle, x, y, z) {
        wasm.rawcolliderset_coSetTranslation(this.ptr, handle, x, y, z);
    }
    /**
    * @param {number} handle
    * @param {number} x
    * @param {number} y
    * @param {number} z
    */
    coSetTranslationWrtParent(handle, x, y, z) {
        wasm.rawcolliderset_coSetTranslationWrtParent(this.ptr, handle, x, y, z);
    }
    /**
    * Sets the rotation quaternion of this collider.
    *
    * This does nothing if a zero quaternion is provided.
    *
    * # Parameters
    * - `x`: the first vector component of the quaternion.
    * - `y`: the second vector component of the quaternion.
    * - `z`: the third vector component of the quaternion.
    * - `w`: the scalar component of the quaternion.
    * - `wakeUp`: forces the collider to wake-up so it is properly affected by forces if it
    * wasn't moving before modifying its position.
    * @param {number} handle
    * @param {number} x
    * @param {number} y
    * @param {number} z
    * @param {number} w
    */
    coSetRotation(handle, x, y, z, w) {
        wasm.rawcolliderset_coSetRotation(this.ptr, handle, x, y, z, w);
    }
    /**
    * @param {number} handle
    * @param {number} x
    * @param {number} y
    * @param {number} z
    * @param {number} w
    */
    coSetRotationWrtParent(handle, x, y, z, w) {
        wasm.rawcolliderset_coSetRotationWrtParent(this.ptr, handle, x, y, z, w);
    }
    /**
    * Is this collider a sensor?
    * @param {number} handle
    * @returns {boolean}
    */
    coIsSensor(handle) {
        const ret = wasm.rawcolliderset_coIsSensor(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * The type of the shape of this collider.
    * @param {number} handle
    * @returns {number}
    */
    coShapeType(handle) {
        const ret = wasm.rawcolliderset_coShapeType(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * @param {number} handle
    * @returns {RawVector | undefined}
    */
    coHalfspaceNormal(handle) {
        const ret = wasm.rawcolliderset_coHalfspaceNormal(this.ptr, handle);
        return ret === 0 ? undefined : RawVector.__wrap(ret);
    }
    /**
    * The half-extents of this collider if it is has a cuboid shape.
    * @param {number} handle
    * @returns {RawVector | undefined}
    */
    coHalfExtents(handle) {
        const ret = wasm.rawcolliderset_coHalfExtents(this.ptr, handle);
        return ret === 0 ? undefined : RawVector.__wrap(ret);
    }
    /**
    * Set the half-extents of this collider if it has a cuboid shape.
    * @param {number} handle
    * @param {RawVector} newHalfExtents
    */
    coSetHalfExtents(handle, newHalfExtents) {
        _assertClass(newHalfExtents, RawVector);
        wasm.rawcolliderset_coSetHalfExtents(this.ptr, handle, newHalfExtents.ptr);
    }
    /**
    * The radius of this collider if it is a ball, capsule, cylinder, or cone shape.
    * @param {number} handle
    * @returns {number | undefined}
    */
    coRadius(handle) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.rawcolliderset_coRadius(retptr, this.ptr, handle);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getFloat32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * Set the radius of this collider if it is a ball, capsule, cylinder, or cone shape.
    * @param {number} handle
    * @param {number} newRadius
    */
    coSetRadius(handle, newRadius) {
        wasm.rawcolliderset_coSetRadius(this.ptr, handle, newRadius);
    }
    /**
    * The half height of this collider if it is a capsule, cylinder, or cone shape.
    * @param {number} handle
    * @returns {number | undefined}
    */
    coHalfHeight(handle) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.rawcolliderset_coHalfHeight(retptr, this.ptr, handle);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getFloat32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * Set the half height of this collider if it is a capsule, cylinder, or cone shape.
    * @param {number} handle
    * @param {number} newHalfheight
    */
    coSetHalfHeight(handle, newHalfheight) {
        wasm.rawcolliderset_coSetHalfHeight(this.ptr, handle, newHalfheight);
    }
    /**
    * The radius of the round edges of this collider.
    * @param {number} handle
    * @returns {number | undefined}
    */
    coRoundRadius(handle) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.rawcolliderset_coRoundRadius(retptr, this.ptr, handle);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getFloat32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * Set the radius of the round edges of this collider.
    * @param {number} handle
    * @param {number} newBorderRadius
    */
    coSetRoundRadius(handle, newBorderRadius) {
        wasm.rawcolliderset_coSetRoundRadius(this.ptr, handle, newBorderRadius);
    }
    /**
    * The vertices of this triangle mesh, polyline, convex polyhedron, segment, triangle or convex polyhedron, if it is one.
    * @param {number} handle
    * @returns {Float32Array | undefined}
    */
    coVertices(handle) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.rawcolliderset_coVertices(retptr, this.ptr, handle);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayF32FromWasm0(r0, r1).slice();
                wasm.__wbindgen_free(r0, r1 * 4);
            }
            return v0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * The indices of this triangle mesh, polyline, or convex polyhedron, if it is one.
    * @param {number} handle
    * @returns {Uint32Array | undefined}
    */
    coIndices(handle) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.rawcolliderset_coIndices(retptr, this.ptr, handle);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayU32FromWasm0(r0, r1).slice();
                wasm.__wbindgen_free(r0, r1 * 4);
            }
            return v0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * The height of this heightfield if it is one.
    * @param {number} handle
    * @returns {Float32Array | undefined}
    */
    coHeightfieldHeights(handle) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.rawcolliderset_coHeightfieldHeights(retptr, this.ptr, handle);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            let v0;
            if (r0 !== 0) {
                v0 = getArrayF32FromWasm0(r0, r1).slice();
                wasm.__wbindgen_free(r0, r1 * 4);
            }
            return v0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * The scaling factor applied of this heightfield if it is one.
    * @param {number} handle
    * @returns {RawVector | undefined}
    */
    coHeightfieldScale(handle) {
        const ret = wasm.rawcolliderset_coHeightfieldScale(this.ptr, handle);
        return ret === 0 ? undefined : RawVector.__wrap(ret);
    }
    /**
    * The number of rows on this heightfield's height matrix, if it is one.
    * @param {number} handle
    * @returns {number | undefined}
    */
    coHeightfieldNRows(handle) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.rawcolliderset_coHeightfieldNRows(retptr, this.ptr, handle);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1 >>> 0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * The number of columns on this heightfield's height matrix, if it is one.
    * @param {number} handle
    * @returns {number | undefined}
    */
    coHeightfieldNCols(handle) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.rawcolliderset_coHeightfieldNCols(retptr, this.ptr, handle);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1 >>> 0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * The unique integer identifier of the collider this collider is attached to.
    * @param {number} handle
    * @returns {number | undefined}
    */
    coParent(handle) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.rawcolliderset_coParent(retptr, this.ptr, handle);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r2 = getFloat64Memory0()[retptr / 8 + 1];
            return r0 === 0 ? undefined : r2;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {number} handle
    * @param {boolean} enabled
    */
    coSetEnabled(handle, enabled) {
        wasm.rawcolliderset_coSetEnabled(this.ptr, handle, enabled);
    }
    /**
    * @param {number} handle
    * @returns {boolean}
    */
    coIsEnabled(handle) {
        const ret = wasm.rawcolliderset_coIsEnabled(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * The friction coefficient of this collider.
    * @param {number} handle
    * @returns {number}
    */
    coFriction(handle) {
        const ret = wasm.rawcolliderset_coFriction(this.ptr, handle);
        return ret;
    }
    /**
    * The restitution coefficient of this collider.
    * @param {number} handle
    * @returns {number}
    */
    coRestitution(handle) {
        const ret = wasm.rawcolliderset_coRestitution(this.ptr, handle);
        return ret;
    }
    /**
    * The density of this collider.
    * @param {number} handle
    * @returns {number}
    */
    coDensity(handle) {
        const ret = wasm.rawcolliderset_coDensity(this.ptr, handle);
        return ret;
    }
    /**
    * The mass of this collider.
    * @param {number} handle
    * @returns {number}
    */
    coMass(handle) {
        const ret = wasm.rawcolliderset_coMass(this.ptr, handle);
        return ret;
    }
    /**
    * The volume of this collider.
    * @param {number} handle
    * @returns {number}
    */
    coVolume(handle) {
        const ret = wasm.rawcolliderset_coVolume(this.ptr, handle);
        return ret;
    }
    /**
    * The collision groups of this collider.
    * @param {number} handle
    * @returns {number}
    */
    coCollisionGroups(handle) {
        const ret = wasm.rawcolliderset_coCollisionGroups(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * The solver groups of this collider.
    * @param {number} handle
    * @returns {number}
    */
    coSolverGroups(handle) {
        const ret = wasm.rawcolliderset_coSolverGroups(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * The physics hooks enabled for this collider.
    * @param {number} handle
    * @returns {number}
    */
    coActiveHooks(handle) {
        const ret = wasm.rawcolliderset_coActiveHooks(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * The collision types enabled for this collider.
    * @param {number} handle
    * @returns {number}
    */
    coActiveCollisionTypes(handle) {
        const ret = wasm.rawcolliderset_coActiveCollisionTypes(this.ptr, handle);
        return ret;
    }
    /**
    * The events enabled for this collider.
    * @param {number} handle
    * @returns {number}
    */
    coActiveEvents(handle) {
        const ret = wasm.rawcolliderset_coActiveEvents(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * The total force magnitude beyond which a contact force event can be emitted.
    * @param {number} handle
    * @returns {number}
    */
    coContactForceEventThreshold(handle) {
        const ret = wasm.rawcolliderset_coContactForceEventThreshold(this.ptr, handle);
        return ret;
    }
    /**
    * @param {number} handle
    * @param {RawVector} point
    * @returns {boolean}
    */
    coContainsPoint(handle, point) {
        _assertClass(point, RawVector);
        const ret = wasm.rawcolliderset_coContainsPoint(this.ptr, handle, point.ptr);
        return ret !== 0;
    }
    /**
    * @param {number} handle
    * @param {RawVector} colliderVel
    * @param {RawShape} shape2
    * @param {RawVector} shape2Pos
    * @param {RawRotation} shape2Rot
    * @param {RawVector} shape2Vel
    * @param {number} maxToi
    * @param {boolean} stop_at_penetration
    * @returns {RawShapeTOI | undefined}
    */
    coCastShape(handle, colliderVel, shape2, shape2Pos, shape2Rot, shape2Vel, maxToi, stop_at_penetration) {
        _assertClass(colliderVel, RawVector);
        _assertClass(shape2, RawShape);
        _assertClass(shape2Pos, RawVector);
        _assertClass(shape2Rot, RawRotation);
        _assertClass(shape2Vel, RawVector);
        const ret = wasm.rawcolliderset_coCastShape(this.ptr, handle, colliderVel.ptr, shape2.ptr, shape2Pos.ptr, shape2Rot.ptr, shape2Vel.ptr, maxToi, stop_at_penetration);
        return ret === 0 ? undefined : RawShapeTOI.__wrap(ret);
    }
    /**
    * @param {number} handle
    * @param {RawVector} collider1Vel
    * @param {number} collider2handle
    * @param {RawVector} collider2Vel
    * @param {number} max_toi
    * @param {boolean} stop_at_penetration
    * @returns {RawShapeColliderTOI | undefined}
    */
    coCastCollider(handle, collider1Vel, collider2handle, collider2Vel, max_toi, stop_at_penetration) {
        _assertClass(collider1Vel, RawVector);
        _assertClass(collider2Vel, RawVector);
        const ret = wasm.rawcolliderset_coCastCollider(this.ptr, handle, collider1Vel.ptr, collider2handle, collider2Vel.ptr, max_toi, stop_at_penetration);
        return ret === 0 ? undefined : RawShapeColliderTOI.__wrap(ret);
    }
    /**
    * @param {number} handle
    * @param {RawShape} shape2
    * @param {RawVector} shapePos2
    * @param {RawRotation} shapeRot2
    * @returns {boolean}
    */
    coIntersectsShape(handle, shape2, shapePos2, shapeRot2) {
        _assertClass(shape2, RawShape);
        _assertClass(shapePos2, RawVector);
        _assertClass(shapeRot2, RawRotation);
        const ret = wasm.rawcolliderset_coIntersectsShape(this.ptr, handle, shape2.ptr, shapePos2.ptr, shapeRot2.ptr);
        return ret !== 0;
    }
    /**
    * @param {number} handle
    * @param {RawShape} shape2
    * @param {RawVector} shapePos2
    * @param {RawRotation} shapeRot2
    * @param {number} prediction
    * @returns {RawShapeContact | undefined}
    */
    coContactShape(handle, shape2, shapePos2, shapeRot2, prediction) {
        _assertClass(shape2, RawShape);
        _assertClass(shapePos2, RawVector);
        _assertClass(shapeRot2, RawRotation);
        const ret = wasm.rawcolliderset_coContactShape(this.ptr, handle, shape2.ptr, shapePos2.ptr, shapeRot2.ptr, prediction);
        return ret === 0 ? undefined : RawShapeContact.__wrap(ret);
    }
    /**
    * @param {number} handle
    * @param {number} collider2handle
    * @param {number} prediction
    * @returns {RawShapeContact | undefined}
    */
    coContactCollider(handle, collider2handle, prediction) {
        const ret = wasm.rawcolliderset_coContactCollider(this.ptr, handle, collider2handle, prediction);
        return ret === 0 ? undefined : RawShapeContact.__wrap(ret);
    }
    /**
    * @param {number} handle
    * @param {RawVector} point
    * @param {boolean} solid
    * @returns {RawPointProjection}
    */
    coProjectPoint(handle, point, solid) {
        _assertClass(point, RawVector);
        const ret = wasm.rawcolliderset_coProjectPoint(this.ptr, handle, point.ptr, solid);
        return RawPointProjection.__wrap(ret);
    }
    /**
    * @param {number} handle
    * @param {RawVector} rayOrig
    * @param {RawVector} rayDir
    * @param {number} maxToi
    * @returns {boolean}
    */
    coIntersectsRay(handle, rayOrig, rayDir, maxToi) {
        _assertClass(rayOrig, RawVector);
        _assertClass(rayDir, RawVector);
        const ret = wasm.rawcolliderset_coIntersectsRay(this.ptr, handle, rayOrig.ptr, rayDir.ptr, maxToi);
        return ret !== 0;
    }
    /**
    * @param {number} handle
    * @param {RawVector} rayOrig
    * @param {RawVector} rayDir
    * @param {number} maxToi
    * @param {boolean} solid
    * @returns {number}
    */
    coCastRay(handle, rayOrig, rayDir, maxToi, solid) {
        _assertClass(rayOrig, RawVector);
        _assertClass(rayDir, RawVector);
        const ret = wasm.rawcolliderset_coCastRay(this.ptr, handle, rayOrig.ptr, rayDir.ptr, maxToi, solid);
        return ret;
    }
    /**
    * @param {number} handle
    * @param {RawVector} rayOrig
    * @param {RawVector} rayDir
    * @param {number} maxToi
    * @param {boolean} solid
    * @returns {RawRayIntersection | undefined}
    */
    coCastRayAndGetNormal(handle, rayOrig, rayDir, maxToi, solid) {
        _assertClass(rayOrig, RawVector);
        _assertClass(rayDir, RawVector);
        const ret = wasm.rawcolliderset_coCastRayAndGetNormal(this.ptr, handle, rayOrig.ptr, rayDir.ptr, maxToi, solid);
        return ret === 0 ? undefined : RawRayIntersection.__wrap(ret);
    }
    /**
    * @param {number} handle
    * @param {boolean} is_sensor
    */
    coSetSensor(handle, is_sensor) {
        wasm.rawcolliderset_coSetSensor(this.ptr, handle, is_sensor);
    }
    /**
    * @param {number} handle
    * @param {number} restitution
    */
    coSetRestitution(handle, restitution) {
        wasm.rawcolliderset_coSetRestitution(this.ptr, handle, restitution);
    }
    /**
    * @param {number} handle
    * @param {number} friction
    */
    coSetFriction(handle, friction) {
        wasm.rawcolliderset_coSetFriction(this.ptr, handle, friction);
    }
    /**
    * @param {number} handle
    * @returns {number}
    */
    coFrictionCombineRule(handle) {
        const ret = wasm.rawcolliderset_coFrictionCombineRule(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * @param {number} handle
    * @param {number} rule
    */
    coSetFrictionCombineRule(handle, rule) {
        wasm.rawcolliderset_coSetFrictionCombineRule(this.ptr, handle, rule);
    }
    /**
    * @param {number} handle
    * @returns {number}
    */
    coRestitutionCombineRule(handle) {
        const ret = wasm.rawcolliderset_coRestitutionCombineRule(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * @param {number} handle
    * @param {number} rule
    */
    coSetRestitutionCombineRule(handle, rule) {
        wasm.rawcolliderset_coSetRestitutionCombineRule(this.ptr, handle, rule);
    }
    /**
    * @param {number} handle
    * @param {number} groups
    */
    coSetCollisionGroups(handle, groups) {
        wasm.rawcolliderset_coSetCollisionGroups(this.ptr, handle, groups);
    }
    /**
    * @param {number} handle
    * @param {number} groups
    */
    coSetSolverGroups(handle, groups) {
        wasm.rawcolliderset_coSetSolverGroups(this.ptr, handle, groups);
    }
    /**
    * @param {number} handle
    * @param {number} hooks
    */
    coSetActiveHooks(handle, hooks) {
        wasm.rawcolliderset_coSetActiveHooks(this.ptr, handle, hooks);
    }
    /**
    * @param {number} handle
    * @param {number} events
    */
    coSetActiveEvents(handle, events) {
        wasm.rawcolliderset_coSetActiveEvents(this.ptr, handle, events);
    }
    /**
    * @param {number} handle
    * @param {number} types
    */
    coSetActiveCollisionTypes(handle, types) {
        wasm.rawcolliderset_coSetActiveCollisionTypes(this.ptr, handle, types);
    }
    /**
    * @param {number} handle
    * @param {RawShape} shape
    */
    coSetShape(handle, shape) {
        _assertClass(shape, RawShape);
        wasm.rawcolliderset_coSetShape(this.ptr, handle, shape.ptr);
    }
    /**
    * @param {number} handle
    * @param {number} threshold
    */
    coSetContactForceEventThreshold(handle, threshold) {
        wasm.rawcolliderset_coSetContactForceEventThreshold(this.ptr, handle, threshold);
    }
    /**
    * @param {number} handle
    * @param {number} density
    */
    coSetDensity(handle, density) {
        wasm.rawcolliderset_coSetDensity(this.ptr, handle, density);
    }
    /**
    * @param {number} handle
    * @param {number} mass
    */
    coSetMass(handle, mass) {
        wasm.rawcolliderset_coSetMass(this.ptr, handle, mass);
    }
    /**
    * @param {number} handle
    * @param {number} mass
    * @param {RawVector} centerOfMass
    * @param {RawVector} principalAngularInertia
    * @param {RawRotation} angularInertiaFrame
    */
    coSetMassProperties(handle, mass, centerOfMass, principalAngularInertia, angularInertiaFrame) {
        _assertClass(centerOfMass, RawVector);
        _assertClass(principalAngularInertia, RawVector);
        _assertClass(angularInertiaFrame, RawRotation);
        wasm.rawcolliderset_coSetMassProperties(this.ptr, handle, mass, centerOfMass.ptr, principalAngularInertia.ptr, angularInertiaFrame.ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.rawcolliderset_new();
        return RawColliderSet.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    len() {
        const ret = wasm.rawcolliderset_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} handle
    * @returns {boolean}
    */
    contains(handle) {
        const ret = wasm.rawcolliderset_contains(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * @param {boolean} enabled
    * @param {RawShape} shape
    * @param {RawVector} translation
    * @param {RawRotation} rotation
    * @param {number} massPropsMode
    * @param {number} mass
    * @param {RawVector} centerOfMass
    * @param {RawVector} principalAngularInertia
    * @param {RawRotation} angularInertiaFrame
    * @param {number} density
    * @param {number} friction
    * @param {number} restitution
    * @param {number} frictionCombineRule
    * @param {number} restitutionCombineRule
    * @param {boolean} isSensor
    * @param {number} collisionGroups
    * @param {number} solverGroups
    * @param {number} activeCollisionTypes
    * @param {number} activeHooks
    * @param {number} activeEvents
    * @param {number} contactForceEventThreshold
    * @param {boolean} hasParent
    * @param {number} parent
    * @param {RawRigidBodySet} bodies
    * @returns {number | undefined}
    */
    createCollider(enabled, shape, translation, rotation, massPropsMode, mass, centerOfMass, principalAngularInertia, angularInertiaFrame, density, friction, restitution, frictionCombineRule, restitutionCombineRule, isSensor, collisionGroups, solverGroups, activeCollisionTypes, activeHooks, activeEvents, contactForceEventThreshold, hasParent, parent, bodies) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(shape, RawShape);
            _assertClass(translation, RawVector);
            _assertClass(rotation, RawRotation);
            _assertClass(centerOfMass, RawVector);
            _assertClass(principalAngularInertia, RawVector);
            _assertClass(angularInertiaFrame, RawRotation);
            _assertClass(bodies, RawRigidBodySet);
            wasm.rawcolliderset_createCollider(retptr, this.ptr, enabled, shape.ptr, translation.ptr, rotation.ptr, massPropsMode, mass, centerOfMass.ptr, principalAngularInertia.ptr, angularInertiaFrame.ptr, density, friction, restitution, frictionCombineRule, restitutionCombineRule, isSensor, collisionGroups, solverGroups, activeCollisionTypes, activeHooks, activeEvents, contactForceEventThreshold, hasParent, parent, bodies.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r2 = getFloat64Memory0()[retptr / 8 + 1];
            return r0 === 0 ? undefined : r2;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * Removes a collider from this set and wake-up the rigid-body it is attached to.
    * @param {number} handle
    * @param {RawIslandManager} islands
    * @param {RawRigidBodySet} bodies
    * @param {boolean} wakeUp
    */
    remove(handle, islands, bodies, wakeUp) {
        _assertClass(islands, RawIslandManager);
        _assertClass(bodies, RawRigidBodySet);
        wasm.rawcolliderset_remove(this.ptr, handle, islands.ptr, bodies.ptr, wakeUp);
    }
    /**
    * Checks if a collider with the given integer handle exists.
    * @param {number} handle
    * @returns {boolean}
    */
    isHandleValid(handle) {
        const ret = wasm.rawcolliderset_contains(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * Applies the given JavaScript function to the integer handle of each collider managed by this collider set.
    *
    * # Parameters
    * - `f(handle)`: the function to apply to the integer handle of each collider managed by this collider set. Called as `f(handle)`.
    * @param {Function} f
    */
    forEachColliderHandle(f) {
        try {
            wasm.rawcolliderset_forEachColliderHandle(this.ptr, addBorrowedObject(f));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
}
/**
*/
export class RawContactForceEvent {

    static __wrap(ptr) {
        const obj = Object.create(RawContactForceEvent.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawcontactforceevent_free(ptr);
    }
    /**
    * The first collider involved in the contact.
    * @returns {number}
    */
    collider1() {
        const ret = wasm.rawcharactercollision_handle(this.ptr);
        return ret;
    }
    /**
    * The second collider involved in the contact.
    * @returns {number}
    */
    collider2() {
        const ret = wasm.rawcontactforceevent_collider2(this.ptr);
        return ret;
    }
    /**
    * The sum of all the forces between the two colliders.
    * @returns {RawVector}
    */
    total_force() {
        const ret = wasm.rawcontactforceevent_total_force(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * The sum of the magnitudes of each force between the two colliders.
    *
    * Note that this is **not** the same as the magnitude of `self.total_force`.
    * Here we are summing the magnitude of all the forces, instead of taking
    * the magnitude of their sum.
    * @returns {number}
    */
    total_force_magnitude() {
        const ret = wasm.rawcontactforceevent_total_force_magnitude(this.ptr);
        return ret;
    }
    /**
    * The world-space (unit) direction of the force with strongest magnitude.
    * @returns {RawVector}
    */
    max_force_direction() {
        const ret = wasm.rawcontactforceevent_max_force_direction(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * The magnitude of the largest force at a contact point of this contact pair.
    * @returns {number}
    */
    max_force_magnitude() {
        const ret = wasm.rawcontactforceevent_max_force_magnitude(this.ptr);
        return ret;
    }
}
/**
*/
export class RawContactManifold {

    static __wrap(ptr) {
        const obj = Object.create(RawContactManifold.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawcontactmanifold_free(ptr);
    }
    /**
    * @returns {RawVector}
    */
    normal() {
        const ret = wasm.rawcontactmanifold_normal(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    local_n1() {
        const ret = wasm.rawcontactmanifold_local_n1(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    local_n2() {
        const ret = wasm.rawcontactmanifold_local_n2(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    subshape1() {
        const ret = wasm.rawcontactmanifold_subshape1(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    subshape2() {
        const ret = wasm.rawcontactmanifold_subshape2(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    num_contacts() {
        const ret = wasm.rawcontactmanifold_num_contacts(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} i
    * @returns {RawVector | undefined}
    */
    contact_local_p1(i) {
        const ret = wasm.rawcontactmanifold_contact_local_p1(this.ptr, i);
        return ret === 0 ? undefined : RawVector.__wrap(ret);
    }
    /**
    * @param {number} i
    * @returns {RawVector | undefined}
    */
    contact_local_p2(i) {
        const ret = wasm.rawcontactmanifold_contact_local_p2(this.ptr, i);
        return ret === 0 ? undefined : RawVector.__wrap(ret);
    }
    /**
    * @param {number} i
    * @returns {number}
    */
    contact_dist(i) {
        const ret = wasm.rawcontactmanifold_contact_dist(this.ptr, i);
        return ret;
    }
    /**
    * @param {number} i
    * @returns {number}
    */
    contact_fid1(i) {
        const ret = wasm.rawcontactmanifold_contact_fid1(this.ptr, i);
        return ret >>> 0;
    }
    /**
    * @param {number} i
    * @returns {number}
    */
    contact_fid2(i) {
        const ret = wasm.rawcontactmanifold_contact_fid2(this.ptr, i);
        return ret >>> 0;
    }
    /**
    * @param {number} i
    * @returns {number}
    */
    contact_impulse(i) {
        const ret = wasm.rawcontactmanifold_contact_impulse(this.ptr, i);
        return ret;
    }
    /**
    * @param {number} i
    * @returns {number}
    */
    contact_tangent_impulse_x(i) {
        const ret = wasm.rawcontactmanifold_contact_tangent_impulse_x(this.ptr, i);
        return ret;
    }
    /**
    * @param {number} i
    * @returns {number}
    */
    contact_tangent_impulse_y(i) {
        const ret = wasm.rawcontactmanifold_contact_tangent_impulse_y(this.ptr, i);
        return ret;
    }
    /**
    * @returns {number}
    */
    num_solver_contacts() {
        const ret = wasm.rawcontactmanifold_num_solver_contacts(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} i
    * @returns {RawVector | undefined}
    */
    solver_contact_point(i) {
        const ret = wasm.rawcontactmanifold_solver_contact_point(this.ptr, i);
        return ret === 0 ? undefined : RawVector.__wrap(ret);
    }
    /**
    * @param {number} i
    * @returns {number}
    */
    solver_contact_dist(i) {
        const ret = wasm.rawcontactmanifold_solver_contact_dist(this.ptr, i);
        return ret;
    }
    /**
    * @param {number} i
    * @returns {number}
    */
    solver_contact_friction(i) {
        const ret = wasm.rawcontactmanifold_solver_contact_friction(this.ptr, i);
        return ret;
    }
    /**
    * @param {number} i
    * @returns {number}
    */
    solver_contact_restitution(i) {
        const ret = wasm.rawcontactmanifold_solver_contact_restitution(this.ptr, i);
        return ret;
    }
    /**
    * @param {number} i
    * @returns {RawVector}
    */
    solver_contact_tangent_velocity(i) {
        const ret = wasm.rawcontactmanifold_solver_contact_tangent_velocity(this.ptr, i);
        return RawVector.__wrap(ret);
    }
}
/**
*/
export class RawContactPair {

    static __wrap(ptr) {
        const obj = Object.create(RawContactPair.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawcontactpair_free(ptr);
    }
    /**
    * @returns {number}
    */
    collider1() {
        const ret = wasm.rawcontactpair_collider1(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    collider2() {
        const ret = wasm.rawcontactpair_collider2(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    numContactManifolds() {
        const ret = wasm.rawcontactpair_numContactManifolds(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} i
    * @returns {RawContactManifold | undefined}
    */
    contactManifold(i) {
        const ret = wasm.rawcontactpair_contactManifold(this.ptr, i);
        return ret === 0 ? undefined : RawContactManifold.__wrap(ret);
    }
}
/**
*/
export class RawDebugRenderPipeline {

    static __wrap(ptr) {
        const obj = Object.create(RawDebugRenderPipeline.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawdebugrenderpipeline_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.rawdebugrenderpipeline_new();
        return RawDebugRenderPipeline.__wrap(ret);
    }
    /**
    * @returns {Float32Array}
    */
    vertices() {
        const ret = wasm.rawdebugrenderpipeline_vertices(this.ptr);
        return takeObject(ret);
    }
    /**
    * @returns {Float32Array}
    */
    colors() {
        const ret = wasm.rawdebugrenderpipeline_colors(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {RawRigidBodySet} bodies
    * @param {RawColliderSet} colliders
    * @param {RawImpulseJointSet} impulse_joints
    * @param {RawMultibodyJointSet} multibody_joints
    * @param {RawNarrowPhase} narrow_phase
    */
    render(bodies, colliders, impulse_joints, multibody_joints, narrow_phase) {
        _assertClass(bodies, RawRigidBodySet);
        _assertClass(colliders, RawColliderSet);
        _assertClass(impulse_joints, RawImpulseJointSet);
        _assertClass(multibody_joints, RawMultibodyJointSet);
        _assertClass(narrow_phase, RawNarrowPhase);
        wasm.rawdebugrenderpipeline_render(this.ptr, bodies.ptr, colliders.ptr, impulse_joints.ptr, multibody_joints.ptr, narrow_phase.ptr);
    }
}
/**
*/
export class RawDeserializedWorld {

    static __wrap(ptr) {
        const obj = Object.create(RawDeserializedWorld.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawdeserializedworld_free(ptr);
    }
    /**
    * @returns {RawVector | undefined}
    */
    takeGravity() {
        const ret = wasm.rawdeserializedworld_takeGravity(this.ptr);
        return ret === 0 ? undefined : RawVector.__wrap(ret);
    }
    /**
    * @returns {RawIntegrationParameters | undefined}
    */
    takeIntegrationParameters() {
        const ret = wasm.rawdeserializedworld_takeIntegrationParameters(this.ptr);
        return ret === 0 ? undefined : RawIntegrationParameters.__wrap(ret);
    }
    /**
    * @returns {RawIslandManager | undefined}
    */
    takeIslandManager() {
        const ret = wasm.rawdeserializedworld_takeIslandManager(this.ptr);
        return ret === 0 ? undefined : RawIslandManager.__wrap(ret);
    }
    /**
    * @returns {RawBroadPhase | undefined}
    */
    takeBroadPhase() {
        const ret = wasm.rawdeserializedworld_takeBroadPhase(this.ptr);
        return ret === 0 ? undefined : RawBroadPhase.__wrap(ret);
    }
    /**
    * @returns {RawNarrowPhase | undefined}
    */
    takeNarrowPhase() {
        const ret = wasm.rawdeserializedworld_takeNarrowPhase(this.ptr);
        return ret === 0 ? undefined : RawNarrowPhase.__wrap(ret);
    }
    /**
    * @returns {RawRigidBodySet | undefined}
    */
    takeBodies() {
        const ret = wasm.rawdeserializedworld_takeBodies(this.ptr);
        return ret === 0 ? undefined : RawRigidBodySet.__wrap(ret);
    }
    /**
    * @returns {RawColliderSet | undefined}
    */
    takeColliders() {
        const ret = wasm.rawdeserializedworld_takeColliders(this.ptr);
        return ret === 0 ? undefined : RawColliderSet.__wrap(ret);
    }
    /**
    * @returns {RawImpulseJointSet | undefined}
    */
    takeImpulseJoints() {
        const ret = wasm.rawdeserializedworld_takeImpulseJoints(this.ptr);
        return ret === 0 ? undefined : RawImpulseJointSet.__wrap(ret);
    }
    /**
    * @returns {RawMultibodyJointSet | undefined}
    */
    takeMultibodyJoints() {
        const ret = wasm.rawdeserializedworld_takeMultibodyJoints(this.ptr);
        return ret === 0 ? undefined : RawMultibodyJointSet.__wrap(ret);
    }
}
/**
* A structure responsible for collecting events generated
* by the physics engine.
*/
export class RawEventQueue {

    static __wrap(ptr) {
        const obj = Object.create(RawEventQueue.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_raweventqueue_free(ptr);
    }
    /**
    * Creates a new event collector.
    *
    * # Parameters
    * - `autoDrain`: setting this to `true` is strongly recommended. If true, the collector will
    * be automatically drained before each `world.step(collector)`. If false, the collector will
    * keep all events in memory unless it is manually drained/cleared; this may lead to unbounded use of
    * RAM if no drain is performed.
    * @param {boolean} autoDrain
    */
    constructor(autoDrain) {
        const ret = wasm.raweventqueue_new(autoDrain);
        return RawEventQueue.__wrap(ret);
    }
    /**
    * Applies the given javascript closure on each collision event of this collector, then clear
    * the internal collision event buffer.
    *
    * # Parameters
    * - `f(handle1, handle2, started)`:  JavaScript closure applied to each collision event. The
    * closure should take three arguments: two integers representing the handles of the colliders
    * involved in the collision, and a boolean indicating if the collision started (true) or stopped
    * (false).
    * @param {Function} f
    */
    drainCollisionEvents(f) {
        try {
            wasm.raweventqueue_drainCollisionEvents(this.ptr, addBorrowedObject(f));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {Function} f
    */
    drainContactForceEvents(f) {
        try {
            wasm.raweventqueue_drainContactForceEvents(this.ptr, addBorrowedObject(f));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * Removes all events contained by this collector.
    */
    clear() {
        wasm.raweventqueue_clear(this.ptr);
    }
}
/**
*/
export class RawGenericJoint {

    static __wrap(ptr) {
        const obj = Object.create(RawGenericJoint.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawgenericjoint_free(ptr);
    }
    /**
    * Create a new joint descriptor that builds spehrical joints.
    *
    * A spherical joints allows three relative rotational degrees of freedom
    * by preventing any relative translation between the anchors of the
    * two attached rigid-bodies.
    * @param {RawVector} anchor1
    * @param {RawVector} anchor2
    * @returns {RawGenericJoint}
    */
    static spherical(anchor1, anchor2) {
        _assertClass(anchor1, RawVector);
        _assertClass(anchor2, RawVector);
        const ret = wasm.rawgenericjoint_spherical(anchor1.ptr, anchor2.ptr);
        return RawGenericJoint.__wrap(ret);
    }
    /**
    * Creates a new joint descriptor that builds a Prismatic joint.
    *
    * A prismatic joint removes all the degrees of freedom between the
    * affected bodies, except for the translation along one axis.
    *
    * Returns `None` if any of the provided axes cannot be normalized.
    * @param {RawVector} anchor1
    * @param {RawVector} anchor2
    * @param {RawVector} axis
    * @param {boolean} limitsEnabled
    * @param {number} limitsMin
    * @param {number} limitsMax
    * @returns {RawGenericJoint | undefined}
    */
    static prismatic(anchor1, anchor2, axis, limitsEnabled, limitsMin, limitsMax) {
        _assertClass(anchor1, RawVector);
        _assertClass(anchor2, RawVector);
        _assertClass(axis, RawVector);
        const ret = wasm.rawgenericjoint_prismatic(anchor1.ptr, anchor2.ptr, axis.ptr, limitsEnabled, limitsMin, limitsMax);
        return ret === 0 ? undefined : RawGenericJoint.__wrap(ret);
    }
    /**
    * Creates a new joint descriptor that builds a Fixed joint.
    *
    * A fixed joint removes all the degrees of freedom between the affected bodies.
    * @param {RawVector} anchor1
    * @param {RawRotation} axes1
    * @param {RawVector} anchor2
    * @param {RawRotation} axes2
    * @returns {RawGenericJoint}
    */
    static fixed(anchor1, axes1, anchor2, axes2) {
        _assertClass(anchor1, RawVector);
        _assertClass(axes1, RawRotation);
        _assertClass(anchor2, RawVector);
        _assertClass(axes2, RawRotation);
        const ret = wasm.rawgenericjoint_fixed(anchor1.ptr, axes1.ptr, anchor2.ptr, axes2.ptr);
        return RawGenericJoint.__wrap(ret);
    }
    /**
    * Create a new joint descriptor that builds Revolute joints.
    *
    * A revolute joint removes all degrees of freedom between the affected
    * bodies except for the rotation along one axis.
    * @param {RawVector} anchor1
    * @param {RawVector} anchor2
    * @param {RawVector} axis
    * @returns {RawGenericJoint | undefined}
    */
    static revolute(anchor1, anchor2, axis) {
        _assertClass(anchor1, RawVector);
        _assertClass(anchor2, RawVector);
        _assertClass(axis, RawVector);
        const ret = wasm.rawgenericjoint_revolute(anchor1.ptr, anchor2.ptr, axis.ptr);
        return ret === 0 ? undefined : RawGenericJoint.__wrap(ret);
    }
}
/**
*/
export class RawImpulseJointSet {

    static __wrap(ptr) {
        const obj = Object.create(RawImpulseJointSet.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawimpulsejointset_free(ptr);
    }
    /**
    * The type of this joint.
    * @param {number} handle
    * @returns {number}
    */
    jointType(handle) {
        const ret = wasm.rawimpulsejointset_jointType(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * The unique integer identifier of the first rigid-body this joint it attached to.
    * @param {number} handle
    * @returns {number}
    */
    jointBodyHandle1(handle) {
        const ret = wasm.rawimpulsejointset_jointBodyHandle1(this.ptr, handle);
        return ret;
    }
    /**
    * The unique integer identifier of the second rigid-body this joint is attached to.
    * @param {number} handle
    * @returns {number}
    */
    jointBodyHandle2(handle) {
        const ret = wasm.rawimpulsejointset_jointBodyHandle2(this.ptr, handle);
        return ret;
    }
    /**
    * The angular part of the joint’s local frame relative to the first rigid-body it is attached to.
    * @param {number} handle
    * @returns {RawRotation}
    */
    jointFrameX1(handle) {
        const ret = wasm.rawimpulsejointset_jointFrameX1(this.ptr, handle);
        return RawRotation.__wrap(ret);
    }
    /**
    * The angular part of the joint’s local frame relative to the second rigid-body it is attached to.
    * @param {number} handle
    * @returns {RawRotation}
    */
    jointFrameX2(handle) {
        const ret = wasm.rawimpulsejointset_jointFrameX2(this.ptr, handle);
        return RawRotation.__wrap(ret);
    }
    /**
    * The position of the first anchor of this joint.
    *
    * The first anchor gives the position of the points application point on the
    * local frame of the first rigid-body it is attached to.
    * @param {number} handle
    * @returns {RawVector}
    */
    jointAnchor1(handle) {
        const ret = wasm.rawimpulsejointset_jointAnchor1(this.ptr, handle);
        return RawVector.__wrap(ret);
    }
    /**
    * The position of the second anchor of this joint.
    *
    * The second anchor gives the position of the points application point on the
    * local frame of the second rigid-body it is attached to.
    * @param {number} handle
    * @returns {RawVector}
    */
    jointAnchor2(handle) {
        const ret = wasm.rawimpulsejointset_jointAnchor2(this.ptr, handle);
        return RawVector.__wrap(ret);
    }
    /**
    * Sets the position of the first local anchor
    * @param {number} handle
    * @param {RawVector} newPos
    */
    jointSetAnchor1(handle, newPos) {
        _assertClass(newPos, RawVector);
        wasm.rawimpulsejointset_jointSetAnchor1(this.ptr, handle, newPos.ptr);
    }
    /**
    * Sets the position of the second local anchor
    * @param {number} handle
    * @param {RawVector} newPos
    */
    jointSetAnchor2(handle, newPos) {
        _assertClass(newPos, RawVector);
        wasm.rawimpulsejointset_jointSetAnchor2(this.ptr, handle, newPos.ptr);
    }
    /**
    * Are contacts between the rigid-bodies attached by this joint enabled?
    * @param {number} handle
    * @returns {boolean}
    */
    jointContactsEnabled(handle) {
        const ret = wasm.rawimpulsejointset_jointContactsEnabled(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * Sets whether contacts are enabled between the rigid-bodies attached by this joint.
    * @param {number} handle
    * @param {boolean} enabled
    */
    jointSetContactsEnabled(handle, enabled) {
        wasm.rawimpulsejointset_jointSetContactsEnabled(this.ptr, handle, enabled);
    }
    /**
    * Are the limits for this joint enabled?
    * @param {number} handle
    * @param {number} axis
    * @returns {boolean}
    */
    jointLimitsEnabled(handle, axis) {
        const ret = wasm.rawimpulsejointset_jointLimitsEnabled(this.ptr, handle, axis);
        return ret !== 0;
    }
    /**
    * Return the lower limit along the given joint axis.
    * @param {number} handle
    * @param {number} axis
    * @returns {number}
    */
    jointLimitsMin(handle, axis) {
        const ret = wasm.rawimpulsejointset_jointLimitsMin(this.ptr, handle, axis);
        return ret;
    }
    /**
    * If this is a prismatic joint, returns its upper limit.
    * @param {number} handle
    * @param {number} axis
    * @returns {number}
    */
    jointLimitsMax(handle, axis) {
        const ret = wasm.rawimpulsejointset_jointLimitsMax(this.ptr, handle, axis);
        return ret;
    }
    /**
    * Enables and sets the joint limits
    * @param {number} handle
    * @param {number} axis
    * @param {number} min
    * @param {number} max
    */
    jointSetLimits(handle, axis, min, max) {
        wasm.rawimpulsejointset_jointSetLimits(this.ptr, handle, axis, min, max);
    }
    /**
    * @param {number} handle
    * @param {number} axis
    * @param {number} model
    */
    jointConfigureMotorModel(handle, axis, model) {
        wasm.rawimpulsejointset_jointConfigureMotorModel(this.ptr, handle, axis, model);
    }
    /**
    * @param {number} handle
    * @param {number} axis
    * @param {number} targetVel
    * @param {number} factor
    */
    jointConfigureMotorVelocity(handle, axis, targetVel, factor) {
        wasm.rawimpulsejointset_jointConfigureMotorVelocity(this.ptr, handle, axis, targetVel, factor);
    }
    /**
    * @param {number} handle
    * @param {number} axis
    * @param {number} targetPos
    * @param {number} stiffness
    * @param {number} damping
    */
    jointConfigureMotorPosition(handle, axis, targetPos, stiffness, damping) {
        wasm.rawimpulsejointset_jointConfigureMotorPosition(this.ptr, handle, axis, targetPos, stiffness, damping);
    }
    /**
    * @param {number} handle
    * @param {number} axis
    * @param {number} targetPos
    * @param {number} targetVel
    * @param {number} stiffness
    * @param {number} damping
    */
    jointConfigureMotor(handle, axis, targetPos, targetVel, stiffness, damping) {
        wasm.rawimpulsejointset_jointConfigureMotor(this.ptr, handle, axis, targetPos, targetVel, stiffness, damping);
    }
    /**
    */
    constructor() {
        const ret = wasm.rawimpulsejointset_new();
        return RawImpulseJointSet.__wrap(ret);
    }
    /**
    * @param {RawGenericJoint} params
    * @param {number} parent1
    * @param {number} parent2
    * @param {boolean} wake_up
    * @returns {number}
    */
    createJoint(params, parent1, parent2, wake_up) {
        _assertClass(params, RawGenericJoint);
        const ret = wasm.rawimpulsejointset_createJoint(this.ptr, params.ptr, parent1, parent2, wake_up);
        return ret;
    }
    /**
    * @param {number} handle
    * @param {boolean} wakeUp
    */
    remove(handle, wakeUp) {
        wasm.rawimpulsejointset_remove(this.ptr, handle, wakeUp);
    }
    /**
    * @returns {number}
    */
    len() {
        const ret = wasm.rawimpulsejointset_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} handle
    * @returns {boolean}
    */
    contains(handle) {
        const ret = wasm.rawimpulsejointset_contains(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * Applies the given JavaScript function to the integer handle of each joint managed by this physics world.
    *
    * # Parameters
    * - `f(handle)`: the function to apply to the integer handle of each joint managed by this set. Called as `f(collider)`.
    * @param {Function} f
    */
    forEachJointHandle(f) {
        try {
            wasm.rawimpulsejointset_forEachJointHandle(this.ptr, addBorrowedObject(f));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * Applies the given JavaScript function to the integer handle of each joint attached to the given rigid-body.
    *
    * # Parameters
    * - `f(handle)`: the function to apply to the integer handle of each joint attached to the rigid-body. Called as `f(collider)`.
    * @param {number} body
    * @param {Function} f
    */
    forEachJointAttachedToRigidBody(body, f) {
        try {
            wasm.rawimpulsejointset_forEachJointAttachedToRigidBody(this.ptr, body, addBorrowedObject(f));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
}
/**
*/
export class RawIntegrationParameters {

    static __wrap(ptr) {
        const obj = Object.create(RawIntegrationParameters.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawintegrationparameters_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.rawintegrationparameters_new();
        return RawIntegrationParameters.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    get dt() {
        const ret = wasm.rawintegrationparameters_dt(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get erp() {
        const ret = wasm.rawcharactercollision_toi(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get allowedLinearError() {
        const ret = wasm.rawintegrationparameters_allowedLinearError(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get predictionDistance() {
        const ret = wasm.rawintegrationparameters_predictionDistance(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    get maxVelocityIterations() {
        const ret = wasm.rawintegrationparameters_maxVelocityIterations(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    get maxVelocityFrictionIterations() {
        const ret = wasm.rawintegrationparameters_maxVelocityFrictionIterations(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    get maxStabilizationIterations() {
        const ret = wasm.rawintegrationparameters_maxStabilizationIterations(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    get minIslandSize() {
        const ret = wasm.rawintegrationparameters_minIslandSize(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    get maxCcdSubsteps() {
        const ret = wasm.rawintegrationparameters_maxCcdSubsteps(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} value
    */
    set dt(value) {
        wasm.rawintegrationparameters_set_dt(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set erp(value) {
        wasm.rawintegrationparameters_set_erp(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set allowedLinearError(value) {
        wasm.rawintegrationparameters_set_allowedLinearError(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set predictionDistance(value) {
        wasm.rawintegrationparameters_set_predictionDistance(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set maxVelocityIterations(value) {
        wasm.rawintegrationparameters_set_maxVelocityIterations(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set maxVelocityFrictionIterations(value) {
        wasm.rawintegrationparameters_set_maxVelocityFrictionIterations(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set maxStabilizationIterations(value) {
        wasm.rawintegrationparameters_set_maxStabilizationIterations(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set minIslandSize(value) {
        wasm.rawintegrationparameters_set_minIslandSize(this.ptr, value);
    }
    /**
    * @param {number} value
    */
    set maxCcdSubsteps(value) {
        wasm.rawintegrationparameters_set_maxCcdSubsteps(this.ptr, value);
    }
}
/**
*/
export class RawIslandManager {

    static __wrap(ptr) {
        const obj = Object.create(RawIslandManager.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawislandmanager_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.rawislandmanager_new();
        return RawIslandManager.__wrap(ret);
    }
    /**
    * Applies the given JavaScript function to the integer handle of each active rigid-body
    * managed by this island manager.
    *
    * After a short time of inactivity, a rigid-body is automatically deactivated ("asleep") by
    * the physics engine in order to save computational power. A sleeping rigid-body never moves
    * unless it is moved manually by the user.
    *
    * # Parameters
    * - `f(handle)`: the function to apply to the integer handle of each active rigid-body managed by this
    *   set. Called as `f(collider)`.
    * @param {Function} f
    */
    forEachActiveRigidBodyHandle(f) {
        try {
            wasm.rawislandmanager_forEachActiveRigidBodyHandle(this.ptr, addBorrowedObject(f));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
}
/**
*/
export class RawKinematicCharacterController {

    static __wrap(ptr) {
        const obj = Object.create(RawKinematicCharacterController.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawkinematiccharactercontroller_free(ptr);
    }
    /**
    * @param {number} offset
    */
    constructor(offset) {
        const ret = wasm.rawkinematiccharactercontroller_new(offset);
        return RawKinematicCharacterController.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    up() {
        const ret = wasm.rawkinematiccharactercontroller_up(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @param {RawVector} vector
    */
    setUp(vector) {
        _assertClass(vector, RawVector);
        wasm.rawkinematiccharactercontroller_setUp(this.ptr, vector.ptr);
    }
    /**
    * @returns {number}
    */
    offset() {
        const ret = wasm.rawkinematiccharactercontroller_offset(this.ptr);
        return ret;
    }
    /**
    * @param {number} value
    */
    setOffset(value) {
        wasm.rawkinematiccharactercontroller_setOffset(this.ptr, value);
    }
    /**
    * @returns {boolean}
    */
    slideEnabled() {
        const ret = wasm.rawkinematiccharactercontroller_slideEnabled(this.ptr);
        return ret !== 0;
    }
    /**
    * @param {boolean} enabled
    */
    setSlideEnabled(enabled) {
        wasm.rawkinematiccharactercontroller_setSlideEnabled(this.ptr, enabled);
    }
    /**
    * @returns {number | undefined}
    */
    autostepMaxHeight() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.rawkinematiccharactercontroller_autostepMaxHeight(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getFloat32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {number | undefined}
    */
    autostepMinWidth() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.rawkinematiccharactercontroller_autostepMinWidth(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getFloat32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {boolean | undefined}
    */
    autostepIncludesDynamicBodies() {
        const ret = wasm.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(this.ptr);
        return ret === 0xFFFFFF ? undefined : ret !== 0;
    }
    /**
    * @returns {boolean}
    */
    autostepEnabled() {
        const ret = wasm.rawkinematiccharactercontroller_autostepEnabled(this.ptr);
        return ret !== 0;
    }
    /**
    * @param {number} maxHeight
    * @param {number} minWidth
    * @param {boolean} includeDynamicBodies
    */
    enableAutostep(maxHeight, minWidth, includeDynamicBodies) {
        wasm.rawkinematiccharactercontroller_enableAutostep(this.ptr, maxHeight, minWidth, includeDynamicBodies);
    }
    /**
    */
    disableAutostep() {
        wasm.rawkinematiccharactercontroller_disableAutostep(this.ptr);
    }
    /**
    * @returns {number}
    */
    maxSlopeClimbAngle() {
        const ret = wasm.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.ptr);
        return ret;
    }
    /**
    * @param {number} angle
    */
    setMaxSlopeClimbAngle(angle) {
        wasm.rawkinematiccharactercontroller_setMaxSlopeClimbAngle(this.ptr, angle);
    }
    /**
    * @returns {number}
    */
    minSlopeSlideAngle() {
        const ret = wasm.rawkinematiccharactercontroller_minSlopeSlideAngle(this.ptr);
        return ret;
    }
    /**
    * @param {number} angle
    */
    setMinSlopeSlideAngle(angle) {
        wasm.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.ptr, angle);
    }
    /**
    * @returns {number | undefined}
    */
    snapToGroundDistance() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.rawkinematiccharactercontroller_snapToGroundDistance(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getFloat32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {number} distance
    */
    enableSnapToGround(distance) {
        wasm.rawkinematiccharactercontroller_enableSnapToGround(this.ptr, distance);
    }
    /**
    */
    disableSnapToGround() {
        wasm.rawkinematiccharactercontroller_disableSnapToGround(this.ptr);
    }
    /**
    * @returns {boolean}
    */
    snapToGroundEnabled() {
        const ret = wasm.rawkinematiccharactercontroller_snapToGroundEnabled(this.ptr);
        return ret !== 0;
    }
    /**
    * @param {number} dt
    * @param {RawRigidBodySet} bodies
    * @param {RawColliderSet} colliders
    * @param {RawQueryPipeline} queries
    * @param {number} collider_handle
    * @param {RawVector} desired_translation
    * @param {boolean} apply_impulses_to_dynamic_bodies
    * @param {number | undefined} character_mass
    * @param {number} filter_flags
    * @param {number | undefined} filter_groups
    * @param {Function} filter_predicate
    */
    computeColliderMovement(dt, bodies, colliders, queries, collider_handle, desired_translation, apply_impulses_to_dynamic_bodies, character_mass, filter_flags, filter_groups, filter_predicate) {
        try {
            _assertClass(bodies, RawRigidBodySet);
            _assertClass(colliders, RawColliderSet);
            _assertClass(queries, RawQueryPipeline);
            _assertClass(desired_translation, RawVector);
            wasm.rawkinematiccharactercontroller_computeColliderMovement(this.ptr, dt, bodies.ptr, colliders.ptr, queries.ptr, collider_handle, desired_translation.ptr, apply_impulses_to_dynamic_bodies, !isLikeNone(character_mass), isLikeNone(character_mass) ? 0 : character_mass, filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, addBorrowedObject(filter_predicate));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @returns {RawVector}
    */
    computedMovement() {
        const ret = wasm.rawkinematiccharactercontroller_computedMovement(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {boolean}
    */
    computedGrounded() {
        const ret = wasm.rawkinematiccharactercontroller_computedGrounded(this.ptr);
        return ret !== 0;
    }
    /**
    * @returns {number}
    */
    numComputedCollisions() {
        const ret = wasm.rawkinematiccharactercontroller_numComputedCollisions(this.ptr);
        return ret >>> 0;
    }
    /**
    * @param {number} i
    * @param {RawCharacterCollision} collision
    * @returns {boolean}
    */
    computedCollision(i, collision) {
        _assertClass(collision, RawCharacterCollision);
        const ret = wasm.rawkinematiccharactercontroller_computedCollision(this.ptr, i, collision.ptr);
        return ret !== 0;
    }
}
/**
*/
export class RawMultibodyJointSet {

    static __wrap(ptr) {
        const obj = Object.create(RawMultibodyJointSet.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawmultibodyjointset_free(ptr);
    }
    /**
    * The type of this joint.
    * @param {number} handle
    * @returns {number}
    */
    jointType(handle) {
        const ret = wasm.rawmultibodyjointset_jointType(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * The angular part of the joint’s local frame relative to the first rigid-body it is attached to.
    * @param {number} handle
    * @returns {RawRotation}
    */
    jointFrameX1(handle) {
        const ret = wasm.rawmultibodyjointset_jointFrameX1(this.ptr, handle);
        return RawRotation.__wrap(ret);
    }
    /**
    * The angular part of the joint’s local frame relative to the second rigid-body it is attached to.
    * @param {number} handle
    * @returns {RawRotation}
    */
    jointFrameX2(handle) {
        const ret = wasm.rawmultibodyjointset_jointFrameX2(this.ptr, handle);
        return RawRotation.__wrap(ret);
    }
    /**
    * The position of the first anchor of this joint.
    *
    * The first anchor gives the position of the points application point on the
    * local frame of the first rigid-body it is attached to.
    * @param {number} handle
    * @returns {RawVector}
    */
    jointAnchor1(handle) {
        const ret = wasm.rawmultibodyjointset_jointAnchor1(this.ptr, handle);
        return RawVector.__wrap(ret);
    }
    /**
    * The position of the second anchor of this joint.
    *
    * The second anchor gives the position of the points application point on the
    * local frame of the second rigid-body it is attached to.
    * @param {number} handle
    * @returns {RawVector}
    */
    jointAnchor2(handle) {
        const ret = wasm.rawmultibodyjointset_jointAnchor2(this.ptr, handle);
        return RawVector.__wrap(ret);
    }
    /**
    * Are contacts between the rigid-bodies attached by this joint enabled?
    * @param {number} handle
    * @returns {boolean}
    */
    jointContactsEnabled(handle) {
        const ret = wasm.rawmultibodyjointset_jointContactsEnabled(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * Sets whether contacts are enabled between the rigid-bodies attached by this joint.
    * @param {number} handle
    * @param {boolean} enabled
    */
    jointSetContactsEnabled(handle, enabled) {
        wasm.rawmultibodyjointset_jointSetContactsEnabled(this.ptr, handle, enabled);
    }
    /**
    * Are the limits for this joint enabled?
    * @param {number} handle
    * @param {number} axis
    * @returns {boolean}
    */
    jointLimitsEnabled(handle, axis) {
        const ret = wasm.rawmultibodyjointset_jointLimitsEnabled(this.ptr, handle, axis);
        return ret !== 0;
    }
    /**
    * Return the lower limit along the given joint axis.
    * @param {number} handle
    * @param {number} axis
    * @returns {number}
    */
    jointLimitsMin(handle, axis) {
        const ret = wasm.rawmultibodyjointset_jointLimitsMin(this.ptr, handle, axis);
        return ret;
    }
    /**
    * If this is a prismatic joint, returns its upper limit.
    * @param {number} handle
    * @param {number} axis
    * @returns {number}
    */
    jointLimitsMax(handle, axis) {
        const ret = wasm.rawmultibodyjointset_jointLimitsMax(this.ptr, handle, axis);
        return ret;
    }
    /**
    */
    constructor() {
        const ret = wasm.rawmultibodyjointset_new();
        return RawMultibodyJointSet.__wrap(ret);
    }
    /**
    * @param {RawGenericJoint} params
    * @param {number} parent1
    * @param {number} parent2
    * @param {boolean} wakeUp
    * @returns {number}
    */
    createJoint(params, parent1, parent2, wakeUp) {
        _assertClass(params, RawGenericJoint);
        const ret = wasm.rawmultibodyjointset_createJoint(this.ptr, params.ptr, parent1, parent2, wakeUp);
        return ret;
    }
    /**
    * @param {number} handle
    * @param {boolean} wakeUp
    */
    remove(handle, wakeUp) {
        wasm.rawmultibodyjointset_remove(this.ptr, handle, wakeUp);
    }
    /**
    * @param {number} handle
    * @returns {boolean}
    */
    contains(handle) {
        const ret = wasm.rawmultibodyjointset_contains(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * Applies the given JavaScript function to the integer handle of each joint managed by this physics world.
    *
    * # Parameters
    * - `f(handle)`: the function to apply to the integer handle of each joint managed by this set. Called as `f(collider)`.
    * @param {Function} f
    */
    forEachJointHandle(f) {
        try {
            wasm.rawmultibodyjointset_forEachJointHandle(this.ptr, addBorrowedObject(f));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * Applies the given JavaScript function to the integer handle of each joint attached to the given rigid-body.
    *
    * # Parameters
    * - `f(handle)`: the function to apply to the integer handle of each joint attached to the rigid-body. Called as `f(collider)`.
    * @param {number} body
    * @param {Function} f
    */
    forEachJointAttachedToRigidBody(body, f) {
        try {
            wasm.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.ptr, body, addBorrowedObject(f));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
}
/**
*/
export class RawNarrowPhase {

    static __wrap(ptr) {
        const obj = Object.create(RawNarrowPhase.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawnarrowphase_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.rawnarrowphase_new();
        return RawNarrowPhase.__wrap(ret);
    }
    /**
    * @param {number} handle1
    * @param {Function} f
    */
    contacts_with(handle1, f) {
        wasm.rawnarrowphase_contacts_with(this.ptr, handle1, addHeapObject(f));
    }
    /**
    * @param {number} handle1
    * @param {number} handle2
    * @returns {RawContactPair | undefined}
    */
    contact_pair(handle1, handle2) {
        const ret = wasm.rawnarrowphase_contact_pair(this.ptr, handle1, handle2);
        return ret === 0 ? undefined : RawContactPair.__wrap(ret);
    }
    /**
    * @param {number} handle1
    * @param {Function} f
    */
    intersections_with(handle1, f) {
        wasm.rawnarrowphase_intersections_with(this.ptr, handle1, addHeapObject(f));
    }
    /**
    * @param {number} handle1
    * @param {number} handle2
    * @returns {boolean}
    */
    intersection_pair(handle1, handle2) {
        const ret = wasm.rawnarrowphase_intersection_pair(this.ptr, handle1, handle2);
        return ret !== 0;
    }
}
/**
*/
export class RawPhysicsPipeline {

    static __wrap(ptr) {
        const obj = Object.create(RawPhysicsPipeline.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawphysicspipeline_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.rawphysicspipeline_new();
        return RawPhysicsPipeline.__wrap(ret);
    }
    /**
    * @param {RawVector} gravity
    * @param {RawIntegrationParameters} integrationParameters
    * @param {RawIslandManager} islands
    * @param {RawBroadPhase} broadPhase
    * @param {RawNarrowPhase} narrowPhase
    * @param {RawRigidBodySet} bodies
    * @param {RawColliderSet} colliders
    * @param {RawImpulseJointSet} joints
    * @param {RawMultibodyJointSet} articulations
    * @param {RawCCDSolver} ccd_solver
    */
    step(gravity, integrationParameters, islands, broadPhase, narrowPhase, bodies, colliders, joints, articulations, ccd_solver) {
        _assertClass(gravity, RawVector);
        _assertClass(integrationParameters, RawIntegrationParameters);
        _assertClass(islands, RawIslandManager);
        _assertClass(broadPhase, RawBroadPhase);
        _assertClass(narrowPhase, RawNarrowPhase);
        _assertClass(bodies, RawRigidBodySet);
        _assertClass(colliders, RawColliderSet);
        _assertClass(joints, RawImpulseJointSet);
        _assertClass(articulations, RawMultibodyJointSet);
        _assertClass(ccd_solver, RawCCDSolver);
        wasm.rawphysicspipeline_step(this.ptr, gravity.ptr, integrationParameters.ptr, islands.ptr, broadPhase.ptr, narrowPhase.ptr, bodies.ptr, colliders.ptr, joints.ptr, articulations.ptr, ccd_solver.ptr);
    }
    /**
    * @param {RawVector} gravity
    * @param {RawIntegrationParameters} integrationParameters
    * @param {RawIslandManager} islands
    * @param {RawBroadPhase} broadPhase
    * @param {RawNarrowPhase} narrowPhase
    * @param {RawRigidBodySet} bodies
    * @param {RawColliderSet} colliders
    * @param {RawImpulseJointSet} joints
    * @param {RawMultibodyJointSet} articulations
    * @param {RawCCDSolver} ccd_solver
    * @param {RawEventQueue} eventQueue
    * @param {object} hookObject
    * @param {Function} hookFilterContactPair
    * @param {Function} hookFilterIntersectionPair
    */
    stepWithEvents(gravity, integrationParameters, islands, broadPhase, narrowPhase, bodies, colliders, joints, articulations, ccd_solver, eventQueue, hookObject, hookFilterContactPair, hookFilterIntersectionPair) {
        _assertClass(gravity, RawVector);
        _assertClass(integrationParameters, RawIntegrationParameters);
        _assertClass(islands, RawIslandManager);
        _assertClass(broadPhase, RawBroadPhase);
        _assertClass(narrowPhase, RawNarrowPhase);
        _assertClass(bodies, RawRigidBodySet);
        _assertClass(colliders, RawColliderSet);
        _assertClass(joints, RawImpulseJointSet);
        _assertClass(articulations, RawMultibodyJointSet);
        _assertClass(ccd_solver, RawCCDSolver);
        _assertClass(eventQueue, RawEventQueue);
        wasm.rawphysicspipeline_stepWithEvents(this.ptr, gravity.ptr, integrationParameters.ptr, islands.ptr, broadPhase.ptr, narrowPhase.ptr, bodies.ptr, colliders.ptr, joints.ptr, articulations.ptr, ccd_solver.ptr, eventQueue.ptr, addHeapObject(hookObject), addHeapObject(hookFilterContactPair), addHeapObject(hookFilterIntersectionPair));
    }
}
/**
*/
export class RawPointColliderProjection {

    static __wrap(ptr) {
        const obj = Object.create(RawPointColliderProjection.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawpointcolliderprojection_free(ptr);
    }
    /**
    * @returns {number}
    */
    colliderHandle() {
        const ret = wasm.rawpointcolliderprojection_colliderHandle(this.ptr);
        return ret;
    }
    /**
    * @returns {RawVector}
    */
    point() {
        const ret = wasm.rawkinematiccharactercontroller_computedMovement(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {boolean}
    */
    isInside() {
        const ret = wasm.rawkinematiccharactercontroller_computedGrounded(this.ptr);
        return ret !== 0;
    }
    /**
    * @returns {number}
    */
    featureType() {
        const ret = wasm.rawpointcolliderprojection_featureType(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number | undefined}
    */
    featureId() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.rawpointcolliderprojection_featureId(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1 >>> 0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class RawPointProjection {

    static __wrap(ptr) {
        const obj = Object.create(RawPointProjection.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawpointprojection_free(ptr);
    }
    /**
    * @returns {RawVector}
    */
    point() {
        const ret = wasm.rawkinematiccharactercontroller_computedMovement(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {boolean}
    */
    isInside() {
        const ret = wasm.rawkinematiccharactercontroller_computedGrounded(this.ptr);
        return ret !== 0;
    }
}
/**
*/
export class RawQueryPipeline {

    static __wrap(ptr) {
        const obj = Object.create(RawQueryPipeline.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawquerypipeline_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.rawquerypipeline_new();
        return RawQueryPipeline.__wrap(ret);
    }
    /**
    * @param {RawRigidBodySet} bodies
    * @param {RawColliderSet} colliders
    */
    update(bodies, colliders) {
        _assertClass(bodies, RawRigidBodySet);
        _assertClass(colliders, RawColliderSet);
        wasm.rawquerypipeline_update(this.ptr, bodies.ptr, colliders.ptr);
    }
    /**
    * @param {RawRigidBodySet} bodies
    * @param {RawColliderSet} colliders
    * @param {RawVector} rayOrig
    * @param {RawVector} rayDir
    * @param {number} maxToi
    * @param {boolean} solid
    * @param {number} filter_flags
    * @param {number | undefined} filter_groups
    * @param {number | undefined} filter_exclude_collider
    * @param {number | undefined} filter_exclude_rigid_body
    * @param {Function} filter_predicate
    * @returns {RawRayColliderToi | undefined}
    */
    castRay(bodies, colliders, rayOrig, rayDir, maxToi, solid, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
        try {
            _assertClass(bodies, RawRigidBodySet);
            _assertClass(colliders, RawColliderSet);
            _assertClass(rayOrig, RawVector);
            _assertClass(rayDir, RawVector);
            const ret = wasm.rawquerypipeline_castRay(this.ptr, bodies.ptr, colliders.ptr, rayOrig.ptr, rayDir.ptr, maxToi, solid, filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
            return ret === 0 ? undefined : RawRayColliderToi.__wrap(ret);
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {RawRigidBodySet} bodies
    * @param {RawColliderSet} colliders
    * @param {RawVector} rayOrig
    * @param {RawVector} rayDir
    * @param {number} maxToi
    * @param {boolean} solid
    * @param {number} filter_flags
    * @param {number | undefined} filter_groups
    * @param {number | undefined} filter_exclude_collider
    * @param {number | undefined} filter_exclude_rigid_body
    * @param {Function} filter_predicate
    * @returns {RawRayColliderIntersection | undefined}
    */
    castRayAndGetNormal(bodies, colliders, rayOrig, rayDir, maxToi, solid, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
        try {
            _assertClass(bodies, RawRigidBodySet);
            _assertClass(colliders, RawColliderSet);
            _assertClass(rayOrig, RawVector);
            _assertClass(rayDir, RawVector);
            const ret = wasm.rawquerypipeline_castRayAndGetNormal(this.ptr, bodies.ptr, colliders.ptr, rayOrig.ptr, rayDir.ptr, maxToi, solid, filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
            return ret === 0 ? undefined : RawRayColliderIntersection.__wrap(ret);
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {RawRigidBodySet} bodies
    * @param {RawColliderSet} colliders
    * @param {RawVector} rayOrig
    * @param {RawVector} rayDir
    * @param {number} maxToi
    * @param {boolean} solid
    * @param {Function} callback
    * @param {number} filter_flags
    * @param {number | undefined} filter_groups
    * @param {number | undefined} filter_exclude_collider
    * @param {number | undefined} filter_exclude_rigid_body
    * @param {Function} filter_predicate
    */
    intersectionsWithRay(bodies, colliders, rayOrig, rayDir, maxToi, solid, callback, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
        try {
            _assertClass(bodies, RawRigidBodySet);
            _assertClass(colliders, RawColliderSet);
            _assertClass(rayOrig, RawVector);
            _assertClass(rayDir, RawVector);
            wasm.rawquerypipeline_intersectionsWithRay(this.ptr, bodies.ptr, colliders.ptr, rayOrig.ptr, rayDir.ptr, maxToi, solid, addBorrowedObject(callback), filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
        } finally {
            heap[stack_pointer++] = undefined;
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {RawRigidBodySet} bodies
    * @param {RawColliderSet} colliders
    * @param {RawVector} shapePos
    * @param {RawRotation} shapeRot
    * @param {RawShape} shape
    * @param {number} filter_flags
    * @param {number | undefined} filter_groups
    * @param {number | undefined} filter_exclude_collider
    * @param {number | undefined} filter_exclude_rigid_body
    * @param {Function} filter_predicate
    * @returns {number | undefined}
    */
    intersectionWithShape(bodies, colliders, shapePos, shapeRot, shape, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertClass(bodies, RawRigidBodySet);
            _assertClass(colliders, RawColliderSet);
            _assertClass(shapePos, RawVector);
            _assertClass(shapeRot, RawRotation);
            _assertClass(shape, RawShape);
            wasm.rawquerypipeline_intersectionWithShape(retptr, this.ptr, bodies.ptr, colliders.ptr, shapePos.ptr, shapeRot.ptr, shape.ptr, filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r2 = getFloat64Memory0()[retptr / 8 + 1];
            return r0 === 0 ? undefined : r2;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {RawRigidBodySet} bodies
    * @param {RawColliderSet} colliders
    * @param {RawVector} point
    * @param {boolean} solid
    * @param {number} filter_flags
    * @param {number | undefined} filter_groups
    * @param {number | undefined} filter_exclude_collider
    * @param {number | undefined} filter_exclude_rigid_body
    * @param {Function} filter_predicate
    * @returns {RawPointColliderProjection | undefined}
    */
    projectPoint(bodies, colliders, point, solid, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
        try {
            _assertClass(bodies, RawRigidBodySet);
            _assertClass(colliders, RawColliderSet);
            _assertClass(point, RawVector);
            const ret = wasm.rawquerypipeline_projectPoint(this.ptr, bodies.ptr, colliders.ptr, point.ptr, solid, filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
            return ret === 0 ? undefined : RawPointColliderProjection.__wrap(ret);
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {RawRigidBodySet} bodies
    * @param {RawColliderSet} colliders
    * @param {RawVector} point
    * @param {number} filter_flags
    * @param {number | undefined} filter_groups
    * @param {number | undefined} filter_exclude_collider
    * @param {number | undefined} filter_exclude_rigid_body
    * @param {Function} filter_predicate
    * @returns {RawPointColliderProjection | undefined}
    */
    projectPointAndGetFeature(bodies, colliders, point, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
        try {
            _assertClass(bodies, RawRigidBodySet);
            _assertClass(colliders, RawColliderSet);
            _assertClass(point, RawVector);
            const ret = wasm.rawquerypipeline_projectPointAndGetFeature(this.ptr, bodies.ptr, colliders.ptr, point.ptr, filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
            return ret === 0 ? undefined : RawPointColliderProjection.__wrap(ret);
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {RawRigidBodySet} bodies
    * @param {RawColliderSet} colliders
    * @param {RawVector} point
    * @param {Function} callback
    * @param {number} filter_flags
    * @param {number | undefined} filter_groups
    * @param {number | undefined} filter_exclude_collider
    * @param {number | undefined} filter_exclude_rigid_body
    * @param {Function} filter_predicate
    */
    intersectionsWithPoint(bodies, colliders, point, callback, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
        try {
            _assertClass(bodies, RawRigidBodySet);
            _assertClass(colliders, RawColliderSet);
            _assertClass(point, RawVector);
            wasm.rawquerypipeline_intersectionsWithPoint(this.ptr, bodies.ptr, colliders.ptr, point.ptr, addBorrowedObject(callback), filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
        } finally {
            heap[stack_pointer++] = undefined;
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {RawRigidBodySet} bodies
    * @param {RawColliderSet} colliders
    * @param {RawVector} shapePos
    * @param {RawRotation} shapeRot
    * @param {RawVector} shapeVel
    * @param {RawShape} shape
    * @param {number} maxToi
    * @param {boolean} stop_at_penetration
    * @param {number} filter_flags
    * @param {number | undefined} filter_groups
    * @param {number | undefined} filter_exclude_collider
    * @param {number | undefined} filter_exclude_rigid_body
    * @param {Function} filter_predicate
    * @returns {RawShapeColliderTOI | undefined}
    */
    castShape(bodies, colliders, shapePos, shapeRot, shapeVel, shape, maxToi, stop_at_penetration, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
        try {
            _assertClass(bodies, RawRigidBodySet);
            _assertClass(colliders, RawColliderSet);
            _assertClass(shapePos, RawVector);
            _assertClass(shapeRot, RawRotation);
            _assertClass(shapeVel, RawVector);
            _assertClass(shape, RawShape);
            const ret = wasm.rawquerypipeline_castShape(this.ptr, bodies.ptr, colliders.ptr, shapePos.ptr, shapeRot.ptr, shapeVel.ptr, shape.ptr, maxToi, stop_at_penetration, filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
            return ret === 0 ? undefined : RawShapeColliderTOI.__wrap(ret);
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {RawRigidBodySet} bodies
    * @param {RawColliderSet} colliders
    * @param {RawVector} shapePos
    * @param {RawRotation} shapeRot
    * @param {RawShape} shape
    * @param {Function} callback
    * @param {number} filter_flags
    * @param {number | undefined} filter_groups
    * @param {number | undefined} filter_exclude_collider
    * @param {number | undefined} filter_exclude_rigid_body
    * @param {Function} filter_predicate
    */
    intersectionsWithShape(bodies, colliders, shapePos, shapeRot, shape, callback, filter_flags, filter_groups, filter_exclude_collider, filter_exclude_rigid_body, filter_predicate) {
        try {
            _assertClass(bodies, RawRigidBodySet);
            _assertClass(colliders, RawColliderSet);
            _assertClass(shapePos, RawVector);
            _assertClass(shapeRot, RawRotation);
            _assertClass(shape, RawShape);
            wasm.rawquerypipeline_intersectionsWithShape(this.ptr, bodies.ptr, colliders.ptr, shapePos.ptr, shapeRot.ptr, shape.ptr, addBorrowedObject(callback), filter_flags, !isLikeNone(filter_groups), isLikeNone(filter_groups) ? 0 : filter_groups, !isLikeNone(filter_exclude_collider), isLikeNone(filter_exclude_collider) ? 0 : filter_exclude_collider, !isLikeNone(filter_exclude_rigid_body), isLikeNone(filter_exclude_rigid_body) ? 0 : filter_exclude_rigid_body, addBorrowedObject(filter_predicate));
        } finally {
            heap[stack_pointer++] = undefined;
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {RawVector} aabbCenter
    * @param {RawVector} aabbHalfExtents
    * @param {Function} callback
    */
    collidersWithAabbIntersectingAabb(aabbCenter, aabbHalfExtents, callback) {
        try {
            _assertClass(aabbCenter, RawVector);
            _assertClass(aabbHalfExtents, RawVector);
            wasm.rawquerypipeline_collidersWithAabbIntersectingAabb(this.ptr, aabbCenter.ptr, aabbHalfExtents.ptr, addBorrowedObject(callback));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
}
/**
*/
export class RawRayColliderIntersection {

    static __wrap(ptr) {
        const obj = Object.create(RawRayColliderIntersection.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawraycolliderintersection_free(ptr);
    }
    /**
    * @returns {number}
    */
    colliderHandle() {
        const ret = wasm.rawcharactercollision_handle(this.ptr);
        return ret;
    }
    /**
    * @returns {RawVector}
    */
    normal() {
        const ret = wasm.rawraycolliderintersection_normal(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    toi() {
        const ret = wasm.rawraycolliderintersection_toi(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    featureType() {
        const ret = wasm.rawraycolliderintersection_featureType(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number | undefined}
    */
    featureId() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.rawraycolliderintersection_featureId(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1 >>> 0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class RawRayColliderToi {

    static __wrap(ptr) {
        const obj = Object.create(RawRayColliderToi.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawraycollidertoi_free(ptr);
    }
    /**
    * @returns {number}
    */
    colliderHandle() {
        const ret = wasm.rawcharactercollision_handle(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    toi() {
        const ret = wasm.rawcharactercollision_toi(this.ptr);
        return ret;
    }
}
/**
*/
export class RawRayIntersection {

    static __wrap(ptr) {
        const obj = Object.create(RawRayIntersection.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawrayintersection_free(ptr);
    }
    /**
    * @returns {RawVector}
    */
    normal() {
        const ret = wasm.rawcharactercollision_worldWitness1(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {number}
    */
    toi() {
        const ret = wasm.rawcharactercollision_toi(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    featureType() {
        const ret = wasm.rawrayintersection_featureType(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number | undefined}
    */
    featureId() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.rawrayintersection_featureId(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1 >>> 0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
/**
*/
export class RawRigidBodySet {

    static __wrap(ptr) {
        const obj = Object.create(RawRigidBodySet.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawrigidbodyset_free(ptr);
    }
    /**
    * The world-space translation of this rigid-body.
    * @param {number} handle
    * @returns {RawVector}
    */
    rbTranslation(handle) {
        const ret = wasm.rawrigidbodyset_rbTranslation(this.ptr, handle);
        return RawVector.__wrap(ret);
    }
    /**
    * The world-space orientation of this rigid-body.
    * @param {number} handle
    * @returns {RawRotation}
    */
    rbRotation(handle) {
        const ret = wasm.rawrigidbodyset_rbRotation(this.ptr, handle);
        return RawRotation.__wrap(ret);
    }
    /**
    * Put the given rigid-body to sleep.
    * @param {number} handle
    */
    rbSleep(handle) {
        wasm.rawrigidbodyset_rbSleep(this.ptr, handle);
    }
    /**
    * Is this rigid-body sleeping?
    * @param {number} handle
    * @returns {boolean}
    */
    rbIsSleeping(handle) {
        const ret = wasm.rawrigidbodyset_rbIsSleeping(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * Is the velocity of this rigid-body not zero?
    * @param {number} handle
    * @returns {boolean}
    */
    rbIsMoving(handle) {
        const ret = wasm.rawrigidbodyset_rbIsMoving(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * The world-space predicted translation of this rigid-body.
    *
    * If this rigid-body is kinematic this value is set by the `setNextKinematicTranslation`
    * method and is used for estimating the kinematic body velocity at the next timestep.
    * For non-kinematic bodies, this value is currently unspecified.
    * @param {number} handle
    * @returns {RawVector}
    */
    rbNextTranslation(handle) {
        const ret = wasm.rawrigidbodyset_rbNextTranslation(this.ptr, handle);
        return RawVector.__wrap(ret);
    }
    /**
    * The world-space predicted orientation of this rigid-body.
    *
    * If this rigid-body is kinematic this value is set by the `setNextKinematicRotation`
    * method and is used for estimating the kinematic body velocity at the next timestep.
    * For non-kinematic bodies, this value is currently unspecified.
    * @param {number} handle
    * @returns {RawRotation}
    */
    rbNextRotation(handle) {
        const ret = wasm.rawrigidbodyset_rbNextRotation(this.ptr, handle);
        return RawRotation.__wrap(ret);
    }
    /**
    * Sets the translation of this rigid-body.
    *
    * # Parameters
    * - `x`: the world-space position of the rigid-body along the `x` axis.
    * - `y`: the world-space position of the rigid-body along the `y` axis.
    * - `z`: the world-space position of the rigid-body along the `z` axis.
    * - `wakeUp`: forces the rigid-body to wake-up so it is properly affected by forces if it
    * wasn't moving before modifying its position.
    * @param {number} handle
    * @param {number} x
    * @param {number} y
    * @param {number} z
    * @param {boolean} wakeUp
    */
    rbSetTranslation(handle, x, y, z, wakeUp) {
        wasm.rawrigidbodyset_rbSetTranslation(this.ptr, handle, x, y, z, wakeUp);
    }
    /**
    * Sets the rotation quaternion of this rigid-body.
    *
    * This does nothing if a zero quaternion is provided.
    *
    * # Parameters
    * - `x`: the first vector component of the quaternion.
    * - `y`: the second vector component of the quaternion.
    * - `z`: the third vector component of the quaternion.
    * - `w`: the scalar component of the quaternion.
    * - `wakeUp`: forces the rigid-body to wake-up so it is properly affected by forces if it
    * wasn't moving before modifying its position.
    * @param {number} handle
    * @param {number} x
    * @param {number} y
    * @param {number} z
    * @param {number} w
    * @param {boolean} wakeUp
    */
    rbSetRotation(handle, x, y, z, w, wakeUp) {
        wasm.rawrigidbodyset_rbSetRotation(this.ptr, handle, x, y, z, w, wakeUp);
    }
    /**
    * Sets the linear velocity of this rigid-body.
    * @param {number} handle
    * @param {RawVector} linvel
    * @param {boolean} wakeUp
    */
    rbSetLinvel(handle, linvel, wakeUp) {
        _assertClass(linvel, RawVector);
        wasm.rawrigidbodyset_rbSetLinvel(this.ptr, handle, linvel.ptr, wakeUp);
    }
    /**
    * Sets the angular velocity of this rigid-body.
    * @param {number} handle
    * @param {RawVector} angvel
    * @param {boolean} wakeUp
    */
    rbSetAngvel(handle, angvel, wakeUp) {
        _assertClass(angvel, RawVector);
        wasm.rawrigidbodyset_rbSetAngvel(this.ptr, handle, angvel.ptr, wakeUp);
    }
    /**
    * If this rigid body is kinematic, sets its future translation after the next timestep integration.
    *
    * This should be used instead of `rigidBody.setTranslation` to make the dynamic object
    * interacting with this kinematic body behave as expected. Internally, Rapier will compute
    * an artificial velocity for this rigid-body from its current position and its next kinematic
    * position. This velocity will be used to compute forces on dynamic bodies interacting with
    * this body.
    *
    * # Parameters
    * - `x`: the world-space position of the rigid-body along the `x` axis.
    * - `y`: the world-space position of the rigid-body along the `y` axis.
    * - `z`: the world-space position of the rigid-body along the `z` axis.
    * @param {number} handle
    * @param {number} x
    * @param {number} y
    * @param {number} z
    */
    rbSetNextKinematicTranslation(handle, x, y, z) {
        wasm.rawrigidbodyset_rbSetNextKinematicTranslation(this.ptr, handle, x, y, z);
    }
    /**
    * If this rigid body is kinematic, sets its future rotation after the next timestep integration.
    *
    * This should be used instead of `rigidBody.setRotation` to make the dynamic object
    * interacting with this kinematic body behave as expected. Internally, Rapier will compute
    * an artificial velocity for this rigid-body from its current position and its next kinematic
    * position. This velocity will be used to compute forces on dynamic bodies interacting with
    * this body.
    *
    * # Parameters
    * - `x`: the first vector component of the quaternion.
    * - `y`: the second vector component of the quaternion.
    * - `z`: the third vector component of the quaternion.
    * - `w`: the scalar component of the quaternion.
    * @param {number} handle
    * @param {number} x
    * @param {number} y
    * @param {number} z
    * @param {number} w
    */
    rbSetNextKinematicRotation(handle, x, y, z, w) {
        wasm.rawrigidbodyset_rbSetNextKinematicRotation(this.ptr, handle, x, y, z, w);
    }
    /**
    * @param {number} handle
    * @param {RawColliderSet} colliders
    */
    rbRecomputeMassPropertiesFromColliders(handle, colliders) {
        _assertClass(colliders, RawColliderSet);
        wasm.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.ptr, handle, colliders.ptr);
    }
    /**
    * @param {number} handle
    * @param {number} mass
    * @param {boolean} wake_up
    */
    rbSetAdditionalMass(handle, mass, wake_up) {
        wasm.rawrigidbodyset_rbSetAdditionalMass(this.ptr, handle, mass, wake_up);
    }
    /**
    * @param {number} handle
    * @param {number} mass
    * @param {RawVector} centerOfMass
    * @param {RawVector} principalAngularInertia
    * @param {RawRotation} angularInertiaFrame
    * @param {boolean} wake_up
    */
    rbSetAdditionalMassProperties(handle, mass, centerOfMass, principalAngularInertia, angularInertiaFrame, wake_up) {
        _assertClass(centerOfMass, RawVector);
        _assertClass(principalAngularInertia, RawVector);
        _assertClass(angularInertiaFrame, RawRotation);
        wasm.rawrigidbodyset_rbSetAdditionalMassProperties(this.ptr, handle, mass, centerOfMass.ptr, principalAngularInertia.ptr, angularInertiaFrame.ptr, wake_up);
    }
    /**
    * The linear velocity of this rigid-body.
    * @param {number} handle
    * @returns {RawVector}
    */
    rbLinvel(handle) {
        const ret = wasm.rawrigidbodyset_rbLinvel(this.ptr, handle);
        return RawVector.__wrap(ret);
    }
    /**
    * The angular velocity of this rigid-body.
    * @param {number} handle
    * @returns {RawVector}
    */
    rbAngvel(handle) {
        const ret = wasm.rawrigidbodyset_rbAngvel(this.ptr, handle);
        return RawVector.__wrap(ret);
    }
    /**
    * @param {number} handle
    * @param {boolean} locked
    * @param {boolean} wake_up
    */
    rbLockTranslations(handle, locked, wake_up) {
        wasm.rawrigidbodyset_rbLockTranslations(this.ptr, handle, locked, wake_up);
    }
    /**
    * @param {number} handle
    * @param {boolean} allow_x
    * @param {boolean} allow_y
    * @param {boolean} allow_z
    * @param {boolean} wake_up
    */
    rbSetEnabledTranslations(handle, allow_x, allow_y, allow_z, wake_up) {
        wasm.rawrigidbodyset_rbSetEnabledTranslations(this.ptr, handle, allow_x, allow_y, allow_z, wake_up);
    }
    /**
    * @param {number} handle
    * @param {boolean} locked
    * @param {boolean} wake_up
    */
    rbLockRotations(handle, locked, wake_up) {
        wasm.rawrigidbodyset_rbLockRotations(this.ptr, handle, locked, wake_up);
    }
    /**
    * @param {number} handle
    * @param {boolean} allow_x
    * @param {boolean} allow_y
    * @param {boolean} allow_z
    * @param {boolean} wake_up
    */
    rbSetEnabledRotations(handle, allow_x, allow_y, allow_z, wake_up) {
        wasm.rawrigidbodyset_rbSetEnabledRotations(this.ptr, handle, allow_x, allow_y, allow_z, wake_up);
    }
    /**
    * @param {number} handle
    * @returns {number}
    */
    rbDominanceGroup(handle) {
        const ret = wasm.rawrigidbodyset_rbDominanceGroup(this.ptr, handle);
        return ret;
    }
    /**
    * @param {number} handle
    * @param {number} group
    */
    rbSetDominanceGroup(handle, group) {
        wasm.rawrigidbodyset_rbSetDominanceGroup(this.ptr, handle, group);
    }
    /**
    * @param {number} handle
    * @param {boolean} enabled
    */
    rbEnableCcd(handle, enabled) {
        wasm.rawrigidbodyset_rbEnableCcd(this.ptr, handle, enabled);
    }
    /**
    * The mass of this rigid-body.
    * @param {number} handle
    * @returns {number}
    */
    rbMass(handle) {
        const ret = wasm.rawrigidbodyset_rbMass(this.ptr, handle);
        return ret;
    }
    /**
    * The inverse of the mass of a rigid-body.
    *
    * If this is zero, the rigid-body is assumed to have infinite mass.
    * @param {number} handle
    * @returns {number}
    */
    rbInvMass(handle) {
        const ret = wasm.rawrigidbodyset_rbInvMass(this.ptr, handle);
        return ret;
    }
    /**
    * The inverse mass taking into account translation locking.
    * @param {number} handle
    * @returns {RawVector}
    */
    rbEffectiveInvMass(handle) {
        const ret = wasm.rawrigidbodyset_rbEffectiveInvMass(this.ptr, handle);
        return RawVector.__wrap(ret);
    }
    /**
    * The center of mass of a rigid-body expressed in its local-space.
    * @param {number} handle
    * @returns {RawVector}
    */
    rbLocalCom(handle) {
        const ret = wasm.rawrigidbodyset_rbLocalCom(this.ptr, handle);
        return RawVector.__wrap(ret);
    }
    /**
    * The world-space center of mass of the rigid-body.
    * @param {number} handle
    * @returns {RawVector}
    */
    rbWorldCom(handle) {
        const ret = wasm.rawrigidbodyset_rbWorldCom(this.ptr, handle);
        return RawVector.__wrap(ret);
    }
    /**
    * The inverse of the principal angular inertia of the rigid-body.
    *
    * Components set to zero are assumed to be infinite along the corresponding principal axis.
    * @param {number} handle
    * @returns {RawVector}
    */
    rbInvPrincipalInertiaSqrt(handle) {
        const ret = wasm.rawrigidbodyset_rbInvPrincipalInertiaSqrt(this.ptr, handle);
        return RawVector.__wrap(ret);
    }
    /**
    * The principal vectors of the local angular inertia tensor of the rigid-body.
    * @param {number} handle
    * @returns {RawRotation}
    */
    rbPrincipalInertiaLocalFrame(handle) {
        const ret = wasm.rawrigidbodyset_rbPrincipalInertiaLocalFrame(this.ptr, handle);
        return RawRotation.__wrap(ret);
    }
    /**
    * The angular inertia along the principal inertia axes of the rigid-body.
    * @param {number} handle
    * @returns {RawVector}
    */
    rbPrincipalInertia(handle) {
        const ret = wasm.rawrigidbodyset_rbPrincipalInertia(this.ptr, handle);
        return RawVector.__wrap(ret);
    }
    /**
    * The square-root of the world-space inverse angular inertia tensor of the rigid-body,
    * taking into account rotation locking.
    * @param {number} handle
    * @returns {RawSdpMatrix3}
    */
    rbEffectiveWorldInvInertiaSqrt(handle) {
        const ret = wasm.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt(this.ptr, handle);
        return RawSdpMatrix3.__wrap(ret);
    }
    /**
    * The effective world-space angular inertia (that takes the potential rotation locking into account) of
    * this rigid-body.
    * @param {number} handle
    * @returns {RawSdpMatrix3}
    */
    rbEffectiveAngularInertia(handle) {
        const ret = wasm.rawrigidbodyset_rbEffectiveAngularInertia(this.ptr, handle);
        return RawSdpMatrix3.__wrap(ret);
    }
    /**
    * Wakes this rigid-body up.
    *
    * A dynamic rigid-body that does not move during several consecutive frames will
    * be put to sleep by the physics engine, i.e., it will stop being simulated in order
    * to avoid useless computations.
    * This methods forces a sleeping rigid-body to wake-up. This is useful, e.g., before modifying
    * the position of a dynamic body so that it is properly simulated afterwards.
    * @param {number} handle
    */
    rbWakeUp(handle) {
        wasm.rawrigidbodyset_rbWakeUp(this.ptr, handle);
    }
    /**
    * Is Continuous Collision Detection enabled for this rigid-body?
    * @param {number} handle
    * @returns {boolean}
    */
    rbIsCcdEnabled(handle) {
        const ret = wasm.rawrigidbodyset_rbIsCcdEnabled(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * The number of colliders attached to this rigid-body.
    * @param {number} handle
    * @returns {number}
    */
    rbNumColliders(handle) {
        const ret = wasm.rawrigidbodyset_rbNumColliders(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * Retrieves the `i-th` collider attached to this rigid-body.
    *
    * # Parameters
    * - `at`: The index of the collider to retrieve. Must be a number in `[0, this.numColliders()[`.
    *         This index is **not** the same as the unique identifier of the collider.
    * @param {number} handle
    * @param {number} at
    * @returns {number}
    */
    rbCollider(handle, at) {
        const ret = wasm.rawrigidbodyset_rbCollider(this.ptr, handle, at);
        return ret;
    }
    /**
    * The status of this rigid-body: fixed, dynamic, or kinematic.
    * @param {number} handle
    * @returns {number}
    */
    rbBodyType(handle) {
        const ret = wasm.rawrigidbodyset_rbBodyType(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * Set a new status for this rigid-body: fixed, dynamic, or kinematic.
    * @param {number} handle
    * @param {number} status
    * @param {boolean} wake_up
    */
    rbSetBodyType(handle, status, wake_up) {
        wasm.rawrigidbodyset_rbSetBodyType(this.ptr, handle, status, wake_up);
    }
    /**
    * Is this rigid-body fixed?
    * @param {number} handle
    * @returns {boolean}
    */
    rbIsFixed(handle) {
        const ret = wasm.rawrigidbodyset_rbIsFixed(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * Is this rigid-body kinematic?
    * @param {number} handle
    * @returns {boolean}
    */
    rbIsKinematic(handle) {
        const ret = wasm.rawrigidbodyset_rbIsKinematic(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * Is this rigid-body dynamic?
    * @param {number} handle
    * @returns {boolean}
    */
    rbIsDynamic(handle) {
        const ret = wasm.rawrigidbodyset_rbIsDynamic(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * The linear damping coefficient of this rigid-body.
    * @param {number} handle
    * @returns {number}
    */
    rbLinearDamping(handle) {
        const ret = wasm.rawrigidbodyset_rbLinearDamping(this.ptr, handle);
        return ret;
    }
    /**
    * The angular damping coefficient of this rigid-body.
    * @param {number} handle
    * @returns {number}
    */
    rbAngularDamping(handle) {
        const ret = wasm.rawrigidbodyset_rbAngularDamping(this.ptr, handle);
        return ret;
    }
    /**
    * @param {number} handle
    * @param {number} factor
    */
    rbSetLinearDamping(handle, factor) {
        wasm.rawrigidbodyset_rbSetLinearDamping(this.ptr, handle, factor);
    }
    /**
    * @param {number} handle
    * @param {number} factor
    */
    rbSetAngularDamping(handle, factor) {
        wasm.rawrigidbodyset_rbSetAngularDamping(this.ptr, handle, factor);
    }
    /**
    * @param {number} handle
    * @param {boolean} enabled
    */
    rbSetEnabled(handle, enabled) {
        wasm.rawrigidbodyset_rbSetEnabled(this.ptr, handle, enabled);
    }
    /**
    * @param {number} handle
    * @returns {boolean}
    */
    rbIsEnabled(handle) {
        const ret = wasm.rawrigidbodyset_rbIsEnabled(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * @param {number} handle
    * @returns {number}
    */
    rbGravityScale(handle) {
        const ret = wasm.rawrigidbodyset_rbGravityScale(this.ptr, handle);
        return ret;
    }
    /**
    * @param {number} handle
    * @param {number} factor
    * @param {boolean} wakeUp
    */
    rbSetGravityScale(handle, factor, wakeUp) {
        wasm.rawrigidbodyset_rbSetGravityScale(this.ptr, handle, factor, wakeUp);
    }
    /**
    * Resets to zero all user-added forces added to this rigid-body.
    * @param {number} handle
    * @param {boolean} wakeUp
    */
    rbResetForces(handle, wakeUp) {
        wasm.rawrigidbodyset_rbResetForces(this.ptr, handle, wakeUp);
    }
    /**
    * Resets to zero all user-added torques added to this rigid-body.
    * @param {number} handle
    * @param {boolean} wakeUp
    */
    rbResetTorques(handle, wakeUp) {
        wasm.rawrigidbodyset_rbResetTorques(this.ptr, handle, wakeUp);
    }
    /**
    * Adds a force at the center-of-mass of this rigid-body.
    *
    * # Parameters
    * - `force`: the world-space force to apply on the rigid-body.
    * - `wakeUp`: should the rigid-body be automatically woken-up?
    * @param {number} handle
    * @param {RawVector} force
    * @param {boolean} wakeUp
    */
    rbAddForce(handle, force, wakeUp) {
        _assertClass(force, RawVector);
        wasm.rawrigidbodyset_rbAddForce(this.ptr, handle, force.ptr, wakeUp);
    }
    /**
    * Applies an impulse at the center-of-mass of this rigid-body.
    *
    * # Parameters
    * - `impulse`: the world-space impulse to apply on the rigid-body.
    * - `wakeUp`: should the rigid-body be automatically woken-up?
    * @param {number} handle
    * @param {RawVector} impulse
    * @param {boolean} wakeUp
    */
    rbApplyImpulse(handle, impulse, wakeUp) {
        _assertClass(impulse, RawVector);
        wasm.rawrigidbodyset_rbApplyImpulse(this.ptr, handle, impulse.ptr, wakeUp);
    }
    /**
    * Adds a torque at the center-of-mass of this rigid-body.
    *
    * # Parameters
    * - `torque`: the world-space torque to apply on the rigid-body.
    * - `wakeUp`: should the rigid-body be automatically woken-up?
    * @param {number} handle
    * @param {RawVector} torque
    * @param {boolean} wakeUp
    */
    rbAddTorque(handle, torque, wakeUp) {
        _assertClass(torque, RawVector);
        wasm.rawrigidbodyset_rbAddTorque(this.ptr, handle, torque.ptr, wakeUp);
    }
    /**
    * Applies an impulsive torque at the center-of-mass of this rigid-body.
    *
    * # Parameters
    * - `torque impulse`: the world-space torque impulse to apply on the rigid-body.
    * - `wakeUp`: should the rigid-body be automatically woken-up?
    * @param {number} handle
    * @param {RawVector} torque_impulse
    * @param {boolean} wakeUp
    */
    rbApplyTorqueImpulse(handle, torque_impulse, wakeUp) {
        _assertClass(torque_impulse, RawVector);
        wasm.rawrigidbodyset_rbApplyTorqueImpulse(this.ptr, handle, torque_impulse.ptr, wakeUp);
    }
    /**
    * Adds a force at the given world-space point of this rigid-body.
    *
    * # Parameters
    * - `force`: the world-space force to apply on the rigid-body.
    * - `point`: the world-space point where the impulse is to be applied on the rigid-body.
    * - `wakeUp`: should the rigid-body be automatically woken-up?
    * @param {number} handle
    * @param {RawVector} force
    * @param {RawVector} point
    * @param {boolean} wakeUp
    */
    rbAddForceAtPoint(handle, force, point, wakeUp) {
        _assertClass(force, RawVector);
        _assertClass(point, RawVector);
        wasm.rawrigidbodyset_rbAddForceAtPoint(this.ptr, handle, force.ptr, point.ptr, wakeUp);
    }
    /**
    * Applies an impulse at the given world-space point of this rigid-body.
    *
    * # Parameters
    * - `impulse`: the world-space impulse to apply on the rigid-body.
    * - `point`: the world-space point where the impulse is to be applied on the rigid-body.
    * - `wakeUp`: should the rigid-body be automatically woken-up?
    * @param {number} handle
    * @param {RawVector} impulse
    * @param {RawVector} point
    * @param {boolean} wakeUp
    */
    rbApplyImpulseAtPoint(handle, impulse, point, wakeUp) {
        _assertClass(impulse, RawVector);
        _assertClass(point, RawVector);
        wasm.rawrigidbodyset_rbApplyImpulseAtPoint(this.ptr, handle, impulse.ptr, point.ptr, wakeUp);
    }
    /**
    * An arbitrary user-defined 32-bit integer
    * @param {number} handle
    * @returns {number}
    */
    rbUserData(handle) {
        const ret = wasm.rawrigidbodyset_rbUserData(this.ptr, handle);
        return ret >>> 0;
    }
    /**
    * Sets the user-defined 32-bit integer of this rigid-body.
    *
    * # Parameters
    * - `data`: an arbitrary user-defined 32-bit integer.
    * @param {number} handle
    * @param {number} data
    */
    rbSetUserData(handle, data) {
        wasm.rawrigidbodyset_rbSetUserData(this.ptr, handle, data);
    }
    /**
    */
    constructor() {
        const ret = wasm.rawrigidbodyset_new();
        return RawRigidBodySet.__wrap(ret);
    }
    /**
    * @param {boolean} enabled
    * @param {RawVector} translation
    * @param {RawRotation} rotation
    * @param {number} gravityScale
    * @param {number} mass
    * @param {boolean} massOnly
    * @param {RawVector} centerOfMass
    * @param {RawVector} linvel
    * @param {RawVector} angvel
    * @param {RawVector} principalAngularInertia
    * @param {RawRotation} angularInertiaFrame
    * @param {boolean} translationEnabledX
    * @param {boolean} translationEnabledY
    * @param {boolean} translationEnabledZ
    * @param {boolean} rotationEnabledX
    * @param {boolean} rotationEnabledY
    * @param {boolean} rotationEnabledZ
    * @param {number} linearDamping
    * @param {number} angularDamping
    * @param {number} rb_type
    * @param {boolean} canSleep
    * @param {boolean} sleeping
    * @param {boolean} ccdEnabled
    * @param {number} dominanceGroup
    * @returns {number}
    */
    createRigidBody(enabled, translation, rotation, gravityScale, mass, massOnly, centerOfMass, linvel, angvel, principalAngularInertia, angularInertiaFrame, translationEnabledX, translationEnabledY, translationEnabledZ, rotationEnabledX, rotationEnabledY, rotationEnabledZ, linearDamping, angularDamping, rb_type, canSleep, sleeping, ccdEnabled, dominanceGroup) {
        _assertClass(translation, RawVector);
        _assertClass(rotation, RawRotation);
        _assertClass(centerOfMass, RawVector);
        _assertClass(linvel, RawVector);
        _assertClass(angvel, RawVector);
        _assertClass(principalAngularInertia, RawVector);
        _assertClass(angularInertiaFrame, RawRotation);
        const ret = wasm.rawrigidbodyset_createRigidBody(this.ptr, enabled, translation.ptr, rotation.ptr, gravityScale, mass, massOnly, centerOfMass.ptr, linvel.ptr, angvel.ptr, principalAngularInertia.ptr, angularInertiaFrame.ptr, translationEnabledX, translationEnabledY, translationEnabledZ, rotationEnabledX, rotationEnabledY, rotationEnabledZ, linearDamping, angularDamping, rb_type, canSleep, sleeping, ccdEnabled, dominanceGroup);
        return ret;
    }
    /**
    * @param {number} handle
    * @param {RawIslandManager} islands
    * @param {RawColliderSet} colliders
    * @param {RawImpulseJointSet} joints
    * @param {RawMultibodyJointSet} articulations
    */
    remove(handle, islands, colliders, joints, articulations) {
        _assertClass(islands, RawIslandManager);
        _assertClass(colliders, RawColliderSet);
        _assertClass(joints, RawImpulseJointSet);
        _assertClass(articulations, RawMultibodyJointSet);
        wasm.rawrigidbodyset_remove(this.ptr, handle, islands.ptr, colliders.ptr, joints.ptr, articulations.ptr);
    }
    /**
    * The number of rigid-bodies on this set.
    * @returns {number}
    */
    len() {
        const ret = wasm.rawrigidbodyset_len(this.ptr);
        return ret >>> 0;
    }
    /**
    * Checks if a rigid-body with the given integer handle exists.
    * @param {number} handle
    * @returns {boolean}
    */
    contains(handle) {
        const ret = wasm.rawrigidbodyset_contains(this.ptr, handle);
        return ret !== 0;
    }
    /**
    * Applies the given JavaScript function to the integer handle of each rigid-body managed by this set.
    *
    * # Parameters
    * - `f(handle)`: the function to apply to the integer handle of each rigid-body managed by this set. Called as `f(collider)`.
    * @param {Function} f
    */
    forEachRigidBodyHandle(f) {
        try {
            wasm.rawrigidbodyset_forEachRigidBodyHandle(this.ptr, addBorrowedObject(f));
        } finally {
            heap[stack_pointer++] = undefined;
        }
    }
    /**
    * @param {RawColliderSet} colliders
    */
    propagateModifiedBodyPositionsToColliders(colliders) {
        _assertClass(colliders, RawColliderSet);
        wasm.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.ptr, colliders.ptr);
    }
}
/**
* A rotation quaternion.
*/
export class RawRotation {

    static __wrap(ptr) {
        const obj = Object.create(RawRotation.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawrotation_free(ptr);
    }
    /**
    * @param {number} x
    * @param {number} y
    * @param {number} z
    * @param {number} w
    */
    constructor(x, y, z, w) {
        const ret = wasm.rawrotation_new(x, y, z, w);
        return RawRotation.__wrap(ret);
    }
    /**
    * The identity quaternion.
    * @returns {RawRotation}
    */
    static identity() {
        const ret = wasm.rawrotation_identity();
        return RawRotation.__wrap(ret);
    }
    /**
    * The `x` component of this quaternion.
    * @returns {number}
    */
    get x() {
        const ret = wasm.rawintegrationparameters_dt(this.ptr);
        return ret;
    }
    /**
    * The `y` component of this quaternion.
    * @returns {number}
    */
    get y() {
        const ret = wasm.rawrotation_y(this.ptr);
        return ret;
    }
    /**
    * The `z` component of this quaternion.
    * @returns {number}
    */
    get z() {
        const ret = wasm.rawcharactercollision_toi(this.ptr);
        return ret;
    }
    /**
    * The `w` component of this quaternion.
    * @returns {number}
    */
    get w() {
        const ret = wasm.rawrotation_w(this.ptr);
        return ret;
    }
}
/**
*/
export class RawSdpMatrix3 {

    static __wrap(ptr) {
        const obj = Object.create(RawSdpMatrix3.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawsdpmatrix3_free(ptr);
    }
    /**
    * Row major list of the upper-triangular part of the symmetric matrix.
    * @returns {Float32Array}
    */
    elements() {
        const ret = wasm.rawsdpmatrix3_elements(this.ptr);
        return takeObject(ret);
    }
}
/**
*/
export class RawSerializationPipeline {

    static __wrap(ptr) {
        const obj = Object.create(RawSerializationPipeline.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawserializationpipeline_free(ptr);
    }
    /**
    */
    constructor() {
        const ret = wasm.rawserializationpipeline_new();
        return RawSerializationPipeline.__wrap(ret);
    }
    /**
    * @param {RawVector} gravity
    * @param {RawIntegrationParameters} integrationParameters
    * @param {RawIslandManager} islands
    * @param {RawBroadPhase} broadPhase
    * @param {RawNarrowPhase} narrowPhase
    * @param {RawRigidBodySet} bodies
    * @param {RawColliderSet} colliders
    * @param {RawImpulseJointSet} impulse_joints
    * @param {RawMultibodyJointSet} multibody_joints
    * @returns {Uint8Array | undefined}
    */
    serializeAll(gravity, integrationParameters, islands, broadPhase, narrowPhase, bodies, colliders, impulse_joints, multibody_joints) {
        _assertClass(gravity, RawVector);
        _assertClass(integrationParameters, RawIntegrationParameters);
        _assertClass(islands, RawIslandManager);
        _assertClass(broadPhase, RawBroadPhase);
        _assertClass(narrowPhase, RawNarrowPhase);
        _assertClass(bodies, RawRigidBodySet);
        _assertClass(colliders, RawColliderSet);
        _assertClass(impulse_joints, RawImpulseJointSet);
        _assertClass(multibody_joints, RawMultibodyJointSet);
        const ret = wasm.rawserializationpipeline_serializeAll(this.ptr, gravity.ptr, integrationParameters.ptr, islands.ptr, broadPhase.ptr, narrowPhase.ptr, bodies.ptr, colliders.ptr, impulse_joints.ptr, multibody_joints.ptr);
        return takeObject(ret);
    }
    /**
    * @param {Uint8Array} data
    * @returns {RawDeserializedWorld | undefined}
    */
    deserializeAll(data) {
        const ret = wasm.rawserializationpipeline_deserializeAll(this.ptr, addHeapObject(data));
        return ret === 0 ? undefined : RawDeserializedWorld.__wrap(ret);
    }
}
/**
*/
export class RawShape {

    static __wrap(ptr) {
        const obj = Object.create(RawShape.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawshape_free(ptr);
    }
    /**
    * @param {number} hx
    * @param {number} hy
    * @param {number} hz
    * @returns {RawShape}
    */
    static cuboid(hx, hy, hz) {
        const ret = wasm.rawshape_cuboid(hx, hy, hz);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {number} hx
    * @param {number} hy
    * @param {number} hz
    * @param {number} borderRadius
    * @returns {RawShape}
    */
    static roundCuboid(hx, hy, hz, borderRadius) {
        const ret = wasm.rawshape_roundCuboid(hx, hy, hz, borderRadius);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {number} radius
    * @returns {RawShape}
    */
    static ball(radius) {
        const ret = wasm.rawshape_ball(radius);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {RawVector} normal
    * @returns {RawShape}
    */
    static halfspace(normal) {
        _assertClass(normal, RawVector);
        const ret = wasm.rawshape_halfspace(normal.ptr);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {number} halfHeight
    * @param {number} radius
    * @returns {RawShape}
    */
    static capsule(halfHeight, radius) {
        const ret = wasm.rawshape_capsule(halfHeight, radius);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {number} halfHeight
    * @param {number} radius
    * @returns {RawShape}
    */
    static cylinder(halfHeight, radius) {
        const ret = wasm.rawshape_cylinder(halfHeight, radius);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {number} halfHeight
    * @param {number} radius
    * @param {number} borderRadius
    * @returns {RawShape}
    */
    static roundCylinder(halfHeight, radius, borderRadius) {
        const ret = wasm.rawshape_roundCylinder(halfHeight, radius, borderRadius);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {number} halfHeight
    * @param {number} radius
    * @returns {RawShape}
    */
    static cone(halfHeight, radius) {
        const ret = wasm.rawshape_cone(halfHeight, radius);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {number} halfHeight
    * @param {number} radius
    * @param {number} borderRadius
    * @returns {RawShape}
    */
    static roundCone(halfHeight, radius, borderRadius) {
        const ret = wasm.rawshape_roundCone(halfHeight, radius, borderRadius);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {Float32Array} vertices
    * @param {Uint32Array} indices
    * @returns {RawShape}
    */
    static polyline(vertices, indices) {
        const ptr0 = passArrayF32ToWasm0(vertices, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray32ToWasm0(indices, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.rawshape_polyline(ptr0, len0, ptr1, len1);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {Float32Array} vertices
    * @param {Uint32Array} indices
    * @returns {RawShape}
    */
    static trimesh(vertices, indices) {
        const ptr0 = passArrayF32ToWasm0(vertices, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray32ToWasm0(indices, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.rawshape_trimesh(ptr0, len0, ptr1, len1);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {number} nrows
    * @param {number} ncols
    * @param {Float32Array} heights
    * @param {RawVector} scale
    * @returns {RawShape}
    */
    static heightfield(nrows, ncols, heights, scale) {
        const ptr0 = passArrayF32ToWasm0(heights, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        _assertClass(scale, RawVector);
        const ret = wasm.rawshape_heightfield(nrows, ncols, ptr0, len0, scale.ptr);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {RawVector} p1
    * @param {RawVector} p2
    * @returns {RawShape}
    */
    static segment(p1, p2) {
        _assertClass(p1, RawVector);
        _assertClass(p2, RawVector);
        const ret = wasm.rawshape_segment(p1.ptr, p2.ptr);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {RawVector} p1
    * @param {RawVector} p2
    * @param {RawVector} p3
    * @returns {RawShape}
    */
    static triangle(p1, p2, p3) {
        _assertClass(p1, RawVector);
        _assertClass(p2, RawVector);
        _assertClass(p3, RawVector);
        const ret = wasm.rawshape_triangle(p1.ptr, p2.ptr, p3.ptr);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {RawVector} p1
    * @param {RawVector} p2
    * @param {RawVector} p3
    * @param {number} borderRadius
    * @returns {RawShape}
    */
    static roundTriangle(p1, p2, p3, borderRadius) {
        _assertClass(p1, RawVector);
        _assertClass(p2, RawVector);
        _assertClass(p3, RawVector);
        const ret = wasm.rawshape_roundTriangle(p1.ptr, p2.ptr, p3.ptr, borderRadius);
        return RawShape.__wrap(ret);
    }
    /**
    * @param {Float32Array} points
    * @returns {RawShape | undefined}
    */
    static convexHull(points) {
        const ptr0 = passArrayF32ToWasm0(points, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.rawshape_convexHull(ptr0, len0);
        return ret === 0 ? undefined : RawShape.__wrap(ret);
    }
    /**
    * @param {Float32Array} points
    * @param {number} borderRadius
    * @returns {RawShape | undefined}
    */
    static roundConvexHull(points, borderRadius) {
        const ptr0 = passArrayF32ToWasm0(points, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.rawshape_roundConvexHull(ptr0, len0, borderRadius);
        return ret === 0 ? undefined : RawShape.__wrap(ret);
    }
    /**
    * @param {Float32Array} vertices
    * @param {Uint32Array} indices
    * @returns {RawShape | undefined}
    */
    static convexMesh(vertices, indices) {
        const ptr0 = passArrayF32ToWasm0(vertices, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray32ToWasm0(indices, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.rawshape_convexMesh(ptr0, len0, ptr1, len1);
        return ret === 0 ? undefined : RawShape.__wrap(ret);
    }
    /**
    * @param {Float32Array} vertices
    * @param {Uint32Array} indices
    * @param {number} borderRadius
    * @returns {RawShape | undefined}
    */
    static roundConvexMesh(vertices, indices, borderRadius) {
        const ptr0 = passArrayF32ToWasm0(vertices, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray32ToWasm0(indices, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.rawshape_roundConvexMesh(ptr0, len0, ptr1, len1, borderRadius);
        return ret === 0 ? undefined : RawShape.__wrap(ret);
    }
    /**
    * @param {RawVector} shapePos1
    * @param {RawRotation} shapeRot1
    * @param {RawVector} shapeVel1
    * @param {RawShape} shape2
    * @param {RawVector} shapePos2
    * @param {RawRotation} shapeRot2
    * @param {RawVector} shapeVel2
    * @param {number} maxToi
    * @param {boolean} stop_at_penetration
    * @returns {RawShapeTOI | undefined}
    */
    castShape(shapePos1, shapeRot1, shapeVel1, shape2, shapePos2, shapeRot2, shapeVel2, maxToi, stop_at_penetration) {
        _assertClass(shapePos1, RawVector);
        _assertClass(shapeRot1, RawRotation);
        _assertClass(shapeVel1, RawVector);
        _assertClass(shape2, RawShape);
        _assertClass(shapePos2, RawVector);
        _assertClass(shapeRot2, RawRotation);
        _assertClass(shapeVel2, RawVector);
        const ret = wasm.rawshape_castShape(this.ptr, shapePos1.ptr, shapeRot1.ptr, shapeVel1.ptr, shape2.ptr, shapePos2.ptr, shapeRot2.ptr, shapeVel2.ptr, maxToi, stop_at_penetration);
        return ret === 0 ? undefined : RawShapeTOI.__wrap(ret);
    }
    /**
    * @param {RawVector} shapePos1
    * @param {RawRotation} shapeRot1
    * @param {RawShape} shape2
    * @param {RawVector} shapePos2
    * @param {RawRotation} shapeRot2
    * @returns {boolean}
    */
    intersectsShape(shapePos1, shapeRot1, shape2, shapePos2, shapeRot2) {
        _assertClass(shapePos1, RawVector);
        _assertClass(shapeRot1, RawRotation);
        _assertClass(shape2, RawShape);
        _assertClass(shapePos2, RawVector);
        _assertClass(shapeRot2, RawRotation);
        const ret = wasm.rawshape_intersectsShape(this.ptr, shapePos1.ptr, shapeRot1.ptr, shape2.ptr, shapePos2.ptr, shapeRot2.ptr);
        return ret !== 0;
    }
    /**
    * @param {RawVector} shapePos1
    * @param {RawRotation} shapeRot1
    * @param {RawShape} shape2
    * @param {RawVector} shapePos2
    * @param {RawRotation} shapeRot2
    * @param {number} prediction
    * @returns {RawShapeContact | undefined}
    */
    contactShape(shapePos1, shapeRot1, shape2, shapePos2, shapeRot2, prediction) {
        _assertClass(shapePos1, RawVector);
        _assertClass(shapeRot1, RawRotation);
        _assertClass(shape2, RawShape);
        _assertClass(shapePos2, RawVector);
        _assertClass(shapeRot2, RawRotation);
        const ret = wasm.rawshape_contactShape(this.ptr, shapePos1.ptr, shapeRot1.ptr, shape2.ptr, shapePos2.ptr, shapeRot2.ptr, prediction);
        return ret === 0 ? undefined : RawShapeContact.__wrap(ret);
    }
    /**
    * @param {RawVector} shapePos
    * @param {RawRotation} shapeRot
    * @param {RawVector} point
    * @returns {boolean}
    */
    containsPoint(shapePos, shapeRot, point) {
        _assertClass(shapePos, RawVector);
        _assertClass(shapeRot, RawRotation);
        _assertClass(point, RawVector);
        const ret = wasm.rawshape_containsPoint(this.ptr, shapePos.ptr, shapeRot.ptr, point.ptr);
        return ret !== 0;
    }
    /**
    * @param {RawVector} shapePos
    * @param {RawRotation} shapeRot
    * @param {RawVector} point
    * @param {boolean} solid
    * @returns {RawPointProjection}
    */
    projectPoint(shapePos, shapeRot, point, solid) {
        _assertClass(shapePos, RawVector);
        _assertClass(shapeRot, RawRotation);
        _assertClass(point, RawVector);
        const ret = wasm.rawshape_projectPoint(this.ptr, shapePos.ptr, shapeRot.ptr, point.ptr, solid);
        return RawPointProjection.__wrap(ret);
    }
    /**
    * @param {RawVector} shapePos
    * @param {RawRotation} shapeRot
    * @param {RawVector} rayOrig
    * @param {RawVector} rayDir
    * @param {number} maxToi
    * @returns {boolean}
    */
    intersectsRay(shapePos, shapeRot, rayOrig, rayDir, maxToi) {
        _assertClass(shapePos, RawVector);
        _assertClass(shapeRot, RawRotation);
        _assertClass(rayOrig, RawVector);
        _assertClass(rayDir, RawVector);
        const ret = wasm.rawshape_intersectsRay(this.ptr, shapePos.ptr, shapeRot.ptr, rayOrig.ptr, rayDir.ptr, maxToi);
        return ret !== 0;
    }
    /**
    * @param {RawVector} shapePos
    * @param {RawRotation} shapeRot
    * @param {RawVector} rayOrig
    * @param {RawVector} rayDir
    * @param {number} maxToi
    * @param {boolean} solid
    * @returns {number}
    */
    castRay(shapePos, shapeRot, rayOrig, rayDir, maxToi, solid) {
        _assertClass(shapePos, RawVector);
        _assertClass(shapeRot, RawRotation);
        _assertClass(rayOrig, RawVector);
        _assertClass(rayDir, RawVector);
        const ret = wasm.rawshape_castRay(this.ptr, shapePos.ptr, shapeRot.ptr, rayOrig.ptr, rayDir.ptr, maxToi, solid);
        return ret;
    }
    /**
    * @param {RawVector} shapePos
    * @param {RawRotation} shapeRot
    * @param {RawVector} rayOrig
    * @param {RawVector} rayDir
    * @param {number} maxToi
    * @param {boolean} solid
    * @returns {RawRayIntersection | undefined}
    */
    castRayAndGetNormal(shapePos, shapeRot, rayOrig, rayDir, maxToi, solid) {
        _assertClass(shapePos, RawVector);
        _assertClass(shapeRot, RawRotation);
        _assertClass(rayOrig, RawVector);
        _assertClass(rayDir, RawVector);
        const ret = wasm.rawshape_castRayAndGetNormal(this.ptr, shapePos.ptr, shapeRot.ptr, rayOrig.ptr, rayDir.ptr, maxToi, solid);
        return ret === 0 ? undefined : RawRayIntersection.__wrap(ret);
    }
}
/**
*/
export class RawShapeColliderTOI {

    static __wrap(ptr) {
        const obj = Object.create(RawShapeColliderTOI.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawshapecollidertoi_free(ptr);
    }
    /**
    * @returns {number}
    */
    colliderHandle() {
        const ret = wasm.rawcharactercollision_handle(this.ptr);
        return ret;
    }
    /**
    * @returns {number}
    */
    toi() {
        const ret = wasm.rawcharactercollision_toi(this.ptr);
        return ret;
    }
    /**
    * @returns {RawVector}
    */
    witness1() {
        const ret = wasm.rawcharactercollision_worldWitness1(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    witness2() {
        const ret = wasm.rawshapecollidertoi_witness2(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    normal1() {
        const ret = wasm.rawcharactercollision_worldNormal1(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    normal2() {
        const ret = wasm.rawshapecollidertoi_normal2(this.ptr);
        return RawVector.__wrap(ret);
    }
}
/**
*/
export class RawShapeContact {

    static __wrap(ptr) {
        const obj = Object.create(RawShapeContact.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawshapecontact_free(ptr);
    }
    /**
    * @returns {number}
    */
    distance() {
        const ret = wasm.rawshapecontact_distance(this.ptr);
        return ret;
    }
    /**
    * @returns {RawVector}
    */
    point1() {
        const ret = wasm.rawkinematiccharactercontroller_computedMovement(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    point2() {
        const ret = wasm.rawcharactercollision_worldWitness1(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    normal1() {
        const ret = wasm.rawshapecollidertoi_witness2(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    normal2() {
        const ret = wasm.rawcharactercollision_worldNormal1(this.ptr);
        return RawVector.__wrap(ret);
    }
}
/**
*/
export class RawShapeTOI {

    static __wrap(ptr) {
        const obj = Object.create(RawShapeTOI.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawshapetoi_free(ptr);
    }
    /**
    * @returns {number}
    */
    toi() {
        const ret = wasm.rawintegrationparameters_dt(this.ptr);
        return ret;
    }
    /**
    * @returns {RawVector}
    */
    witness1() {
        const ret = wasm.rawshapetoi_witness1(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    witness2() {
        const ret = wasm.rawcontactforceevent_total_force(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    normal1() {
        const ret = wasm.rawshapetoi_normal1(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * @returns {RawVector}
    */
    normal2() {
        const ret = wasm.rawshapetoi_normal2(this.ptr);
        return RawVector.__wrap(ret);
    }
}
/**
* A vector.
*/
export class RawVector {

    static __wrap(ptr) {
        const obj = Object.create(RawVector.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rawvector_free(ptr);
    }
    /**
    * Creates a new vector filled with zeros.
    * @returns {RawVector}
    */
    static zero() {
        const ret = wasm.rawvector_zero();
        return RawVector.__wrap(ret);
    }
    /**
    * Creates a new 3D vector from its two components.
    *
    * # Parameters
    * - `x`: the `x` component of this 3D vector.
    * - `y`: the `y` component of this 3D vector.
    * - `z`: the `z` component of this 3D vector.
    * @param {number} x
    * @param {number} y
    * @param {number} z
    */
    constructor(x, y, z) {
        const ret = wasm.rawvector_new(x, y, z);
        return RawVector.__wrap(ret);
    }
    /**
    * The `x` component of this vector.
    * @returns {number}
    */
    get x() {
        const ret = wasm.rawintegrationparameters_dt(this.ptr);
        return ret;
    }
    /**
    * Sets the `x` component of this vector.
    * @param {number} x
    */
    set x(x) {
        wasm.rawintegrationparameters_set_dt(this.ptr, x);
    }
    /**
    * The `y` component of this vector.
    * @returns {number}
    */
    get y() {
        const ret = wasm.rawrotation_y(this.ptr);
        return ret;
    }
    /**
    * Sets the `y` component of this vector.
    * @param {number} y
    */
    set y(y) {
        wasm.rawvector_set_y(this.ptr, y);
    }
    /**
    * The `z` component of this vector.
    * @returns {number}
    */
    get z() {
        const ret = wasm.rawcharactercollision_toi(this.ptr);
        return ret;
    }
    /**
    * Sets the `z` component of this vector.
    * @param {number} z
    */
    set z(z) {
        wasm.rawintegrationparameters_set_erp(this.ptr, z);
    }
    /**
    * Create a new 3D vector from this vector with its components rearranged as `{x, y, z}`.
    *
    * This will effectively return a copy of `this`. This method exist for completeness with the
    * other swizzling functions.
    * @returns {RawVector}
    */
    xyz() {
        const ret = wasm.rawvector_xyz(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * Create a new 3D vector from this vector with its components rearranged as `{y, x, z}`.
    * @returns {RawVector}
    */
    yxz() {
        const ret = wasm.rawvector_yxz(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * Create a new 3D vector from this vector with its components rearranged as `{z, x, y}`.
    * @returns {RawVector}
    */
    zxy() {
        const ret = wasm.rawvector_zxy(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * Create a new 3D vector from this vector with its components rearranged as `{x, z, y}`.
    * @returns {RawVector}
    */
    xzy() {
        const ret = wasm.rawvector_xzy(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * Create a new 3D vector from this vector with its components rearranged as `{y, z, x}`.
    * @returns {RawVector}
    */
    yzx() {
        const ret = wasm.rawvector_yzx(this.ptr);
        return RawVector.__wrap(ret);
    }
    /**
    * Create a new 3D vector from this vector with its components rearranged as `{z, y, x}`.
    * @returns {RawVector}
    */
    zyx() {
        const ret = wasm.rawvector_zyx(this.ptr);
        return RawVector.__wrap(ret);
    }
}

async function load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function getImports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
        takeObject(arg0);
    };
    imports.wbg.__wbindgen_number_new = function(arg0) {
        const ret = arg0;
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_number_get = function(arg0, arg1) {
        const obj = getObject(arg1);
        const ret = typeof(obj) === 'number' ? obj : undefined;
        getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
        getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
    };
    imports.wbg.__wbindgen_boolean_get = function(arg0) {
        const v = getObject(arg0);
        const ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;
        return ret;
    };
    imports.wbg.__wbindgen_is_function = function(arg0) {
        const ret = typeof(getObject(arg0)) === 'function';
        return ret;
    };
    imports.wbg.__wbg_rawraycolliderintersection_new = function(arg0) {
        const ret = RawRayColliderIntersection.__wrap(arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_rawcontactforceevent_new = function(arg0) {
        const ret = RawContactForceEvent.__wrap(arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_call_168da88779e35f61 = function() { return handleError(function (arg0, arg1, arg2) {
        const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_call_3999bee59e9f7719 = function() { return handleError(function (arg0, arg1, arg2, arg3) {
        const ret = getObject(arg0).call(getObject(arg1), getObject(arg2), getObject(arg3));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_call_e1f72c051cdab859 = function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
        const ret = getObject(arg0).call(getObject(arg1), getObject(arg2), getObject(arg3), getObject(arg4));
        return addHeapObject(ret);
    }, arguments) };
    imports.wbg.__wbg_bind_10dfe70e95d2a480 = function(arg0, arg1, arg2, arg3) {
        const ret = getObject(arg0).bind(getObject(arg1), getObject(arg2), getObject(arg3));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_buffer_3f3d764d4747d564 = function(arg0) {
        const ret = getObject(arg0).buffer;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_newwithbyteoffsetandlength_d9aa266703cb98be = function(arg0, arg1, arg2) {
        const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_new_8c3f0052272a457a = function(arg0) {
        const ret = new Uint8Array(getObject(arg0));
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_83db9690f9353e79 = function(arg0, arg1, arg2) {
        getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    };
    imports.wbg.__wbg_length_9e1ae1900cb0fbd5 = function(arg0) {
        const ret = getObject(arg0).length;
        return ret;
    };
    imports.wbg.__wbg_newwithbyteoffsetandlength_be22e5fcf4f69ab4 = function(arg0, arg1, arg2) {
        const ret = new Float32Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_set_0e0314cf6675c1b9 = function(arg0, arg1, arg2) {
        getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    };
    imports.wbg.__wbg_length_9a2deed95d22668d = function(arg0) {
        const ret = getObject(arg0).length;
        return ret;
    };
    imports.wbg.__wbg_newwithlength_a7168e4a1e8f5e12 = function(arg0) {
        const ret = new Float32Array(arg0 >>> 0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };
    imports.wbg.__wbindgen_memory = function() {
        const ret = wasm.memory;
        return addHeapObject(ret);
    };

    return imports;
}

function initMemory(imports, maybe_memory) {

}

function finalizeInit(instance, module) {
    wasm = instance.exports;
    init.__wbindgen_wasm_module = module;
    cachedFloat32Memory0 = new Float32Array();
    cachedFloat64Memory0 = new Float64Array();
    cachedInt32Memory0 = new Int32Array();
    cachedUint32Memory0 = new Uint32Array();
    cachedUint8Memory0 = new Uint8Array();


    return wasm;
}

function initSync(module) {
    const imports = getImports();

    initMemory(imports);

    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }

    const instance = new WebAssembly.Instance(module, imports);

    return finalizeInit(instance, module);
}

async function init(input) {
    if (typeof input === 'undefined') {
        input = new URL('rapier_wasm3d_bg.wasm', "<deleted>");
    }
    const imports = getImports();

    if (typeof input === 'string' || (typeof Request === 'function' && input instanceof Request) || (typeof URL === 'function' && input instanceof URL)) {
        input = fetch(input);
    }

    initMemory(imports);

    const { instance, module } = await load(await input, imports);

    return finalizeInit(instance, module);
}

export { initSync }
export default init;
