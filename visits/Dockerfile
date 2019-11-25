# Base image
FROM node:alpine

# Set Working Directory
WORKDIR '/app'

# Install dependencies
COPY package.json .
RUN npm install
COPY . .

# Default command
CMD ["npm", "start"]
