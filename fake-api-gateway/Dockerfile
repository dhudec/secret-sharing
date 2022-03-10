ARG node_version=14
ARG node_image=node:${node_version}-alpine

# STAGE 1
FROM $node_image as builder

ENV NODE_ENV build

WORKDIR /app

COPY . ./

RUN yarn install --frozen-lockfile --no-progress --ignore-scripts

CMD yarn start
