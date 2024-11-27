FROM node:22
WORKDIR /app

COPY package.json .
COPY package-lock.json .
COPY ./src ./src
COPY index.html .
COPY results.html .
COPY app.js .


RUN npm install
EXPOSE 3003
CMD [ "node" , "app.js" ]