# Chakra cli paths bug repro

## Issue

When cli encounters errors in the worker runtime it will hang until stopped with no timeout or feedback than an error has ocurred

## Method

Each package in this repo contains a `generate` script that wil attempt to compile a theme's typings before timing out in 20 seconds, the test consists of running `yarn generate` (which will run `chakra-cli`) and waiting for the typings to either compile or error out.

### Expected outcome

Running `yarn generate` should produce one of the following:

- A green check with the strong `done`, indicating successful compilation
- A red "x" including an error indicating the compilation was a failure

### Actual outcome

Running `yarn generate` will produce one of the following:

- A green check with the strong `done`, indicating successful compilation
- Hangs indefinably with no automatic exit

## Test Cases

| case                        | description                                                   |
| --------------------------- | ------------------------------------------------------------- |
| `incorrect-theme-file-path` | Tests cli's handling of nonexistant theme path                |
| `runtime-error`             | Tests cli's handling of runtime errors                        |
| `valid`                     | Tests cli's handling of a valid config (happy path)           |
| `warning`                   | Tests cli's handling of a valid config, with warnings printed |

---

# Notes

- Typescript type errors seem to be ignored by the worker, intentional?

# Running tests

> Note: This repo uses **yarn v1.22.10**

- Clone this repo
- Install deps `yarn install`
- Run all tests `yarn testAll` (note this will bail out if it encounters a failing test)
- Or run single test `yarn workspace generate @repro/<case>` (see [Test cases](#test-cases))
  - eg: `yarn workspace generate @repro/valid`
