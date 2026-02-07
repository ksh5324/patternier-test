import { definePatternConfig } from "patternier";

export const config = definePatternConfig({
  type: "fsd",
  rootDir: ".",
  rules: {
    "@patternier/no-cross-slice-import": "error",
    "@patternier/no-deep-import": "error",
    "@patternier/slice-no-usage": "error",
    "@patternier/segment-no-usage": "error",
  },
});
