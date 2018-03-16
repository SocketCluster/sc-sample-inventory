# Use LTS version
FROM node:carbon

# Create directory for app
CMD mkdir /app

# Switch to app direcotry
WORKDIR /app

# Install dependencies
COPY package*.json yarn.lock bower.json ./
RUN npm install -g yarn bower
RUN yarn install
RUN bower install --allow-root

# Copy source code inside container
COPY server.js worker.js broker.js ./
COPY public public
COPY sc_modules sc_modules

# Document app port
EXPOSE 8000

# Start app
CMD ["yarn", "start"]
