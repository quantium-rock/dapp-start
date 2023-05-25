FROM node:18

# install simple http server for serving static content & yarn

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
#COPY package*.json ./

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# install project dependencies
#RUN yarn install

# build app for production with minification
RUN yarn build

EXPOSE 3377
EXPOSE 443
EXPOSE 80

CMD [ "node", "dist/index.js" ]


