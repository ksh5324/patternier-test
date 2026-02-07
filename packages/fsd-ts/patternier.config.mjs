import { definePatternConfig } from "patternier";

export const config = definePatternConfig({
  extends: "../../patternier.base.config.mjs",
  rootDir: "src",
  layers: {
    order: ["app", "pages", "widgets", "features", "entities", "shared"],
    sliceLayers: ["features", "entities", "widgets"],
  },
  rules: {
    // "@patternier/model-no-presentation": "error"
  }
});
