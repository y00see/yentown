FROM node:latest
COPY ./frontend /opt/app
WORKDIR /opt/app
RUN npm install
CMD ["npm", "run", "start"]