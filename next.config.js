/** @type {import('next').NextConfig} */
/* eslint-disable @typescript-eslint/no-var-requires */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options
    config.plugins.push(
      new NextFederationPlugin({
        name: 'product',
        remotes: {
          navbar: `navbar@http://localhost:3001/remoteEntry.js`,
          documents: `documents@http://localhost:3002/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {},
        shared:  [ 'react', 'react-dom', '@emotion/react' ],
      })
    )
    return config
  }
}

module.exports = nextConfig
