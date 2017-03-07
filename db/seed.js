const db = require('APP/db')
//const Category = require('./models/category');
const Product = require('./models/product')
const Review = require('./models/review')
const Order = require('./models/order')
const OrderItem = require('./models/orderItem')


const Order = require('./models/order')
const orderItem = require('./models/orderItem')
console.log(Order, orderItem)

const seedUsers = () => db.Promise.map([
  {name: 'so many', email: 'god@example.com', password: '1234', isAdmin: false},  //id1
  {name: 'Barack Obama', email: 'barack@example.gov', password: '1234', isAdmin:false},  //id3
  {name: 'Boss Playa', email: 'boss@playa.org', password: '1234', isAdmin:true} //id2
], user => db.model('users').create(user))

const seedOrders = () => db.Promise.map([
  {user_id:2}
], order => Order.create(order))

const seedOrderItems = () => db.Promise.map([
  {price:100, quantity: 2, order_id: 1, product_id: 1}
], orderItem => OrderItem.create(orderItem))

const seedProducts = () => db.Promise.map([
  {title: 'Sos Your Mom', description: 'This is a description', price: 1000, inventory: 5, categories: ['powerboat','pleasurecraft']},  {title: 'Weather Oar Knot', description: 'Here are some workds', price: 4000, inventory: 5, categories: ['powerboat', 'pleasurecraft', 'military']},  {title: 'Row vs Wade', description: 'Something to say', price: 10, inventory: 5, categories: ['sailboat', 'pleasurecraft']},  {title: 'Anchors Away', description: 'Something about a thing', price: 200000, inventory: 5, categories: ['powerboat', 'commercial', 'military']},  {title: 'BobbleHead', description: 'Splish splash', price: 10000, inventory: 5, categories: ['sailboat','commercial']}], product => Product.create(product))

const seedReviews = () => db.Promise.map(
  [
    {stars: 4, content: 'i give it a 4!', user_id:1, product_id:1 },
    {stars: 2, content: 'just a two', user_id:2, product_id:1 },
    {stars: 4, content: 'pretty damn above average', user_id:2, product_id:2 },
    {stars: 0, content: 'pretty damn horrible', user_id:2, product_id:3 },


  ]
 , review => Review.create(review))

db.didSync
  .then(() => db.sync({force: true}))
  .then(seedUsers)
  .then(users => console.log(`==================>Seeded ${users.length} users OK`))
  .then(seedProducts)
  .then(products => console.log(`==================>Seeded ${products.length} Products`))
  .then(seedOrders)
  .then(orders => console.log(`==================>Seeded ${orders.length} Orders`))
  .then(seedOrderItems)
  .then(orderItems => console.log(`==================>Seeded ${orderItems.length} Orders Items`))
  .then(seedReviews)
  .then(reviews => console.log(`==================>Seeded ${reviews.length} Reviews`))
  .catch(error => console.error(error))
  .finally(() => db.close())
