FROM node:20-alpine

ENV MONGO_DB_USERNAME=root \
    MONGO_DB_PWD=root
    
WORKDIR /app

COPY package*.json .

RUN npm install --legacy-peer-deps

COPY . .

CMD ["npm", "start", "--host", "0.0.0.0"]