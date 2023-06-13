FROM debian:latest

ARG TOKEN=not-set

RUN apt-get update && apt-get install -y curl nodejs npm

RUN npm install -g yarn

ENV RUNNER_ALLOW_RUNASROOT=1

RUN curl -o actions-runner-linux-x64-2.304.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.304.0/actions-runner-linux-x64-2.304.0.tar.gz

RUN tar xzf ./actions-runner-linux-x64-2.304.0.tar.gz

RUN ./config.sh --url https://github.com/OmarCaja/Jovi --token $TOKEN

CMD ["./run.sh"]
