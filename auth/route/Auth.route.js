import express from "express";
import { userModel } from "../model/user.model.js";
import mongoose from "mongoose";

const router = express.Router();

router.get("/login", (req, res) => {
  res.send("login page");
});
router.post("/signup", async (req, res) => {
  console.log("REQ BODY:", req.body);
  const { name, email, password } = req.body;

  const newuser = await userModel.create({
    name,
    email,
    password,
  });
  res.json({ message: "User Created Suceesfullly", newuser }).status(200);
});

router.get("/getdata", async (req, res) => {
  const usersdata = await userModel.find();
  res.json(usersdata);
});

router.get("/getUser", async (req, res) => {
  const user = await userModel.findOne({ name: "abc" });
  res.json(user);
});

router.put("/updateUser", async (req, res) => {
  const updateUser = await userModel.findOneAndUpdate({ name: "a" }, req.body, {
    new: true,
  });

  res.json(updateUser);
});

router.delete('/deleteUser', async(req, res) => {
  const deleteuser = await userModel.findOneAndDelete({name :"b" })
  res.json(deleteuser)
})



export default router;
