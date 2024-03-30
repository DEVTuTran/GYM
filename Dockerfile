# Stage 1: Build the React App
FROM --platform=linux/amd64 node:lts-alpine as build-stage

WORKDIR /app

ARG VITE_APP_API_URL
ENV VITE_APP_API_URL=${VITE_APP_API_URL}
ARG VITE_APP_URL
ENV VITE_APP_URL=${VITE_APP_URL}

# Copy package.json and yarn.lock to install dependencies
COPY package*.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the entire project to the container
COPY . .

# Build the production version of the app
RUN yarn build

# Stage 2: Serve the production build with Nginx
#FROM nginx:stable-alpine as production-stage

# Copy the production build from the build-stage
#COPY --from=build-stage /app/build /usr/share/nginx/html

# Copy Nginx configuration file
#COPY docker/nginx/conf.d /etc/nginx/conf.d

# Expose port 80
EXPOSE 3000

# Command to run Nginx and serve the application
#CMD ["nginx", "-g", "daemon off;"]
CMD ["yarn", "run", "dev"]