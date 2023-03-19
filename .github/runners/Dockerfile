FROM ubuntu:latest

ARG TOKEN=not-set

RUN apt-get update -y && apt-get upgrade -y

RUN curl -o actions-runner-linux-x64-2.303.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.303.0/actions-runner-linux-x64-2.303.0.tar.gz

RUN tar xzf ./actions-runner-linux-x64-2.303.0.tar.gz

RUN ./config.sh --url https://github.com/OmarCaja/Jovi --token $TOKEN

CMD ["./run.sh"]
