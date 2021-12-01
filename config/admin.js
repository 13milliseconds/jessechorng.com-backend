module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f0e177930083fbe76338b237baf8ea43'),
  },
});
