import path from "path";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { DefinePlugin } from "webpack";

export default ({ config }) => {
  config.resolve.modules.push(path.resolve(__dirname, "..", "..", "src"));

  config.resolve.extensions.push(".ts", ".tsx");

  config.module.rules.push(buildCssLoader(true));

  const imageRule = config.module.rules.find((rule) =>
    rule?.["test"]?.test(".svg")
  );
  if (imageRule) {
    imageRule["exclude"] = /\.svg$/;
  }

  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  config.plugins.push(
    new DefinePlugin({
      IS_DEV: JSON.stringify(true),
      API: JSON.stringify(""),
      PROJECT: JSON.stringify("storybook"),
    })
  );

  return config;
};
