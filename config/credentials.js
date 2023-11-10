require('dotenv').config();

// EXPORT THE FOLLOWING VARIABLES FROM .env

module.exports = {
  AccountID: process.env.ACCOUNT_ID,
  AccountToken: process.env.ACCOUNT_TOKEN,
  AcceptorID: process.env.ACCEPTOR_ID,
  ApplicationID: process.env.APPLICATION_ID,
  API_URL : process.env.API_URL
};