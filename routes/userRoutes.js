const express = require("express");
const  {createUser,getallUser,updateuser,DeleteUser}  = require("../controller//UserController");

const router = express.Router();

router.route("/create").post(createUser);
router.route("/getall").get(getallUser);
router.route("/:update").put(updateuser);
router.route("/delete").delete(DeleteUser);
module.exports = router