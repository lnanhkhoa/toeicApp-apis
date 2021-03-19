module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  autoReload: true,
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'b5f186d722b136f6b240aef5e13f6b68'),
    },
  },
});
