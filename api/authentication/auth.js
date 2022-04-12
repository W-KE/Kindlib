import passport from 'passport';
import passportLocal from 'passport-local';
import passportjwt from 'passport-jwt';
import User from '../../types/user';
import UserService from './user-service';

const LocalStrategy = passportLocal.Strategy;
const userService = new UserService();

passport.use('signup', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
}, async (username, password, done) => {
  try {
    const user = new User(username, password);
    return done(null, user);
  } catch (error) {
    return done(error);
  }
}));

passport.use('login', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
}, async (username, password, done) => {
  try {
    let user = null;
    if (userService.userExist(username)) {
      user = userService.findUser(username);
    } else {
      return done(null, false, { message: 'User not found' });
    }

    const validate = await user.isValidPassword(password);

    if (!validate) {
      return done(null, false, { message: 'Wrong Password' });
    }

    return done(null, user, { message: 'Successful' });
  } catch (error) {
    return done(error);
  }
}));

const JwtStrategy = passportjwt.Strategy;
const { ExtractJwt } = passportjwt;

passport.use(new JwtStrategy({
  secretOrKey: 'kindlib_secret',
  jwtFromRequest: ExtractJwt.fromUrlQueryParameter('secret_token'),
}, async (token, done) => {
  try {
    return done(null, token.user);
  } catch (error) {
    return done(error);
  }
}));
