FROM node:22
WORKDIR /app

COPY package-lock.json .
COPY package.json .

COPY database.js .
COPY ./database ./database

RUN npm install


EXPOSE 3000
CMD [ "node", "database.js"]