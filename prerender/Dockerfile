FROM node:7

EXPOSE 3000

ENV PRERENDER_ROOT=/usr/local/prerender

WORKDIR ${PRERENDER_ROOT}

RUN mkdir -p ${PRERENDER_ROOT}

COPY . ${PRERENDER_ROOT}

RUN npm install

CMD [ "npm", "start" ]