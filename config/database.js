module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        // client: "mongo",
        // port: env.int("DATABASE_PORT", 27017),
        // database: env("DATABASE_NAME", "strapi"),
        // username: env("DATABASE_USERNAME", "strapi"),
        // password: env("DATABASE_PASSWORD", "strapi"),
        uri: env("MONGODB_URI", ""),
      },
      options: {
        authenticationDatabase: "admin",
        ssl: true,
        // authenticationDatabase: env("AUTHENTICATION_DATABASE"),
        // ssl: env("DATABASE_SSL"),
      },
    },
  },
});
