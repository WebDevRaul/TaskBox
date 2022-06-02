const withTM = require("next-transpile-modules")([
  "@mui/material",
  "@mui/system"
]); // pass the modules you would like to see transpiled

module.exports = withTM({
  reactStrictMode: true,
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@mui/styled-engine": "@mui/styled-engine-sc"
    };
    return config;
  }
});
