const express=require("express");
const {signup,login,protect,createPost}=require("./../controllers/userControllers");

const router=express.Router()

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/createPost").post(protect,createPost);
module.exports=router;