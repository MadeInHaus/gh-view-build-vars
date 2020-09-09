const { execSync } = require('child_process');
const core = require('@actions/core');
const github = require('@actions/github');
const slugify = require('slugify');

const { context } = github;
const project_name = core.getInput('project_name', { required: true });

const branch = (context.ref && context.ref.replace('refs/heads/', '')) || 'unknown';
const branch_slug = slugify(branch);

core.debug(`branch: ${branch}`);

core.exportVariable('GITHUB_REF_SLUG_URL', branch_slug);
core.exportVariable('PROJECT_BRANCH_SLUG', `${project_name}-${branch_slug}`);
