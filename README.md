# JSONServer + faker.js

A Fake REST API using json-server with faker.js. 


## Install

```bash
$ npm install
$ npm run start-query
```

```
GET   http://localhost:3000/customer
```
return data with locale:'tr' :
```
{
        "id": 0,
        "name": "",
        "avatar": "",
        "email": "",
        "address": "",
        "company": ""
}
```
route search
```
GET  http://localhost:3000/search/:id
```
