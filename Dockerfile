# Currently the node LTS version: 
FROM node:16

# Create app work directory
WORKDIR /usr/src/app

# Install app dependecies
COPY . . 
RUN yarn install && yarn build

# Bundle app source
RUN ls -lha
CMD ["node", "dist/server.js"]
