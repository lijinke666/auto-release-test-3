module.exports = {
  branches: [
    'master',
    { name: 'beta', channel: 'beta', prerelease: true },
    { name: 'alpha', channel: 'alpha', prerelease: true },
    { name: 'next', channel: 'next' },
  ],
  extends: 'semantic-release-monorepo',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        message: 'chore(release): 🤖 ${nextRelease.gitTag} [skip ci]',
      },
    ],
    '@semantic-release/github',
  ],
  preset: 'angular',
};
