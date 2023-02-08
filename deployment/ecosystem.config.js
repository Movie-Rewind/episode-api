module.exports = {
  apps : [{
    name   : "episode-api",
    script : "npm run start",
    instances: 1,
    env: {
      PORT: 5000
    },
    increment_var : 'PORT',
  }]
}
