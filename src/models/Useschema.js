import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const pizzaSchema = mongoose.Schema({
  pizzaCrust: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: false,
  },
  sizePrice: {
    small: {
      type: Number,
      required: true,
    },
    medium: {
      type: Number,
      required: true,
    },
    large: {
      type: Number,
      required: true,
    },
  },
});
const toppingSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});
const cartSchema = mongoose.Schema({
  personId: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  pizzaCrust: {
    type: String,
    required: true,
  },
  pizzaSize: {
    type: String,
    required: true,
  },
  pizzaAmount: {
    type: Number,
    require: true,
  },
  toppingName: {
    type: String,
    required: false,
  },
  toppingsPrice: {
    type: Number,
    default: 0,
    require: false,
  },
  paid:{
    type:Boolean,
    default: false,
  }
});
export const User = mongoose.model("User", userSchema);
export const Toppings = mongoose.model("Toppings", toppingSchema);
export const Pizza = mongoose.model("Pizza", pizzaSchema);
export const Cart = mongoose.model("Cart", cartSchema);
