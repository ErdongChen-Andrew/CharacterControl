(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('zustand')) :
  typeof define === 'function' && define.amd ? define(['react', 'zustand'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.zustandContext = factory(global.React, global.zustand));
})(this, (function (react, zustand) { 'use strict';

  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }

  function createContext() {
    {
      console.warn("[DEPRECATED] `context` will be removed in a future version. Instead use `import { createStore, useStore } from 'zustand'`. See: https://github.com/pmndrs/zustand/discussions/1180.");
    }
    var ZustandContext = react.createContext(undefined);
    var Provider = function Provider(_ref) {
      var createStore = _ref.createStore,
        children = _ref.children;
      var storeRef = react.useRef();
      if (!storeRef.current) {
        storeRef.current = createStore();
      }
      return react.createElement(ZustandContext.Provider, {
        value: storeRef.current
      }, children);
    };
    var useContextStore = function useContextStore(selector, equalityFn) {
      var store = react.useContext(ZustandContext);
      if (!store) {
        throw new Error('Seems like you have not used zustand provider as an ancestor.');
      }
      return zustand.useStore(store, selector, equalityFn);
    };
    var useStoreApi = function useStoreApi() {
      var store = react.useContext(ZustandContext);
      if (!store) {
        throw new Error('Seems like you have not used zustand provider as an ancestor.');
      }
      return react.useMemo(function () {
        return _extends({}, store);
      }, [store]);
    };
    return {
      Provider: Provider,
      useStore: useContextStore,
      useStoreApi: useStoreApi
    };
  }

  return createContext;

}));
