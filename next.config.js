const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src")],
  },
  webpack(config) {
    config.module.rules.push({
      // issuer: {
      //   test: /\.(js|ts)x?$/,
      // },
      test: /\.html$/,
      use: ["html-loader"],
    });

    config.module.rules.push({
      // issuer: {
      //   test: /\.(js|ts)x?$/,
      // },
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });

    return config;
  },
};
