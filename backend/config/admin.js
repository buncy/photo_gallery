module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a25c9ea078b9762023d8c9008f71f9ed'),
  },
});
