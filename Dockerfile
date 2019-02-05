FROM node:8

WORKDIR /usr/app
COPY package.json .
RUN npm install

COPY . .

WORKDIR /usr/app/client
RUN npm config set proxy http://127.0.0.1:8080
RUN npm config set https-proxy https://127.0.0.1:8080
RUN npm build

WORKDIR /usr/app
EXPOSE 8080
CMD ["npm", "start"]

