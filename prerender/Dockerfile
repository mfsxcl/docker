FROM node:7

EXPOSE 3000

ENV PRERENDER_ROOT=/usr/local/prerender

WORKDIR ${PRERENDER_ROOT}

RUN mkdir -p ${PRERENDER_ROOT}

COPY . ${PRERENDER_ROOT}

RUN rm -rf ${PRERENDER_ROOT}/node_modules

RUN npm install forever -g

RUN npm install

RUN chmod +x ${PRERENDER_ROOT}/*.sh

CMD ["/opt/entry.sh"]