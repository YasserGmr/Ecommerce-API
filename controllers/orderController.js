const Orders = require('./../models/orderModel')
const Cart = require('../models/cartModel')
const AppError = require('../utils/appError')
const handleFactory = require('./handlerFactory')
const catchAsync = require('../utils/catchAsync')

const trackOrderRoute = process.env.TRACK_ORDER

const editOrder = (order, cartId) => {
  //2 Get the old Order and Cart Id
  const newOrder = { ...order._doc }

  //2 Add the Cart Id in the Orders
  newOrder.orders.push(cartId)

  return newOrder
}

exports.addOrder = catchAsync(async (req, res, next) => {
  const { user, cart } = req.body

  //2 Get current Cart and its orders + Empty the Cart
  const oldCart = await Cart.findByIdAndUpdate(cart, {
    products: [],
  })
  const { products } = oldCart

  //2 Add a new Order with the Current Cart Products
  const order = await Orders.create({
    user,
    products,
  })

  console.log(order)

  res.status(201).json({
    message: 'Order Added Successfully',
    data: {
      // data: finalOrder,
      data: {},
    },
  })
})

exports.getOrders = handleFactory.getAll(Orders)
exports.updateOrder = handleFactory.updateOne(Orders)

exports.getStatus = (req, _res, next) => {
  //2 Get status
  const { status } = req.body

  //2 Check if there is no status
  if (!status) {
    return next(new AppError('Please enter a status to update this order', 400))
  }

  //2 Edit req.body by only getting status
  req.body = { status }

  next()
}

exports.putUnconfirmed = (req, res, next) => {
  //2 Put the req.params.unconfirmed
  req.params.unconfirmed = true

  //2 Call next
  next()
}

const getCurrentOrder = (order, orderId) => {
  const { orders } = order[0]
  let redirected
  let idx

  orders.forEach((order, i) => {
    const currentId = order.id
    const wantedOrder = currentId === orderId
    if (wantedOrder) {
      redirected = order.redirected
      idx = i
    }
  })

  return { redirected, idx }
}

exports.getOrderStatus = catchAsync(async (req, res, next) => {
  //) Get the Order Id, and find It
  const { id } = req.params

  const order = await Orders.find({ 'orders._id': id })

  //) If no order, then it wasn't placed in the first place
  if (order.length === 0) {
    const error = new AppError(
      `It looks like your order hasn't been plalced successfuly or There is a problem with your link, Plase try again or check your Order from our Website.`,
      500
    )
    return next(error)
  }

  const { redirected, idx } = getCurrentOrder(order, id)

  if (redirected) {
    //) Check if the User has already been directed, if true, redirect him to track your order route
    return res.redirect(trackOrderRoute)
  }

  //) Edit the Order redirected property to true
  order[0].orders[idx].redirected = true
  await order[0].save()

  //) Put the Order in the response
  req.body.order = order

  //) Call next
  next()
})
