## Desafio Maximize
---
No back end foi usado PHP 8.3, Laravel 10.x e SQLite.
No front end foi usado HTML, Tailwind CSS e Javascript puro.
Como infraestrutura, foi usado Docker, Nginx e PHP.

Para startar o programa, primeiro é necessário fazer fo clone do github:

``` shell
git clone git@github.com:EwertonMotta/maximize.git
```
Depois acessar a pasta ```maximize```:
``` shell
cd maximize
```
Executar o comando docker compose:
``` shell
docker compose up -d
```
Entrar na pasta ```back-end``` e executar o ```composer install```:
``` shell
cd back-end
composer install
```
Copie o ```.env.example``` e gere a ```APP_KEY```
``` shell
cp .env.example .env
php artisan key:generate
```
Para acessar a aplicação use o endereço ```http://localhost/```
Para acessar a API use o endereço ```http://localhost:8081/api/```
