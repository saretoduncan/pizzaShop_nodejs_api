import { Cart } from "../models/Useschema.js";
import { User } from "../models/Useschema.js";
import { Pizza } from "../models/Useschema.js";
import { Toppings } from "../models/Useschema.js";
import sendEmail from "../mail/mail.js"
//add to cart
export const addToCart = async (req, res) => {
  const userId = req.user._id;
  const { pizzaId, pizzaSize, toppingId, paid } = req.body;

  try {
    let cart;
    const { name, email } = await User.findOne({ _id: userId });
    const userName = name;
    const { pizzaCrust, sizePrice } = await Pizza.findOne({ _id: pizzaId });

    if (toppingId) {
      const { name, amount } = await Toppings.findOne({ _id: toppingId });
      const toppingName = name;
      cart = new Cart({
        personId: userId,
        userName: userName,
        email: email,
        pizzaCrust: pizzaCrust,
        pizzaSize: pizzaSize,
        pizzaAmount: sizePrice[pizzaSize.trim()],
        toppingName: toppingName,
        toppingsPrice: amount,
      });
    } else if (!toppingId) {
      cart = new Cart({
        personId: userId,
        userName: userName,
        email: email,
        pizzaCrust: pizzaCrust,
        pizzaSize: pizzaSize,
        pizzaAmount: sizePrice[pizzaSize.trim()],
      });
    }
    cart = await cart.save();
    res.json(cart);
  } catch (err) {
    res.json(err.message);
  }
};

//retrieve all data in the cart
export const getAllCart = async (req, res) => {
  try {
    const cart = await Cart.find();
    res.json(cart);
  } catch (err) {
    res.json(err.message);
  }
};
//retrive cart data by id
export const getCartDataById = async (req, res) => {
  const { id } = res.params;
  try {
    const cart = await Cart.findOne({ _id: id });
    res.json(cart);
  } catch (err) {
    res.json(err.message);
  }
};
//retrieve data by cart authtoken
export const getUserCart = async (req, res) => {
  const userId = req.user._id;
  try {
    const cart = await Cart.find({ personId: userId });
    res.json(cart);
  } catch (err) {
    res.json(err.message);
  }
};
//delete cartdata by id
export const deleteCartByid = async (req, res) => {
  const { id } = res.params;
  try {
    const cart = await Cart.deleteOne({ _id: id });
    res.json(cart);
  } catch (err) {
    res.json(err.message);
  }
};
//delete cart by auth
export const deleteCartByAuth = async (req, res) => {
  const { id } = res.params;
  try {
    const cart = await Cart.deleteOne({ _id: id });
    res.json(cart);
  } catch (err) {
    res.json(err.message);
  }
};
//delete all cart items
export const deleteAll = async (req, res) => {
  try {
    const deleteCart = await Cart.deleteMany({});
    res.json(deleteCart);
  } catch (err) {
    res.json(err.message);
  }
};
//total amount
export const totalAmount = async (req, res) => {
  const userId = req.user._id;
  try {
    const cart = await Cart.find({ personId: userId });
    let total = 0;
    cart.forEach((cart) => {
      const { pizzaAmount, toppingsPrice } = cart;

      (total += pizzaAmount), toppingsPrice;
    });

    res.json({ total: total });

    // res.json(cart);
  } catch (err) {
    res.json(err.message);
  }
};
//payment
export const payment = async (req, res) => {
  const userId = req.user._id;
  try {
    const paidUpdate = await Cart.updateMany(
      { personId: userId },
      {
        $set: {
          paid: true,
        },
      },
    );
    const user = await User.findOne({_id:userId});
    const {email, name}= user;
    const cart = await Cart.find({ personId: userId });
    let total = 0;
    let order = [];
    cart.forEach((cart) => {
      const {
        pizzaAmount,
        toppingsPrice,
        pizzaCrust,
        pizzaSize,
        toppingName,
        paid,
      } = cart;

      (total += pizzaAmount), toppingsPrice;
      const finalOrder = {
        crust: pizzaCrust,
        size: pizzaSize,
        Crust_cost: pizzaAmount,
        topping: toppingName,
        Topping_cost: toppingsPrice,
        paid: paid,
      };

      total += pizzaAmount + toppingsPrice;
      order.push(finalOrder);
    
    });
     
    const finalOrder = {
      order: order,
      total: total,
    };
    sendEmail(email, "pizza payment recipt", finalOrder);
    res.json(finalOrder);
  } catch (err) {
    res.json(err.message);
  }
};
