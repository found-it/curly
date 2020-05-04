FROM node:stretch-slim


ENV ENV_NAME dev
ENV NODE_ENV dev
ENV NODE_CONFIG_ENV dev

# RUN mkdir /home/foundit/node && \
#     npm config set prefix '/home/foundit/node'
#
# RUN export PATH=$PATH:$HOME/node

RUN mkdir -p /app
RUN groupadd -r foundit && useradd -r -s /bin/false -g foundit foundit
WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN chown -R foundit:foundit /app && \
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

RUN npm run build

USER foundit

CMD [ "node", "./lib/index.js" ]
