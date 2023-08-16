(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('zustand/vanilla'), require('react'), require('use-sync-external-store/shim/with-selector')) :
  typeof define === 'function' && define.amd ? define(['exports', 'zustand/vanilla', 'react', 'use-sync-external-store/shim/with-selector'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.zustand = {}, global.zustandVanilla, global.React, global.useSyncExternalStoreShimWithSelector));
})(this, (function (exports, vanilla, react$1, useSyncExternalStoreExports) { 'use strict';

  var useSyncExternalStoreWithSelector = useSyncExternalStoreExports.useSyncExternalStoreWithSelector;
  function useStore(api, selector, equalityFn) {
    if (selector === void 0) {
      selector = api.getState;
    }
    var slice = useSyncExternalStoreWithSelector(api.subscribe, api.getState, api.getServerState || api.getState, selector, equalityFn);
    react$1.useDebugValue(slice);
    return slice;
  }
  var createImpl = function createImpl(createState) {
    if (typeof createState !== 'function') {
      console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
    }
    var api = typeof createState === 'function' ? vanilla.createStore(createState) : createState;
    var useBoundStore = function useBoundStore(selector, equalityFn) {
      return useStore(api, selector, equalityFn);
    };
    Object.assign(useBoundStore, api);
    return useBoundStore;
  };
  var create = function create(createState) {
    return createState ? createImpl(createState) : createImpl;
  };
  var react = (function (createState) {
    {
      console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`.");
    }
    return create(createState);
  });

  exports.create = create;
  exports.default = react;
  exports.useStore = useStore;
  Object.keys(vanilla).forEach(function (k) {
    if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
      enumerable: true,
      get: function () { return vanilla[k]; }
    });
  });

  Object.defineProperty(exports, '__esModule', { value: true });

}));
