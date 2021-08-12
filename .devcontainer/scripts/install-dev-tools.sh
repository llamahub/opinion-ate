#!/bin/bash

#pip install -r ./.devcontainer/requirements.txt
cd client && npm install
$(npm bin)/cypress install