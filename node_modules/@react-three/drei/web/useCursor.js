import * as React from 'react';

function useCursor(hovered, onPointerOver = 'pointer', onPointerOut = 'auto') {
  React.useEffect(() => {
    if (hovered) {
      document.body.style.cursor = onPointerOver;
      return () => void (document.body.style.cursor = onPointerOut);
    }
  }, [hovered]);
}

export { useCursor };
