import { definePatternConfig } from "patternier";

export const config = definePatternConfig({
  type: "fsd",
  rootDir: "src",
  rules: {
    "@patternier/no-layer-to-higher-import": "error",
    "@patternier/no-cross-slice-import": "error",
    "@patternier/ui-no-side-effects": "error",
    "@patternier/slice-no-usage": "error",
    "@patternier/segment-no-usage": "error",
    "@patternier/model-no-presentation": "error",
    "@patternier/use-client-only-ui": "error",
    "@patternier/no-deep-import": "error"
  }
});
