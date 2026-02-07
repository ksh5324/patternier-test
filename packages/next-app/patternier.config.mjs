import { definePatternConfig } from "patternier";

export const config = definePatternConfig({
  extends: "../../patternier.base.config.mjs",
  rootDir: ".",
  rules: {
    "@patternier/use-client-only-ui": "error"
  }
});
