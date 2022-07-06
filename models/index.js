import dbConn from "../config/Database.js";
import Users from "../models/UserModel.js";
import Role from "../models/RoleModel.js";

const db = {};

db.sequelize = dbConn;

db.user =Users;
db.role = Role;

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ["user", "admin", "moderator"];

export default db;
