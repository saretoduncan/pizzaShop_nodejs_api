import AdminBro from "admin-bro";
import pkg from "admin-bro-expressjs";
import AdminBroMongoose from  'admin-bro-mongoose'
import mongoose from "mongoose"
const {buildRouter} =pkg;
AdminBro.registerAdapter(AdminBroMongoose)
const adminBro = new AdminBro({
  Databases: [mongoose],
  rootPath: "/admin",
});

export const adminRouter = buildRouter(adminBro);
