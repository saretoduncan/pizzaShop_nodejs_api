import { Toppings } from "../models/Useschema.js";
//add toppings
const addToppings = async (req, res) => {
  const { name, amount } = req.body;
  const newTopping = new Toppings({
    name: name,
    amount: amount,
  });
  try {
    const savedTopping = await newTopping.save();
    res.json(savedTopping);
  } catch (err) {
    res.json(err.message);
  }
};
//get all topping
const getAllToppings = async (req, res) => {
  try {
    const allToppings = await Toppings.find();
    res.json(allToppings);
  } catch (err) {
    res.json(err.message);
  }
};
//get topping by id
const getToppingById = async (req, res) => {
  const { id } = req.params;
  try {
    const topping = await Toppings.findOne({ _id: id });
    res.json(topping);
  } catch (err) {
    res.json(err.message);
  }
};
//update toppings
const updateToppings = async (req, res) => {
  const { id } = req.params;
  const { name, amount } = req.body;
  try {
    let toppings;
    if (name) {
      toppings = await Toppings.updateOne(
        { _id: id },
        {
          $set: {
            name: name,
          },
        },
      );
    }
    if (amount) {
      toppings = await Toppings.updateOne(
        { _id: id },
        {
          $set: {
            amount: amount,
          },
        },
      );
    }
    res.json(toppings)
  } catch (err) {
    res.json(err.message);
  }
};
//deleteById
const deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Toppings.deleteOne({ _id: id });
    res.json(deleted);
  } catch (err) {
    res.json(err.message);
  }
};
//deleteAll
const deleteAllToppings = async (req, res) => {
  try {
    const deleted = await Toppings.deleteMany({});
    res.json(deleted);
  } catch (err) {
    res.json(err.message);
  }
};
export {
  deleteAllToppings,
  deleteById,
  updateToppings,
  getToppingById,
  getAllToppings,
  addToppings,
};
