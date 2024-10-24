FROM node:20-alpine

WORKDIR /client

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${VITE_PORT}

CMD ["npm", "run", "dev"]