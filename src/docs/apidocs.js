import {
  createUserBody,
  createUser,
  loginUser,
  loginUserBody,
} from "./userdocs.js";
import {
  addItemToCart,
  addToCart,
  getCartItems,
  deleteCartItem,
  getTotalAmout,
} from "./cartdocs.js";
const apiDocumentation = {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "Pizza Store Api",
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT",
    },
  },
  host: "localhost:5000",
  basePath: "/",
  tags: [
    {
      name: "Users",
      description: "user authentication",
    },
    {
      name: "Cart",
      description: "place order",
    },
  ],
  schemes: ["http"],
  paths: {
    "/api/user/register": {
      post: createUser,
    },
    "/api/user/login": {
      post: loginUser,
    },
    "/api/cart": {
      post: addToCart,
    },
    "/api/cart/user": {
      get: getCartItems,
    
    },
    "/api/cart/total": {
      get: getTotalAmout,
    },
    "/api/cart/user/{id}": {
      delete: deleteCartItem,
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    schemas: {
      createUserBody,
      loginUserBody,
      addItemToCart,
    },
  },
};
export { apiDocumentation };
