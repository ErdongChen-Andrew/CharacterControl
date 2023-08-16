import _extends from '@babel/runtime/helpers/esm/extends';
import * as React from 'react';
import { Vector3, Vector2, Color } from 'three';
import { useThree } from '@react-three/fiber';
import { LineSegments2, Line2, LineMaterial, LineSegmentsGeometry, LineGeometry } from 'three-stdlib';

const Line = /*#__PURE__*/React.forwardRef(function Line({
  points,
  color = 'black',
  vertexColors,
  linewidth,
  lineWidth,
  segments,
  dashed,
  ...rest
}, ref) {
  const size = useThree(state => state.size);
  const line2 = React.useMemo(() => segments ? new LineSegments2() : new Line2(), [segments]);
  const [lineMaterial] = React.useState(() => new LineMaterial());
  const lineGeom = React.useMemo(() => {
    const geom = segments ? new LineSegmentsGeometry() : new LineGeometry();
    const pValues = points.map(p => {
      const isArray = Array.isArray(p);
      return p instanceof Vector3 ? [p.x, p.y, p.z] : p instanceof Vector2 ? [p.x, p.y, 0] : isArray && p.length === 3 ? [p[0], p[1], p[2]] : isArray && p.length === 2 ? [p[0], p[1], 0] : p;
    });
    geom.setPositions(pValues.flat());

    if (vertexColors) {
      const cValues = vertexColors.map(c => c instanceof Color ? c.toArray() : c);
      geom.setColors(cValues.flat());
    }

    return geom;
  }, [points, segments, vertexColors]);
  React.useLayoutEffect(() => {
    line2.computeLineDistances();
  }, [points, line2]);
  React.useLayoutEffect(() => {
    if (dashed) {
      lineMaterial.defines.USE_DASH = '';
    } else {
      // Setting lineMaterial.defines.USE_DASH to undefined is apparently not sufficient.
      delete lineMaterial.defines.USE_DASH;
    }

    lineMaterial.needsUpdate = true;
  }, [dashed, lineMaterial]);
  React.useEffect(() => {
    return () => lineGeom.dispose();
  }, [lineGeom]);
  return /*#__PURE__*/React.createElement("primitive", _extends({
    object: line2,
    ref: ref
  }, rest), /*#__PURE__*/React.createElement("primitive", {
    object: lineGeom,
    attach: "geometry"
  }), /*#__PURE__*/React.createElement("primitive", _extends({
    object: lineMaterial,
    attach: "material",
    color: color,
    vertexColors: Boolean(vertexColors),
    resolution: [size.width, size.height],
    linewidth: linewidth !== null && linewidth !== void 0 ? linewidth : lineWidth,
    dashed: dashed
  }, rest)));
});

export { Line };
