# Chakra cli paths bug repro

# Issue

When cli encounters errors in the worker runtime it will hang until stopped with no timeout or feedback than an error has ocurred

# Method

Each package in this repo contains a `generate` script that wil attempt to compile a theme's typings before timing out in 20 seconds, the test consists of running `yarn generate` (which will run `chakra-cli`) and waiting for the typings to either compile or error out.

# Expected outcome

Running `yarn generate` should produce one of the following:

- A green check with the strong `done`, indicating successful compilation
- A red "x" including an error indicating the compilation was a failure

# Actual outcome

Running `yarn generate` will produce one of the following:

- A green check with the strong `done`, indicating successful compilation
- Hangs indefinably with no automatic exit
