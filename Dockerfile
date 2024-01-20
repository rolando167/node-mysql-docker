FROM node:16-bullseye

WORKDIR /app-node-mysql

COPY . .

RUN npm install

EXPOSE 3300

CMD ["npm", "start"]