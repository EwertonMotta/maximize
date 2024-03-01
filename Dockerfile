FROM php:8.3-fpm

WORKDIR /www

RUN apt-get update && apt-get install -y \
    && docker-php-ext-install pdo

EXPOSE 9000
