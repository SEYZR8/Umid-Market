import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema({
  items: [{ productId: String, quantity: Number }],
  status: { type: String, default: 'pending' },
  address: String
});
export default mongoose.model('Order', orderSchema);