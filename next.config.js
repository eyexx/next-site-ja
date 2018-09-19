const rehypePrism = require('@mapbox/rehype-prism');
const withMDX = require('@zeit/next-mdx')({
  options: {
    hastPlugins: [rehypePrism]
  }
});

const { mapping: showcaseMapping } = require('./showcase-manifest');
const webpack = require('webpack');

var config = {
  pageExtensions: ['jsx', 'js', 'mdx'],
  webpack: config => {
    config.plugins = config.plugins || [];
    config.plugins.push(
      new webpack.ContextReplacementPlugin(
        /highlight\.js[\/\\]lib[\/\\]languages$/,
        new RegExp(`^./(${['javascript', 'json', 'xml'].join('|')})$`)
      )
    );
    return config;
  },
  exportPathMap(defaultPathMap) {
    for (const route of Object.keys(showcaseMapping)) {
      defaultPathMap[`/showcase/${route}`] = {
        page: '/showcase',
        query: { item: route, from: 'url' }
      };
    }
    return defaultPathMap;
  }
};

if (process.env.BUNDLE_ANALYZE) {
  const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
  config = withBundleAnalyzer({
    analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: '../../bundles/server.html'
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: '../bundles/client.html'
      }
    },
    ...config
  });
}

module.exports = withMDX(config);
