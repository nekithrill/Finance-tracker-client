# Используем базовый образ Node.js
FROM node:20

# Устанавливаем рабочую директорию
WORKDIR /src

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь исходный код приложения
COPY . .

# Открываем порт для API
EXPOSE ${SERVER_PORT}

# Команда для запуска сервера
CMD ["npm", "run", "dev"]