const createUser = {
  tags: ["Users"],
  description: "Create new user in the system",
  operationId: "createUser",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/createUserBody",
        },
      },
    },
    required: true,
  },
  responses: {
    201: {
      description: "user created succefully",
      content: {
        "application/json": {
          _id: {
            type: "string",
            example: "lksjdoijaklnfdhjoajlkd",
          },
          name: {
            type: "string",
            example: "john",
          },
          email: {
            type: "string",
            example: "john@example.com",
          },
        },
      },
    },
  },
};
const loginUser = {
  tags: ["Users"],
  description: "Loggin user in the system",
  operationId: "logginUser",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/loginUserBody",
        },
      },
    },
    required: true,
  },
  responses: {
    201: {
      description: "user created succefully",
      content: {
        "application/json": {
          _id: {
            type: "string",
            example: "lksjdoijaklnfdhjoajlkd",
          },
          name: {
            type: "string",
            example: "john",
          },
          email: {
            type: "string",
            example: "john@example.com",
          },
        },
      },
    },
  },
};
const createUserBody = {
  type: "object",
  properties: {
    name: {
      type: "string",
      example: "John",
    },
    email: {
      type: "string",
      example: "John@example.example",
    },
    password: {
      type: "string",
      description: "unencrypted user's password",
      example: "!1234aWe1Ro3$#",
    },
    confirmPassword: {
      type: "string",
      description: "match with password",
    },
  },
};
const loginUserBody = {
  type: "object",
  properties: {
    email: {
      type: "string",
      example: "John@example.example",
    },
    password: {
      type: "string",
      description: "unencrypted user's password",
      example: "!1234aWe1Ro3$#",
    },
  },
};
export { createUser, createUserBody, loginUserBody, loginUser };
