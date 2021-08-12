# [Choice] Node.js version: 16, 14, 12
ARG VARIANT=16

FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

RUN su node -c "umask 0002 && npm install -g @vue/cli @vue/cli-service-global"

# [Optional] Uncomment this section to install additional OS packages.
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
 && apt-get install -y make build-essential libssl-dev zlib1g-dev \
    libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm \
    libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev 

# RUN git clone --depth=1 https://github.com/pyenv/pyenv.git .pyenv
# ENV PYENV_ROOT="${HOME}/.pyenv"
# ENV PATH="${PYENV_ROOT}/shims:${PYENV_ROOT}/bin:${PATH}"

# ENV PYTHON_VERSION=3.9.1
# RUN pyenv install ${PYTHON_VERSION}
# RUN pyenv global ${PYTHON_VERSION}

# Chromium with xvfb-chromium redirect script (requires xvfb)
RUN apt-get -y install --no-install-recommends \
    curl \
    xvfb \
    chromium

COPY ./.devcontainer/scripts/pin_nodesource /etc/apt/preferences.d/nodesource

ADD ./.devcontainer/scripts/xvfb-chromium /usr/bin/xvfb-chromium
RUN ln -s /usr/bin/xvfb-chromium /usr/bin/google-chrome
RUN ln -s /usr/bin/xvfb-chromium /usr/bin/chromium-browser

