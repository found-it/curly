FROM node:stretch-slim

# RUN useradd -ms /bin/bash foundit
USER node

ENV ENV_NAME dev
ENV NODE_ENV dev
ENV NODE_CONFIG_ENV dev

RUN mkdir /home/node/node && \
    npm config set prefix '/home/node/node'

RUN export PATH=$PATH:$HOME/node

WORKDIR /home/node/src/app

COPY package.json .

USER root

RUN npm install

COPY . .

RUN chown -R node:node . && \
    chmod -ts /bin/mount \
              /bin/su \
              /bin/umount  \
              /sbin/unix_chkpwd \
              /usr/bin/chage \
              /usr/bin/chfn \
              /usr/bin/chsh \
              /usr/bin/expiry \
              /usr/bin/gpasswd \
              /usr/bin/newgrp

USER node

RUN npm run build

CMD [ "node", "./lib/index.js" ]
