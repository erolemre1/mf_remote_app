// // const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

// // module.exports = {
// //   webpack(config) {
// //     config.plugins.push(
// //       new NextFederationPlugin({
// //         name: 'remote_app',
// //         filename: 'static/chunks/remoteEntry.js',
// //         exposes: {
// //           './RemoteComponent': './src/components/RemoteComponent',
// //           './RemoteFullApp': './src/pages/index.jsx',
// //         },
// //         shared: {
// //           react: { singleton: true },
// //           'react-dom': { singleton: true },
// //         },
// //       })
// //     );
// //     return config;
// //   },
// // };


// // const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

// // module.exports = {
// //   reactStrictMode: true,
// //   webpack(config, options) {
// //     config.plugins.push(
// //       new NextFederationPlugin({
// //         name: 'remoteApp',
// //         filename: 'static/chunks/remoteEntry.js',
// //         exposes: {
// //           './RemoteComponent': './src/components/RemoteComponent',
// //         },
// //         shared: {
// //           react: { singleton: true, requiredVersion: false },
// //           'react-dom': { singleton: true, requiredVersion: false },
// //         },
// //       })
// //     );
// //     return config;
// //   },
// // };











// /// bundle cıkartma remote

// // const path = require('path');

// // module.exports = {
// //   mode: 'development',
// //   entry: './client.js',
// //   output: {
// //     path: path.resolve(__dirname, 'public'),
// //     filename: 'client.bundle.js',
// //   },
// //   resolve: {
// //     extensions: ['.js', '.jsx'],
// //   },
// //   module: {
// //     rules: [
// //       {
// //         test: /\.jsx?$/,
// //         exclude: /node_modules/,
// //         use: 'babel-loader',
// //       },
// //     ],
// //   },
// // };




// //// render bundle webpack try 

// const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
// const deps = require('./package.json').dependencies;

// module.exports = {
//   reactStrictMode: true,
//   webpack(config, options) {
//     const isServer = options.isServer;

//     if (!isServer) {
//       config.plugins.push(
//         new NextFederationPlugin({
//           name: 'remote_app',
//           filename: 'public/client.bundle.js',
//           exposes: {
//             './RemoteComponent': './src/components/RemoteComponent',
//             './RemoteFullApp': './src/pages/index.jsx',
//           },
//           shared: {
//             react: { singleton: true, eager: true, requiredVersion: deps.react },
//             'react-dom': { singleton: true, eager: true, requiredVersion: deps['react-dom'] },
//           },
//         })
//       );
//     }

//     return config;
//   },
// };
