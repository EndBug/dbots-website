import semver from 'semver';
import DocsSource from './DocsSource';

const branchBlacklist = new Set(['docs', 'webpack', 'v8']);
export default new DocsSource({
  id: 'main',
  name: 'Main library',
  global: 'dbots',
  repo: 'Snazzah/dbots.js',
  defaultTag: 'v1.3.0',
  branchFilter: branch => !branchBlacklist.has(branch) && !branch.startsWith('dependabot/'),
  tagFilter: tag => semver.gt(tag.replace(/^v/, ''), '1.3.0'),
});
