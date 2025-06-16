FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install --legacy-peer-deps

COPY . .
#RUN npm install -g nodemon 
CMD ["npm", "start", "--host", "0.0.0.0"]
#CMD ["npm", "run", "dev"]