const express = require('express');
const authController = require('../controllers/authController');
const viewController = require('../controllers/viewController');

const router = express.Router();

//4 Use the is Logged in Middleware: Check if the user is logged n
router.use(authController.isLoggedIn, viewController.getCart);

//2 GET home page
router.get('/', function (req, res, next) {
  res
    .status(200)
    .render('index', { title: 'Home Page', user: res.locals.user });
});

//2 Get Best Sellers, new Arrivals, Hot sales, deal of the week

//2 Get /shop: All products, filter by: Categories, Branding, Price: Low to high + high to low + between x and y... , Size (multi select), colors, tags, Pagination: Get only 20 products by 20
router.get('/products', viewController.getProducts);

//2 Checkout
router.get('/checkout', (req, res, next) => {
  const user = res.locals.user || undefined;

  res.json({
    message: 'Welcome to checkout route',
    user,
  });
});

//2 Login Route
router.get('/login', (req, res, next) => {
  res.status(200).json({
    message: 'Hello, This is login route',
  });
});

//2 About Us route

//2 Product details: get product by slug, get related products
router.get('/products/:slug', viewController.getProduct);

//2 Shopping cart: Update quantity, remove product, coupon codes, Add order
router.get('/shop/cart', (req, res, next) => {
  const { user } = res.locals;

  //) Check if there is no User, redirect to Login
  if (!user) return res.redirect('/login');

  res.status(200).render('cart', { title: 'Shoping Cart', user });
});

//2 Contact Page

module.exports = router;
