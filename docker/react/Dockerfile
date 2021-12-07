FROM node:alpine
WORKDIR /app
COPY ./frontend/package.json ./
COPY /frontend/package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "run", "start"]