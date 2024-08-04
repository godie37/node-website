import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Home',
    message: 'Welcome to our website!',
    user: req.session.user,
  });
});


export default router;