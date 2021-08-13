#!/bin/bash

#pip install -r ./.devcontainer/requirements.txt
yarn install --frozen-lockfile --cwd client
#$(npm bin)/cypress install