# Use a lightweight Node image
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the rest of the code
COPY . .

# Open the port
EXPOSE 3000

# Start the app
CMD [ "node", "index.js" ]