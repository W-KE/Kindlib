import { Router } from 'express';

const router = Router();

// Test route
router.use('/test', (req, res) => {
  res.end('Test API!');
});

router.get('/testauth', (req, res) => {
  res.json({
    message: 'success',
    user: req.user,
    token: req.query.secret_token,
  });
});

export default router;
