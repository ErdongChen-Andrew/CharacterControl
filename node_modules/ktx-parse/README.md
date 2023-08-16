# ktx-parse

[![Latest NPM release](https://img.shields.io/npm/v/ktx-parse.svg)](https://www.npmjs.com/package/ktx-parse)
[![Minzipped size](https://badgen.net/bundlephobia/minzip/ktx-parse)](https://bundlephobia.com/result?p=ktx-parse)
[![License](https://img.shields.io/badge/license-MIT-007ec6.svg)](https://github.com/donmccurdy/KTX-Parse/blob/main/LICENSE)
[![CI](https://github.com/donmccurdy/KTX-parse/workflows/CI/badge.svg?branch=main&event=push)](https://github.com/donmccurdy/KTX-parse/actions?query=workflow%3ACI)
[![Coverage](https://codecov.io/gh/donmccurdy/KTX-Parse/branch/main/graph/badge.svg?token=S30LCC3L04)](https://codecov.io/gh/donmccurdy/KTX-Parse)

*KTX 2.0 (.ktx2) parser and serializer.*

## Quickstart

Install:

```
npm install --save ktx-parse
```

Import:

```js
import { read, write } from 'ktx-parse';
```

Usage:

```js
// Parse texture container from file:
const container = read(data /* ← Uint8Array or Buffer */);

// Write texture container to file:
const data = write(container); // → Uint8Array
```

See API documentation for more details:

- [`KTX2Container`](./docs/classes/KTX2Container.md)
- [`read(byteArray)`](./docs/modules.md#read)
- [`write(container)`](./docs/modules.md#write)

## Encoding / Decoding

KTX-Parse reads/writes KTX 2.0 containers, and provides access to the compressed texture data within the container. To decompress that texture data, or to compress existing texture data into GPU texture formats used by KTX 2.0, you'll need to use additional libraries such as encoders or transcoders.

**Encoding:**

Encoding GPU textures is a slow process, and should be completed at development/authoring time so that the compressed texture can be transmitted to the viewing device. GPU textures require much less GPU memory than image formats like PNG or JPEG, and can be uploaded to the GPU quickly with less impact on framerate. GPU textures can also have smaller filesizes in many, but not all, cases. See the [Basis documentation](https://github.com/BinomialLLC/basis_universal/) for details on this process.

The following tools may be used to produce Basis Universal compressed textures in KTX 2.0 (`.ktx2`) containers, which `ktx-parse` can then read or edit:

- [BinomialLLC/basis_universal](https://github.com/BinomialLLC/basis_universal/) CLI, C++, and WebAssembly encoders
- [KhronosGroup/KTX-Software](https://github.com/KhronosGroup/KTX-Software) CLI, C++, and WebAssembly encoders

**Transcoding / Decoding:**

Basis Universal texture formats (ETC1S and UASTC) cannot be directly read by a GPU, but are designed to be very efficiently rewritten into many of the specific GPU texture formats that different GPUs require. This process is called _transcoding_, and typically happens on the viewing device after a target output format (e.g. ETC1, ASTC, BC1, ...) is chosen. These transcoders can also fully _decode_ texture data to uncompressed RGBA formats, if raw pixel data is required.

- [BinomialLLC/basis_universal](https://github.com/BinomialLLC/basis_universal/) provides official C++ and WebAssembly transcoders, which support all Basis Universal input formats and can transcode to any output format (with appropriate compilation flags). With common settings, a transcoder will likely be > 200kb on web. This transcoder can read KTX 2.0 files directly.
- [KhronosGroup/Universal-Texture-Transcoders](https://github.com/KhronosGroup/Universal-Texture-Transcoders) provides very small, fast WebAssembly transcoders each supporting only a single output texture format. Each transcoder is roughly 10-20kb, and the viewing device can choose which transcoder to download, as appropriate. These transcoders cannot read KTX 2.0 files directly. Instead, unpack the KTX 2.0 files with `ktx-parse` first, then transcode the mip levels using a low-level transcoder. *Only UASTC texture formats currently supported.*

