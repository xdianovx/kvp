### Установить зависимости для клиента
``cd api && npm i``

### Установить зависимости для сервера
``cd client && npm i``

### Создать пользователя и БД в контейнере postgres

``docker exec -it 34a620d11048e07060ef3aed756271980b9c90e2d3dde66c615b975f50145e74 bash``
``psql -U postgres``
``psql --username postgres``
``CREATE DATABASE dbname``

### Запуск и билд проекта 
``docker-compose up --build``
````
````
````
````
