const { execSync } = require('child_process');
const core = require('@actions/core');
const github = require('@actions/github');
const slugify = require('slugify');

const { context } = github;

const branch = (context.ref && context.ref.replace('refs/heads/', '')) || 'unknown';

core.exportVariable('GITHUB_REF_SLUG_URL', slugify(branch));
