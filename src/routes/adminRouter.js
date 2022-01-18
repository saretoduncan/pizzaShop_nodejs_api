import { createRequire } from "module";
const require = createRequire(import.meta.url);
const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const AdminJSMongoose = require("@adminjs/mongoose");
import { User, Pizza, Toppings } from "../models/Useschema.js";
import mongoDb from '../../db.js'
// import AdminBroMongoose from  'admin-bro-mongoose'
import mongoose from "mongoose";

AdminJS.registerAdapter(AdminJSMongoose);
const adminJsOptions = {
  resources: [User],
};
export const adminJs = new AdminJS({
  Databases: ["mongoDb"],
  rootPath: "/admin",
});

export const adminRouter = AdminJSExpress.buildRouter(adminJs);
