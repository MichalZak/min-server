module.exports = {

  apps : [

    // First application
    {
      name      : "min",
      script    : "server.js",
      watch     : true,
      env: {
        NODE_ENV: "production"
      },
      env_production : {
        NODE_ENV: "production"
      }
    },
  ],

}
