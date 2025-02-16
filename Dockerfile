FROM node:20-alpine as builder
ENV NODE_ENV build

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["npm", "run", "start:prod"]