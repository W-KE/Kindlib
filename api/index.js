import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
import users from './routes/users';
import test from './routes/test';
import login from './authentication/login';

require('./authentication/auth');
// Create express instance
const app = express();
app.use(bodyParser.json());
app.use(passport.initialize());

// Import API Routes
app.use(users);
app.use(login);
app.use(passport.authenticate('jwt', { session: false }), test);

app.use((err, req, res) => {
  res.status(err.status || 500);
  res.json({ error: err });
});
// Export express app
export default app;

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`);
  });
}
