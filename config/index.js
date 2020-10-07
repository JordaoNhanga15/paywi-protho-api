module.exports = {
  port: process.env.PORT,
  //mongoURI: process.env.MONGO_URI,MONGO_URI2
  mongoURI: process.env.MONGO_URI2,
  saltRounds: process.env.SALT_ROUNDS,
  jwtSecret: process.env.JWT_SECRET,
};
