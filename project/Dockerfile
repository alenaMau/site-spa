FROM node:lts-alpine

WORKDIR /srv/app

COPY . .

RUN npm install
RUN npm install --save vue-router
RUN npm install vue-cookies
RUN npm install axios
RUN npm run build

EXPOSE 8080

CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0" ]