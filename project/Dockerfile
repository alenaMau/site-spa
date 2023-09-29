FROM node:lts-alpine

WORKDIR /srv/app

COPY . .

RUN npm install \
    npm install --save vue-router \
    npm install vue-cookies \
    npm install axios \
    npm run build

EXPOSE 8080

CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0" ]