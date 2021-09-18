
[ opinion-ate ] Steps
================================================================================

These are the steps and notes taken while building this application.  Based off these instructions:

https://outsidein.dev/vue/2-project-setup.html#setting-up-development-environment


## 1. create app
```
vue create opinion-ate
```

## 2. set up autoformatting and linting
```
yarn lint
```

## 3. run tests
```
yarn test:unit
```

* tried to improve test performance per these links:
https://stackoverflow.com/questions/45087018/jest-simple-tests-are-slow
https://itnext.io/how-to-make-your-sluggish-jest-v23-tests-go-faster-1d4f3388bcdd
https://github.com/facebook/jest/issues/7963

## 4. run e2e tests

* reinstall cypress per this issue:
https://github.com/cypress-io/cypress/issues/2610
https://docs.cypress.io/guides/continuous-integration/introduction#Dependencies

* possible docker file for cypress install:
https://github.com/cypress-io/cypress-docker-images/blob/master/base/ubuntu19-node12.14.1/Dockerfile

```
$(npm bin)/cypress install
yarn run test:e2e
```

* run headless:
https://cli.vuejs.org/core-plugins/e2e-cypress.html#injected-commands
```
terminal1> yarn run serve --mode production
terminal2> yarn run test:e2e --headless --url http://localhost:8080/ 
```

* added DISPLAY env and x11 mount to Dockerfile to support XQuartz display:
https://medium.com/@mreichelt/how-to-show-x11-windows-within-docker-on-mac-50759f4b65cb

```
XQartz Terminal>  xhost + 127.0.0.1
```

## 5. add CI with github actions

* .github/workflows/test.yml file determines the test build

## 6. add CD with Netify


* signed of for Netlify account using incatrex github acct:
https://app.netlify.com/sites/incatrex-opinion-ate/deploys


## 7. README.cmd
https://outsidein.dev/vue/2-project-setup.html#filling-in-the-readme


## 8. Add E2E test + several unit tests for listing restaurants

https://outsidein.dev/vue/3-vertical-slice.html#end-to-end-test
https://outsidein.dev/vue/3-vertical-slice.html#stepping-down-to-a-unit-test
https://outsidein.dev/vue/3-vertical-slice.html#stepping-back-up
https://outsidein.dev/vue/3-vertical-slice.html#unit-testing-the-store
https://outsidein.dev/vue/3-vertical-slice.html#creating-the-api-client

* had to add axios:
```
yarn add axios
```

## 9. Refactoring Styles
https://outsidein.dev/vue/4-refactoring-styles.html#_4-refactoring-styles

* Add Vuetify
```
vue add vuetify

```

## 10. Edge Cases - Loading Indicator
https://outsidein.dev/vue/5-edge-cases.html#loading-indicator

## 11. Error Flag (API Failure)
https://outsidein.dev/vue/5-edge-cases.html#error-flag

## 12. Writing Data - E2E Test
https://outsidein.dev/vue/6-writing-data.html#end-to-end-test

https://cli.vuejs.org/core-plugins/e2e-cypress.html#injected-commands

```
yarn test:e2e --headless --spec=creating-a-restaurant.spec.js
```

## 13. Unit Testing
https://outsidein.dev/vue/6-writing-data.html#unit-testing-the-component

## 14.  Creating API Method
https://outsidein.dev/vue/6-writing-data.html#creating-the-api-method
