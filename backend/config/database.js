const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOSTa", "127.0.0.1"),
      port: env.int("DATABASE_PORTa", 3306),
      database: env("DATABASE_NAMEa", "strapi2"),
      user: env("DATABASE_USERNAMEa", "root"),
      password: env("DATABASE_PASSWORDa", "femwak69"),
      ssl: false,
    },
    debug: false,
  },
});
