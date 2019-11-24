# Base image
FROM node:alpine

# Set Working Directory
WORKDIR /usr/app

# Install dependencies
COPY ./ ./
RUN npm install

# Default command
CMD ["npm", "start"]
