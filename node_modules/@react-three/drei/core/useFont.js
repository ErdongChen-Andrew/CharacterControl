import { FontLoader } from 'three-stdlib';
import { suspend, preload, clear } from 'suspend-react';

let fontLoader = null;

async function loader(font) {
  if (!fontLoader) fontLoader = new FontLoader();
  let data = typeof font === 'string' ? await (await fetch(font)).json() : font;
  return fontLoader.parse(data);
}

function useFont(font) {
  return suspend(loader, [font]);
}

useFont.preload = font => preload(loader, [font]);

useFont.clear = font => clear([font]);

export { useFont };
