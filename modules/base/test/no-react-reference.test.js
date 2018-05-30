/* eslint global-require: off, import/no-nodejs-modules: off */

import fs from 'fs';
import path from 'path';

import index from '../';

describe('ESLint Rules', () => {
  describe('No React references', () => {
    // Maps fileId => ESLint Config
    const eslintConfigMap = getAllEslintConfigs();

    Object.keys(eslintConfigMap).forEach((fileId) => {
      describe(`rules definition [${fileId}]`, () => {
        it('should not reference react at all', () => {
          const eslintConfig = eslintConfigMap[fileId];

          expect(hasReactPlugin(eslintConfig)).toBe(false);
          expect(hasReactRule(eslintConfig)).toBe(false);
        });
      });
    });
  });
});

function getAllEslintConfigs() {
  const files = { ...{ index } };

  fs.readdirSync(path.join(__dirname, '../rules')).forEach((name) => {
    // eslint-disable-next-line import/no-dynamic-require
    files[name] = require(`../rules/${name}`);
  });

  return files;
}

/**
 * Check that ESLint config `rules` definition does not reference
 * any react rules at all which are rules starting with `react/`.
 */
function hasReactRule(eslintConfig) {
  return (
    Object.keys(eslintConfig.rules).filter(
      (ruleId) => ruleId.indexOf('react/') === 0,
    ).length > 0
  );
}

/**
 * Check that ESLint config `plugins` definition does not reference
 * react plugin at all.
 */
function hasReactPlugin(eslintConfig) {
  return (
    Object.prototype.hasOwnProperty.call(eslintConfig, 'plugins') &&
    eslintConfig.plugins.indexOf('react') !== -1
  );
}
