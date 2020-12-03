export enum Configuration {
  PORT = 'PORT',
  TYPE = 'TYPE',
  PORTDB = 'PORTDB',
  HOST = 'HOST',
  USERNAME = 'USERNAME',
  PASSWORD = 'PASSWORD',
  DATABASE = 'DATABASE',
  JWT_SECRET = 'JWT_SECRET',
}

export const environment = {
  appVersion: require('../../package.json').version,
  appDescription: require('../../package.json').description,
  appAuthor: require('../../package.json').author,

};