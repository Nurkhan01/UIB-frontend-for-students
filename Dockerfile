# Используем образ Node.js LTS (Long Term Support)
FROM node:16.16.0

# Создаем директорию для приложения
WORKDIR /app

# Копируем файлы package.json и package-lock.json и устанавливаем зависимости
#COPY package*.json ./
COPY . .
RUN ls -lat
RUN npm install

# Устанавливаем Vue CLI глобальноd
RUN npm install -g @vue/cli

# Предоставляем права на выполнение скрипта
RUN chmod +x node_modules/.bin/vue-cli-service
EXPOSE 8080
# Запускаем команду при старте контейнера
CMD ["npm", "run", "serve"]