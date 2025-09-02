import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

export default (io) => {
  router.post('/', async (req, res) => {
    const order = new Order(req.body);
    await order.save();
    io.emit('orderCreated', order);
    res.status(201).json(order);
  });

  router.get('/:id', async (req, res) => {
    const order = await Order.findById(req.params.id);
    res.json(order);
  });

  return router;
};