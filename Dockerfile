FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY . .

EXPOSE 8080
RUN apt install ./mongodb-mongosh_1.6.0_arm64.deb
RUN apt install ./mongodb-database-tools-ubuntu2004-arm64-100.6.0.deb
RUN dpkg -l mongodb-database-tools
# command to import json files in mongodb docker
# 1. 'docker ps' to read each docker is running
# 2. 'docker exec -it <docker id> sh' to open a shell on studyhall docker
# 3. 'RUN mongoimport --uri <uri mongo> --collection <collection> --file <json file> --jsonArray'
# RUN mongoimport --uri "mongodb://mongo:27017/example?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.0" --collection "buildings" --file "buildings.json" --jsonArray

CMD [ "npm", "start" ]

#docker compose up --build
