# About

This is a template repository using the [common-lib-vue](https://www.npmjs.com/package/common-lib-vue) package to bootstrap a styled form. It includes:
- A boilerplate vuejs application
- A dockerfile to serve the web app with nginx 
- A helm chart to run on a kubernetes cluster

# Contents

- [About](#About)
- [Front End](#front-end)
  - [Overview](#overview)
  - [Testing](#testing)
  - [Linting](#linting)
- [Backend](#back-end)
- [DevOps](#devops)

# Front End

## Overview

This example uses vue 3 with the composition API. It also relies heavily on:

- [Pinia]() for a data store
- [Vuelidate]() for form validations

There are two form flows, one small user information form (see [views/familyInformation](src/views/family-information/)) and a random filler form ([views/random](src/views/random/)). Each main flow has a corresponding set of stores and routes. See the given folders for examples.

## Testing

Unit tests for this application are run using [vitest](https://vitest.dev/) and [vue-test-utils](https://test-utils.vuejs.org/guide/). They can be run with:
``` sh
npm run test:unit
```

Integration testing uses [cypress](https://www.cypress.io/) and can be run with:

``` sh
npm run test:e2e
```

Default tests exist to demonstrate configuration, e.g adding a store and router mock.

## Linting

Linting relies on [eslint](https://eslint.org/), and a number of rules are added into the [.eslintrc.js](.eslintrc.js) specific to vue sfc styling. There are recommended extensions in the [vscode](.vscode/extensions.json) folder that will help with using the tools in a vscode editor, as well as some useful workspace settings.

# Back End

There is a very basic [nginx configuration file](nginx.conf) that is used to build a single container with a server included. The configuration can be extended if needed, or a separate server could be used. See the [Dockerfile](Dockerfile) for container details.

# DevOps

## Continuous Integration

A number of github actions are setup to run when integrating code. These include running unit tests, integration tests, linters and type checkers whenever new code is pushed. To run these actions locally, you can add pre-commit hooks with `husky install`. When merging to the main branch, the package version will be automatically bumped and a tag created to allow for easy releases. 

## Continuos Deployment

Once a set of changes merged to main are ready to release, create a new release from the github UI to deploy. These actions are setup to deploy to an openshift cluster, but the helm chart is generic enough to run in any kubernetes cluster. To use out of the box, you will need to add two secrets to your github actions:

- OPENSHIFT_SERVER: the location of your server
- OPENSHIFT_TOKEN: a token with the ability to create resources, preferably from a longer lived service account.

In addition, the environment variables of the [release workflow](.github/workflows/release-version.yml) should be updated to refer to your namespace, and optionally rename images. Newly built images will be hosted with the repositories github packages, to be more easily compared with release notes and available publicly.