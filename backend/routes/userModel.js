const express=require("express");
const {signup,login,protect,createPost,getALlPost}=require("./../controllers/userControllers");

const router=express.Router()

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/createPost").post(protect,createPost);
router.route("/getAllPost").get(protect,getALlPost);
module.exports=router;