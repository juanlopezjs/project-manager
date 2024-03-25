FROM node:latest AS builder
ENV NODE_ENV production

# Add a work directory
WORKDIR /usr/src/app

# Cache and Install dependencies
COPY package*.json ./

RUN npm install
# Copy app files
COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]
