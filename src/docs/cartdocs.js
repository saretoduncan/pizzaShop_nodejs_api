const addToCart = {
  tags: ["Cart"],
  description: "Add item to cart",
  operationId: "addToCart",
  parameters: [
    {
      name: "auth_token",
      in: "header",
      description: "openIdAuthToken",
      required: true,
      type: "string",
    },
  ],
  requestBody: {
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/addItemToCart",
        },
      },
    },
    required: true,
  },
  responses: {
    201: {
      description: "item added succefully",
      content: {
        "application/json": {
          personId: {
            type: "string",
            example: "lksjdoijaklnfdhjoajlkd",
          },
          userName: {
            type: "string",
            example: "john",
          },
          email: {
            type: "string",
            example: "john@example.com",
          },
          pizzaCrust: {
            type: "string",
            example: "cheese pizza",
          },
          pizzaSize: {
            type: "string",
            example: "large",
          },
          pizzaAmount: {
            type: "integer",
            example: 1200,
          },
        },
      },
    },
  },
};

const getCartItems = {
  tags: ["Cart"],
  description: "get all items from cart",
  operationId: "getAllItems",
  parameters: [
    {
      name: "auth_token",
      in: "header",
      description: "openIdAuthToken",
      required: true,
      type: "string",
    },
  ],

  responses: {
    201: {
      "application/json": {
        content: {
          data: [
            {
              _id: {
                type: "string",
                description: "itemId",
                example: "lksjdoijaklnfdhjoajlkd",
              },
              personId: {
                type: "string",
                description: "user id",
                example: "lksjdoijaklnfdhjoajlkd",
              },
              userName: {
                type: "string",
                example: "john",
              },
              email: {
                type: "string",
                example: "john@example.com",
              },
              pizzaCrust: {
                type: "string",
                example: "cheese pizza",
              },
              pizzaSize: {
                type: "string",
                example: "large",
              },
              pizzaAmount: {
                type: "integer",
                example: 1200,
              },
            },
          ],
        },
      },
    },
  },
};
const getTotalAmout={
    tags: ["Cart"],
    description: "get total amount of items in the cart",
    operationId: "getTotalAmout",
    parameters: [
      {
        name: "auth_token",
        in: "header",
        description: "openIdAuthToken",
        required: true,
        type: "string",
      },
    ],
  
    responses: {
      201: {
        "application/json": {
          content: {
            data: [
              {
                _id: {
                  type: "string",
                  description: "itemId",
                  example: "lksjdoijaklnfdhjoajlkd",
                },
                personId: {
                  type: "string",
                  description: "user id",
                  example: "lksjdoijaklnfdhjoajlkd",
                },
                userName: {
                  type: "string",
                  example: "john",
                },
                email: {
                  type: "string",
                  example: "john@example.com",
                },
                pizzaCrust: {
                  type: "string",
                  example: "cheese pizza",
                },
                pizzaSize: {
                  type: "string",
                  example: "large",
                },
                pizzaAmount: {
                  type: "integer",
                  example: 1200,
                },
              },
            ],
          },
        },
      },
    },
}
const deleteCartItem = {
    tags: ["Cart"],
    description: "Delete an item from the cart",
    operationId: "deleteCart",
    security: [
      {
        bearerAuth: [],
      },
    ],
    parameters: [
      {
        name: "id",
        in: "path",
        description: "User ID",
        required: true,
        type: "string",
      },
      {
        name: "auth_token",
        in: "header",
        description: "openIdAuthToken",
        required: true,
        type: "string",
      },
    ],
    responses: {
      200: {
        description: "User deleted successfully!",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  example: "User deleted successfully!",
                },
              },
            },
          },
        },
      },
      500: {
        description: "Internal Server Error",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                message: {
                  type: "string",
                  example: "Internal Server Error",
                },
              },
            },
          },
        },
      },
    },
  };
const addItemToCart = {
  type: "object",
  properties: {
    pizzaId: {
      type: "string",
      example: "dfhjkashdfhakjdhsfiujk",
    },
    pizzaSize: {
      type: "string",
      description: "pizza size",
      example: "large",
    },
    toppingId: {
      type: "string",
      example: "dfhjkashdfhakjdhsfiujk",
    },
  },
};
export { addItemToCart, addToCart, getCartItems,getTotalAmout,deleteCartItem };
