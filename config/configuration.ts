export default () => ({
  db: process.env.NODE_ENV === 'test' ? 'test.sqlite' : 'db.sqlite',
  jwtSecret: process.env.JWT_SECRET,
  port: 3000,
});
