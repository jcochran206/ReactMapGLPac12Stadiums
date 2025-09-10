module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Exclude mapbox-gl from transpilation to prevent WebWorker bundle issues
      const rule = webpackConfig.module.rules.find(rule => rule.oneOf);
      if (rule) {
        rule.oneOf.unshift({
          test: /\.js$/,
          include: /node_modules\/mapbox-gl/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-class-properties'],
            },
          },
        });
      }
      
      return webpackConfig;
    },
  },
};
