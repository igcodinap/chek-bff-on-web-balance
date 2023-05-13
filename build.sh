#!/bin/bash

# Define the Dockerfile name
DOCKERFILE_NAME="Dockerfile.development"

# Define the image name and tag
IMAGE_NAME="bff-on-web.balance:development"


# Read the .env file and export the variables
export $(grep -v '^#' .env | xargs)

# Build the Docker image with the JWT_SECRET value
docker build \
  --build-arg JWT_SECRET="${JWT_SECRET}" \
  -t "${IMAGE_NAME}" \
  -f "${DOCKERFILE_NAME}" .

# Run the Docker container
docker run -it --rm \
  -p 3000:3000 \
  -v $(pwd):/app \
  -v /app/node_modules \
  -e JWT_SECRET="${JWT_SECRET}" \
  "${IMAGE_NAME}"
