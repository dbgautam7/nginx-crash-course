FROM node:22

WORKDIR /app

COPY index.js .
COPY index.html .
COPY images ./images
COPY package.json .

RUN npm install

EXPOSE 4000

CMD ["node", "index.js"]
