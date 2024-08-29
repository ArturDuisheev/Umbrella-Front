FROM node:20.11.1-alpine3.18 as build-stage
WORKDIR /app 
COPY package*.json ./ 

RUN npm install 
COPY . . 

RUN npm run build
CMD ["npm", "start"]
