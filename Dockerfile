FROM php:8.4-apache
RUN docker-php-ext-install mysqli pdo_mysql
RUN apt update
RUN apt install nano

EXPOSE 80
