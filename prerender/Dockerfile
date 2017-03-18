FROM node:7

EXPOSE 3000

ENV PRERENDER_ROOT=/usr/local/prerender

WORKDIR ${PRERENDER_ROOT}

RUN mkdir -p ${PRERENDER_ROOT}

COPY ./package.json ${PRERENDER_ROOT}/

RUN npm install forever -g

RUN npm install

RUN npm install --save node-async-require

COPY . ${PRERENDER_ROOT}

RUN chmod +x ${PRERENDER_ROOT}/*.sh

CMD ${PRERENDER_ROOT}/entry.sh