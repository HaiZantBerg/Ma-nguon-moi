FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV NEXT_PUBLIC_API_URL='https://www.ethems.com'

EXPOSE 3000

CMD ["npm", "run", "dev"]
