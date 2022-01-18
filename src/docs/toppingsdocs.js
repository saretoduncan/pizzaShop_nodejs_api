const getAllToppings = {
  tags: ["Toppings"],
  description: "get all toppings",
  operationId: "getToppings",
  parameters: [],

  responses: {
    200: {
      "application/json": {
        content: {
     
          
              _id: {
                type: "string",
                description: "itemId",
                example: "lksjdoijaklnfdhjoajlkd",
              },
              name: {
                type: "string",
                description: "toppings name",
                example: "veggies",
              },
              amount: {
                type: "integer",
                description: "amount",
                example: 200,
              },
          
        },
      },
    },
  },
};

export { getAllToppings };
