"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const THREE = require("three");
class STLExporter {
  constructor() {
    __publicField(this, "binary");
    __publicField(this, "output");
    __publicField(this, "offset");
    __publicField(this, "objects");
    __publicField(this, "triangles");
    __publicField(this, "vA");
    __publicField(this, "vB");
    __publicField(this, "vC");
    __publicField(this, "cb");
    __publicField(this, "ab");
    __publicField(this, "normal");
    this.binary = false;
    this.output = "";
    this.offset = 80;
    this.objects = [];
    this.triangles = 0;
    this.vA = new THREE.Vector3();
    this.vB = new THREE.Vector3();
    this.vC = new THREE.Vector3();
    this.cb = new THREE.Vector3();
    this.ab = new THREE.Vector3();
    this.normal = new THREE.Vector3();
  }
  parse(scene, options) {
    this.binary = options.binary !== void 0 ? options.binary : false;
    scene.traverse((object) => {
      if (object instanceof THREE.Mesh && object.isMesh) {
        const geometry = object.geometry;
        if (!geometry.isBufferGeometry) {
          throw new Error("THREE.STLExporter: Geometry is not of type THREE.BufferGeometry.");
        }
        const index = geometry.index;
        const positionAttribute = geometry.getAttribute("position");
        this.triangles += index !== null ? index.count / 3 : positionAttribute.count / 3;
        this.objects.push({
          object3d: object,
          geometry
        });
      }
    });
    if (this.binary) {
      const bufferLength = this.triangles * 2 + this.triangles * 3 * 4 * 4 + 80 + 4;
      const arrayBuffer = new ArrayBuffer(bufferLength);
      this.output = new DataView(arrayBuffer);
      this.output.setUint32(this.offset, this.triangles, true);
      this.offset += 4;
    } else {
      this.output = "";
      this.output += "solid exported\n";
    }
    for (let i = 0, il = this.objects.length; i < il; i++) {
      const object = this.objects[i].object3d;
      const geometry = this.objects[i].geometry;
      const index = geometry.index;
      const positionAttribute = geometry.getAttribute("position");
      if (object instanceof THREE.SkinnedMesh) {
        if (index !== null) {
          for (let j = 0; j < index.count; j += 3) {
            const a = index.getX(j + 0);
            const b = index.getX(j + 1);
            const c = index.getX(j + 2);
            this.writeFace(a, b, c, positionAttribute, object);
          }
        } else {
          for (let j = 0; j < positionAttribute.count; j += 3) {
            const a = j + 0;
            const b = j + 1;
            const c = j + 2;
            this.writeFace(a, b, c, positionAttribute, object);
          }
        }
      }
    }
    if (!this.binary) {
      this.output += "endsolid exported\n";
    }
    return this.output;
  }
  writeFace(a, b, c, positionAttribute, object) {
    this.vA.fromBufferAttribute(positionAttribute, a);
    this.vB.fromBufferAttribute(positionAttribute, b);
    this.vC.fromBufferAttribute(positionAttribute, c);
    if (object.isSkinnedMesh) {
      object.boneTransform(a, this.vA);
      object.boneTransform(b, this.vB);
      object.boneTransform(c, this.vC);
    }
    this.vA.applyMatrix4(object.matrixWorld);
    this.vB.applyMatrix4(object.matrixWorld);
    this.vC.applyMatrix4(object.matrixWorld);
    this.writeNormal(this.vA, this.vB, this.vC);
    this.writeVertex(this.vA);
    this.writeVertex(this.vB);
    this.writeVertex(this.vC);
    if (this.binary && this.output instanceof DataView) {
      this.output.setUint16(this.offset, 0, true);
      this.offset += 2;
    } else {
      this.output += "		endloop\n";
      this.output += "	endfacet\n";
    }
  }
  writeNormal(vA, vB, vC) {
    this.cb.subVectors(vC, vB);
    this.ab.subVectors(vA, vB);
    this.cb.cross(this.ab).normalize();
    this.normal.copy(this.cb).normalize();
    if (this.binary && this.output instanceof DataView) {
      this.output.setFloat32(this.offset, this.normal.x, true);
      this.offset += 4;
      this.output.setFloat32(this.offset, this.normal.y, true);
      this.offset += 4;
      this.output.setFloat32(this.offset, this.normal.z, true);
      this.offset += 4;
    } else {
      this.output += `	facet normal ${this.normal.x} ${this.normal.y} ${this.normal.z}
`;
      this.output += "		outer loop\n";
    }
  }
  writeVertex(vertex) {
    if (this.binary && this.output instanceof DataView) {
      this.output.setFloat32(this.offset, vertex.x, true);
      this.offset += 4;
      this.output.setFloat32(this.offset, vertex.y, true);
      this.offset += 4;
      this.output.setFloat32(this.offset, vertex.z, true);
      this.offset += 4;
    } else {
      this.output += `			vertex vertex.x vertex.y vertex.z
`;
    }
  }
}
exports.STLExporter = STLExporter;
