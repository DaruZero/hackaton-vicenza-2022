
# syntax=docker/dockerfile:1

FROM node

COPY . .

EXPOSE 3000

RUN npm install && npm run build

CMD [ "PORT=3000 npm run start" ]