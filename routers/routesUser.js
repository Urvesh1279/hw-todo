const { getDBConnection } = require("../utils");
const libMongoDB = require("mongodb");

const getAllUsers = (req, res, next) => {
  getDBConnection()
    .then(async (dbToDo) => {
      const usersData = await dbToDo.collection("users").find().toArray();
      console.log(usersData);
      res.status(200).json({ data: usersData });
    })
    .catch((e) => {
      console.log("Error");
      res.status(500).json({ error: "failed to load data" });
    });
};

const getSingleUser = (req, res, next) => {
  getDBConnection()
    .then(async (dbToDo) => {
      const searchId = req.params.id;
      const foundUser = await dbToDo
        .collection("users")
        .findOne({ _id: new libMongoDB.ObjectId(searchId) });
      res.status(200).json({ data: foundUser });
    })
    .catch((e) => {
      console.log(e + "Error");
      res.status(500).json({ error: "failed to load data" });
    });
};

const createUser = (req, res, next) => {
  getDBConnection()
    .then(async (dbToDo) => {
      await dbToDo.collection("users").insertOne(req.body);
      res.status(200).json({ success: "data inserted" });
    })
    .catch((e) => {
      console.log("Error");
      res.status(500).json({ error: "failed to save data" });
    });
};

const updateUser = (req, res, next) => {
  const updateId = req.params.id;
  getDBConnection()
    .then(async (dbToDo) => {
      await dbToDo
        .collection("users")
        .updateOne(
          { _id: new libMongoDB.ObjectId(updateId) },
          { $set: req.body }
        );
      res.status(200).json({ success: "data updated" });
    })
    .catch((e) => {
      console.log("Error");
      res.status(500).json({ error: "failed to update data" });
    });
};

const deleteUser = (req, res, next) => {
  const deleteId = req.params.id;
  getDBConnection()
    .then(async (dbToDo) => {
      await dbToDo
        .collection("users")
        .deleteOne({ _id: new libMongoDB.ObjectId(deleteId) });
      res.status(200).json({ success: "data deleted" });
    })
    .catch((e) => {
      console.log("Error");
      res.status(500).json({ error: "failed to delete data" });
    });
};

const routesUser = {
  getAllUsers: getAllUsers,
  getSingleUser: getSingleUser,
  createUser: createUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
};

module.exports.routesUser = routesUser;
