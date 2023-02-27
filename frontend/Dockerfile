FROM node:16
WORKDIR /client
COPY ./package*.json /client/
RUN npm install --force
RUN mkdir -p /var/www/html
RUN mv build/* /var/www/html
COPY . /client/
RUN rm -rf /client