"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("detect-gpu"),t=require("suspend-react");exports.useDetectGPU=r=>t.suspend((()=>e.getGPUTier(r)),["useDetectGPU"]);
