import Router from 'express';
import passport from 'passport';
import jsonwebtoken from 'jsonwebtoken';

const router = Router();

router.post('/login', async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    try {
      if (err || !user) {
        if (err != null) {
          return next(err);
        }
        if (!user) {
          return next(info);
        }
      }

      req.login(
        user,
        { session: false },
        async (error) => {
          if (error) return next(error);
          const body = { id: user.id, username: user.username };
          const token = jsonwebtoken.sign({ user: body }, 'kindlib_secret');
          return res.json({ token });
        },
      );
      return user;
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

export default router;
