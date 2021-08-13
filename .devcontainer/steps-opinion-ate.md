
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


