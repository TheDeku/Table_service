<p align="center">
  <a href="" target="blank"><img src="" width="320" alt="Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center"> BaseAuthToken <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>

## Description
BaseAuthToken API written in
[Nest](https://github.com/nestjs/nest) framework TypeScript.




## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ nest start

# watch mode
$ nest start --watch

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## EndPoint Demo user

```bash

#  GET

DEMO USER

http://localhost:5002/api/users



```
if the roles are activated 
send token
<p align="center">
  <a href="https://firebasestorage.googleapis.com/v0/b/marcoastorga-7ad4f.appspot.com/o/demo.png?alt=media&token=0b838a59-6ace-4998-a1ed-f4599e3ce999" target="blank"><img src="https://firebasestorage.googleapis.com/v0/b/marcoastorga-7ad4f.appspot.com/o/demo.png?alt=media&token=0b838a59-6ace-4998-a1ed-f4599e3ce999" width="320" alt="Itam Logo" /></a>
</p>


Generate token in ( ipos_servi_auth )

## Global config .env

npm i -D dotenv @types/dotenv


Create file  touch ---> .env

```bash
EXAMPLE 

PORT=5004
HOST=127.0.0.1
USERNAME=root
PASSWORD=dockermysql
DATABASE=bddocker
JWT_SECRET=oirgdjnc$@dfg
```


## VsCode debugger

debugger mkdir ----> .vscode

touch ----> launch.json
```bash


 {
    "version": "0.2.0",
    "configurations": [
      {
        "type": "node",
        "request": "launch",
        "name": "Debug Nest Framework",
        "runtimeArgs": ["--nolazy", "-r", "ts-node/register"],
        "args": ["${workspaceFolder}/src/main.ts"],
        "autoAttachChildProcesses": true
      }
    ]
  }
```