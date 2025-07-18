FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps
RUN npm install -g nodemon
COPY . .
#RUN npm install -g nodemon 
#CMD ["npm", "run", "start", "--host", "0.0.0.0"]
#CMD ["npm", "run", "dev"]

CMD ["npx","nodemon", "src/server.js"]