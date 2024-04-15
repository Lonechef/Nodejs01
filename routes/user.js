const express = require("express");
const router = express.Router();
const {handelgetallusers,getUserbyid,handleUpdateuserById,handledeleteByid,handleCreateUser} = require('../controllers/controller')




router.get("/",handelgetallusers);
   


router.route("/:id")
.get(getUserbyid)
.patch(handleUpdateuserById)
.delete(handledeleteByid)

router.post("/", handleCreateUser);

module.exports=router
