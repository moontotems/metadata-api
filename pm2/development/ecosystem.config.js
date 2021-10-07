// http://pm2.keymetrics.io/docs/usage/application-declaration/

module.exports = {
  apps: [
    {
      name: 'metadata-api',
      script: 'yarn start:development',
      args: [],
      watch: false,
      time: true
    }
  ]
}
