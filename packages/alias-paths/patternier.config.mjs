import { definePatternConfig } from "patternier";

export const config = definePatternConfig({
  extends: "../../patternier.base.config.mjs",
  rootDir: "src",
  rules: {
    "@patternier/no-layer-to-higher-import": "error"
  }
});
