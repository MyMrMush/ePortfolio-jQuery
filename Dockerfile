FROM node:latest
WORKDIR /app
COPY ./presentation/package.json ./presentation/package-lock.json* ./
RUN npm install
COPY ./presentation ./presentation
WORKDIR /app/presentation
EXPOSE 3000
CMD ["npx", "serve", "-s", ".", "-l", "3000"]