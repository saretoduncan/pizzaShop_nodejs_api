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
  pizzaType: {
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
export const User = mongoose.model("User", userSchema);
export const Toppings = mongoose.model("Toppings", toppingSchema);
export const Pizza = mongoose.model("Pizza", pizzaSchema);
