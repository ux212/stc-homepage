module.exports = {
  reactStrictMode: true,
  styledComponents: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: { loader: "@svgr/webpack", options: { svgo: false } },
    });
    return config;
  },
};