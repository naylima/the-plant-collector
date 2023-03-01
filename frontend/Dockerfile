FROM node:18

WORKDIR /client

COPY . .

RUN npm install --force
RUN npm run build

RUN mkdir -p /var/www/html
RUN mv dist/* /var/www/html

WORKDIR /

RUN rm -rf /client