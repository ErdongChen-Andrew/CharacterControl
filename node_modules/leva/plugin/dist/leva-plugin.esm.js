import { E as useStoreContext, R as Row, L as Label, P as Portal, O as Overlay, a8 as String, a9 as Number, aa as Boolean, ab as Select, a as Vector, ac as InnerLabel } from '../../dist/vector-plugin-6f82aee9.esm.js';
export { a2 as LevaInputs, v as SpecialInputs, h as clamp, ag as createPlugin, U as debounce, ae as evaluate, al as formatVector, g as getVectorPlugin, ai as getVectorSchema, aj as getVectorType, j as invertedRange, ah as keyframes, af as mergeRefs, n as normalizeKeyedNumberSettings, am as normalizeVector, ad as pad, r as range, ak as sanitizeVector, s as styled, F as useCanvas2d, e as useDrag, G as useInput, u as useInputContext, A as useInputSetters, E as useStoreContext, d as useTh, b as useTransform } from '../../dist/vector-plugin-6f82aee9.esm.js';
export { colord } from 'colord';
export { dequal } from 'dequal/lite';
import 'react';
import shallow from 'zustand/shallow';
import 'react-dom';
import '@radix-ui/react-portal';
import 'v8n';
import '@stitches/react';
import '@use-gesture/react';
import '@radix-ui/react-tooltip';

const useValue = path => {
  return useValues([path])[path];
};
const useValues = paths => {
  const store = useStoreContext();
  const value = store.useStore(({
    data
  }) => paths.reduce((acc, path) => {
    if (data[path] && 'value' in data[path]) return Object.assign(acc, {
      [path]: data[path].value
    });
    return acc;
  }, {}), shallow);
  return value;
};

const Components = {
  Row,
  Label,
  Portal,
  Overlay,
  String,
  Number,
  Boolean,
  Select,
  Vector,
  InnerLabel
};

export { Components, useValue, useValues };
