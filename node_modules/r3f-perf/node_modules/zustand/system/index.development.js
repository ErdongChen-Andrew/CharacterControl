System.register(['zustand/vanilla', 'react', 'use-sync-external-store/shim/with-selector'], (function (exports) {
  'use strict';
  var _starExcludes = {
    create: 1,
    default: 1,
    useStore: 1
  };
  var createStore, useDebugValue, useSyncExternalStoreExports;
  return {
    setters: [function (module) {
      createStore = module.createStore;
      var setter = {};
      for (var name in module) {
        if (!_starExcludes[name]) setter[name] = module[name];
      }
      exports(setter);
    }, function (module) {
      useDebugValue = module.useDebugValue;
    }, function (module) {
      useSyncExternalStoreExports = module.default;
    }],
    execute: (function () {

      exports('useStore', useStore);

      const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;
      function useStore(api, selector = api.getState, equalityFn) {
        const slice = useSyncExternalStoreWithSelector(
          api.subscribe,
          api.getState,
          api.getServerState || api.getState,
          selector,
          equalityFn
        );
        useDebugValue(slice);
        return slice;
      }
      const createImpl = (createState) => {
        if (typeof createState !== "function") {
          console.warn(
            "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
          );
        }
        const api = typeof createState === "function" ? createStore(createState) : createState;
        const useBoundStore = (selector, equalityFn) => useStore(api, selector, equalityFn);
        Object.assign(useBoundStore, api);
        return useBoundStore;
      };
      const create = exports('create', (createState) => createState ? createImpl(createState) : createImpl);
      var react = exports('default', (createState) => {
        {
          console.warn(
            "[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."
          );
        }
        return create(createState);
      });

    })
  };
}));
