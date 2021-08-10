// Import YooKassa library for Node.js
const { YooCheckout } = require('@a2seven/yoo-checkout');
// Import UUID4 for create a random UUID
const { v4: uuidv4 } = require('uuid');
// Settings our store from YooKassa
const checkout = new YooCheckout({ shopId: 'shopId', secretKey: 'secretKey' });

module.exports = {

  index: async (ctx) => {
    // Send 200 `ok`
    ctx.send({
      message: 'ok'
    });
  },

  // Get payment 
  getPayment: async (ctx) => {
    const { paymentId } = ctx.params; // get payment id

    try {
      const payment = await checkout.getPayment(paymentId);
      return payment;
    } catch (error) {
      return error;
    }
  },

  // Create new payment
  createPayment: async (ctx) => {

    const { body } = ctx.request // get data from client

    try {
      const payment = await checkout.createPayment(body, uuidv4())

      const createPayload = {
        orderId: payment.id, // Order's ID
        orderStatus: payment.status, // Order's status
        orderPaid: payment.paid, // Order's status paid
        orderValue: payment.amount.value, // Order's total value
        orderCreated: payment.created_at, // Order's creation time
        orderDescription: payment.description, // Order's description
      }

      await strapi.services.orders.create(createPayload);

      return payment
    } catch (err) {
      return err
    }
  },
};
