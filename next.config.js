const path = require('path')
const withOptimizedImages = require('next-optimized-images');
module.exports = {
  assetPrefix: '/villanueva-salud-integral/',
  basePath: '/villanueva-salud-integral',
  images: {
    loader: 'akamai',
    path: '',
  },
};