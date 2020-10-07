# paywi-Prothotype-api

## Project setup
```
npm install
```


### Change Path DB : Folder Config/index.js
```
NOTA: ---
***process.env.mongoURI - for Db online
***process.env.mongoURI2 - for Db local (offline)
------

module.exports = {
  port: process.env.PORT,
  //mongoURI: process.env.MONGO_URI
  mongoURI: process.env.MONGO_URI2,
  saltRounds: process.env.SALT_ROUNDS,
  jwtSecret: process.env.JWT_SECRET,
};

```

### Run
```
node .\index.js
```
