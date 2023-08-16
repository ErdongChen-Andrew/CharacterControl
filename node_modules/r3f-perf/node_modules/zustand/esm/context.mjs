import { createContext as createContext$1, useRef, createElement, useContext, useMemo } from 'react';
import { useStore } from 'zustand';

function createContext() {
  if ((import.meta.env && import.meta.env.MODE) !== "production") {
    console.warn(
      "[DEPRECATED] `context` will be removed in a future version. Instead use `import { createStore, useStore } from 'zustand'`. See: https://github.com/pmndrs/zustand/discussions/1180."
    );
  }
  const ZustandContext = createContext$1(void 0);
  const Provider = ({
    createStore,
    children
  }) => {
    const storeRef = useRef();
    if (!storeRef.current) {
      storeRef.current = createStore();
    }
    return createElement(
      ZustandContext.Provider,
      { value: storeRef.current },
      children
    );
  };
  const useContextStore = (selector, equalityFn) => {
    const store = useContext(ZustandContext);
    if (!store) {
      throw new Error(
        "Seems like you have not used zustand provider as an ancestor."
      );
    }
    return useStore(
      store,
      selector,
      equalityFn
    );
  };
  const useStoreApi = () => {
    const store = useContext(ZustandContext);
    if (!store) {
      throw new Error(
        "Seems like you have not used zustand provider as an ancestor."
      );
    }
    return useMemo(() => ({ ...store }), [store]);
  };
  return {
    Provider,
    useStore: useContextStore,
    useStoreApi
  };
}

export { createContext as default };
