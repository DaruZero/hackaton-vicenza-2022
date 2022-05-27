# syntax=docker/dockerfile:1

FROM node

COPY . .

RUN npm install && npm run build

CMD [ "npm run start" ]