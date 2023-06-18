FROM debian:buster

ARG TOKEN=not-set
ARG VERSION=not-set

RUN apt-get update \
    && apt-get install -y \
    curl \
    tar \
    nodejs \
    npm \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN npm install -g yarn

ENV RUNNER_ALLOW_RUNASROOT=1

RUN curl -o actions-runner-linux-x64-${VERSION}.tar.gz -L https://github.com/actions/runner/releases/download/v${VERSION}/actions-runner-linux-x64-${VERSION}.tar.gz
RUN tar xzf ./actions-runner-linux-x64-${VERSION}.tar.gz
RUN ./bin/installdependencies.sh

RUN ./config.sh --url https://github.com/OmarCaja/Jovi --token ${TOKEN}

ENTRYPOINT ["./run.sh"]