const { execSync } = require('child_process');
const core = require('@actions/core');
const github = require('@actions/github');
const slugify = require('slugify');

const { context } = github;
const project_name = core.getInput('project_name', { required: true });

const branch = (context.ref && context.ref.replace('refs/heads/', '')) || 'unknown';
const branch_slug = slugify(branch);
core.debug(`branch: ${branch}`);
core.debug(`branch_slug: ${branch_slug}`);
core.exportVariable('HAUS_BRANCH_SLUG', branch_slug);
core.setOutput('branch_slug', branch_slug);

const project_name_slug = slugify(project_name);
core.debug(`project_name: ${project_name}`);
core.debug(`project_name_slug: ${project_name_slug}`);
core.exportVariable('HAUS_PROJECT_NAME_SLUG', project_name_slug);
core.setOutput('project_name_slug', project_name_slug);

const project_name_branch_slug = `${project_name}-${branch_slug}`;
core.debug(`project_name_branch_slug: ${project_name_branch_slug}`);
core.exportVariable('HAUS_PROJECT_NAME_BRANCH_SLUG', project_name_branch_slug);
core.setOutput('project_name_branch_slug', project_name_branch_slug);
