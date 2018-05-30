# BreatheLife's JavaScript

We follow [Airbnb's Styleguide](https://github.com/airbnb/javascript) with some minors tweaks and modifications.

The purpose of this repository is to mainly store BreatheLife's ESLint config for its different projects.

### Base

The base ESLint rules that applies basically to JavaScript in general. This is framework agnostic and only
targeting pure JavaScript code.

It's not meant to be consumed by developers.

### Web

The ESLint rules that applies to web based project. Applies `base` ones plus specific rules for React.

## Dependencies

Contrary to the original Airbnb's ESLint modules, we do not use peer dependencies
but we instead use normal dependencies.

Indeed, in our specific case, having normal dependencies reduce the maintenance burden
of specifying all the needed peer dependencies when adding a specific ESLint configuration.

That's means that we simply need to depend on the right config project to run ESLint.

Of course, it could causes problem eventually, but we are ready to live with it.

## Contributing

First, install dependencies using `bin/prepare` script that uses Yarn
(version >= 1.x required):

```
$ bin/prepare
```

Then, before doing anything, ensure `lint` and `test` are passing:

```
$ bin/lint
$ bin/test
```

Then, implement new rules, updated `CHANGELOG.md` and submit your patch. Do **not**
bump nor release a new version until the PR has been merged!
