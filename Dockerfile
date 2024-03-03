FROM php:8.3-fpm

WORKDIR /www

RUN apt-get update && apt-get install -y \
    && docker-php-ext-install pdo

COPY ./back-end /www

RUN chown -R www-data:www-data /www
RUN chmod -R 777 /www/storage

EXPOSE 9000
