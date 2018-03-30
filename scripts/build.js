const Rsync = require('rsync');
const rimraf = require('rimraf');
const npmlog = require('npmlog');

// Build source for deployment
// 1. remove current dist folder
// 2. take all public except test folder and put it in dist

// Remove old dist to make way for the new build
const removeOldBuildFromDist = () =>
  new Promise((resolve, reject) => {
    rimraf('./dist/*', (err) => {
      if (err) reject(err);
      resolve();
    });
  });

const copyNewBuildToDist = () =>
  new Promise((resolve, reject) => {
    new Rsync()
    .source('./public/*')
    .exclude('tests')
    .destination('./dist')
    .flags('a') // archive mode
    .execute((executeError) => {
      if (executeError) reject(executeError);
      else {
        resolve();
      }
    });
  });

// NOTE: This is ran after webpack build. Copy over extra things necessary
// for deployment and clean up.
removeOldBuildFromDist()
  .then(() => copyNewBuildToDist())
  .then(() => {
    npmlog.info('Successfully built new version of Tic Tac Toe!');
  })
  .catch((e) => {
    npmlog.error(e);
  });
