# syntax=docker/dockerfile:1

FROM node

COPY . .

EXPOSE 3001

RUN npm install && npm run build

CMD [ "PORT=3001 npm run start" ]