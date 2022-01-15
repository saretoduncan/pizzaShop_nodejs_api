import { Pizza } from "../models/Useschema.js";

//add pizza to db
export const addPizza = async (req, res) => {
  const { type, small, medium, large } = req.body;
  const newPizza = new Pizza({
    pizzaType: type,
    sizePrice: {
      small: small,
      medium: medium,
      large: large,
    },
  });
  try {
    const savedPizza = await newPizza.save();
    res.json(savedPizza);
  } catch (err) {
    res.json(err.message);
  }
};
//getAllPizza
export const getAllPizza = async (req, res) => {
  try {
    const allPizza = await Pizza.find();
    res.json(allPizza);
  } catch (err) {
    res.json(err.message);
  }
};
//get a single pizza by id

export const getPizzaById = async (req, res) => {
  const { id } = req.params;
  try {
    const pizza = await Pizza.findOne({ _id: id });
    res.json(pizza);
  } catch (err) {
    res.json(err.message);
  }
};
//update pizza
export const updatePizza = async (req, res) => {
  const { id } = req.params;
  const { type, small, medium, large } = req.body;
  try {
    let pizza;
    if (type) {
      pizza = await Pizza.updateOne({ _id: id }, { $set: { pizzaType: type } });
    }
    if (small) {
      pizza = await Pizza.updateOne(
        { _id: id },
        {
          $set: {
            sizePrice: {
              small: small,
            },
          },
        },
      );
    }
    if (medium) {
      pizza = await Pizza.updateOne(
        { _id: id },
        {
          $set: {
            sizePrice: {
              medium: medium,
            },
          },
        },
      );
    }
    if (large) {
      pizza = await Pizza.updateOne(
        { _id: id },
        {
          $set: {
            sizePrice: {
              large: large,
            },
          },
        },
      );
    }
    res.json(pizza);
  } catch (err) {
    res.json(err.message);
  }
};
//delete
export const deleteById = async (req, res) => {
  const { id } = req.params;

  try {
    const pizza = await Pizza.deleteOne({ _id: id });
    res.json(pizza);
  } catch (err) {
    res.json(err.json);
  }
};
//delete all pizza
export const deleteAllPizza = async (req, res) => {
  console.log("name");
  try {
    const deleteAll = await Pizza.deleteMany({});
    res.json(deleteAll);
  } catch (err) {
    res.json(err.message);
  }
};
