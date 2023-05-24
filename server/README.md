# G4AL Portal, Marketplace & DAO - Server

- Server url: _not deployed yet_
- Client url: _not deployed yet_

### Documentation

- Doc url: _TODO_

### Server Stack

- Lang: Typescript
- Core: Node 16
- Server: Express
- CORS: true
- IPWhitelist: _not added yet_
- Lint: true
- Routes: temporary & static routes
- Socket: socket.io
- Blockchain: web3 & ethers
- APIs: Web3AuthAPI _not added yet_
- DBs: Firebase & PostgreSQL
- Tests: Jest _TODO_
- Deployment: Docker _TODO_

### Recomended VSCode Extensions

- JavaScript and TypeScript Nightly
- Material Icon Theme
- Tabnine AI Autocomplete
- IntelliCode
- ESLint
- Babel Javascript
- Monokai Pro

## INSTALL, RUN, TEST & BUILD APP

### Clone repo via ssh

```
git clone git@github.com:gamesforaliving/portal-server.git
```

### Change directory

```
cd server/

```

### Add enviroment variables

Create .env file in root with environment variables. See .env.example

### Install yarn globally (if you haven't already):

```
npm i -g yarn
```

- Use it with sudo in unix systems (admin privileges)

### Install node dependencies

```
cd server/
yarn
```

### Compiles and hot-reloads for development

```
yarn start
```

or

```
yarn serve
```

### Run development env (nodemon)

```
yarn dev
```

### Run tests (jest)

```
yarn tests
```

### 'Compiles' and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

# Docker build and deploy to GCloud:

## Method 1: Configure Automatic Build

a. [Connect](https://source.cloud.google.com/repo/connect) the github repo.
b. Create the service with Cloud Build and the included Dockerfile.

## Method 2: Configure with Manual builds

1. Create the docker image
```
$ docker build -t gcr.io/g4al-chain/prod-portal-server .
```
2. Push the created the docker image
```
$ docker push gcr.io/g4al-chain/prod-portal-server
```

3. [Create the service](https://console.cloud.google.com/run/create?project=g4al-chain) as desired on Google Cloud, [referencing the pushed image](https://cloud.google.com/run/docs/deploying)


