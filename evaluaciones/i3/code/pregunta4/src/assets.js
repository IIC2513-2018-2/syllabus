let manifest;

try {
  // eslint-disable-next-line global-require
  manifest = require('../build/assets/manifest.json');
} catch (err) {

  // noop
}


module.exports = function assetsBuilder(developmentMode) {
  function assetPath(path) {
    return `/assets/${(!developmentMode && manifest && manifest[path]) || path}`;
  }
  return function assets(ctx, next) {
    ctx.state.assetPath = assetPath;
    return next();
  };
};
