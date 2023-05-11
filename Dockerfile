# Use the official Node.js image as the base image
FROM node:18.15.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the NestJS application
RUN npm run build

# Define the JWT_SECRET variable using ARG
ARG JWT_SECRET

# Set the JWT_SECRET environment variable using the ARG value
ENV JWT_SECRET=${JWT_SECRET}

# Expose the port the app will run on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:prod"]