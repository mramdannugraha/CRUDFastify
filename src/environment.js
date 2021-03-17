const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

let envPath;

// validate the NODE_ENV
const NODE_ENV = process.env.NODE_ENV;
switch (NODE_ENV) {
case 'development':
  envPath = path.resolve(__dirname, '../.env.development');
  break;
case 'staging':
  envPath = path.resolve(__dirname, '../.env.staging');
  break;
case 'production':
  envPath = path.resolve(__dirname, '../.env.production');
  break;
default:
  envPath = path.resolve(__dirname, '../.env.local');
  break;
};

dotenv.config({ path: envPath });

const enviroment = {
  /* GENERAL */
  NODE_ENV,
  TIME_ZONE: process.env.TIME_ZONE,
  APP_PORT: process.env.APP_PORT || 4001
};

module.exports = enviroment;
