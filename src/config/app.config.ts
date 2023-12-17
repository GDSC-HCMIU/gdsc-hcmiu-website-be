export const appConfig = () => ({
  PORT: parseInt(process.env.PORT) || 3000,
  DATABASE_URL: 'url',
  JWT_SECRET: process.env.JWT_SECRET,
});
