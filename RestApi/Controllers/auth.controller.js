import { UserModel } from "../models/auth.model.js";
import { generateToken } from "../lib/jwtTokenGenerator.js";
import bcrypt from "bcrypt";

export const UserController = {
  createuser: async (req, res) => {
    try {
          console.log("Body received:", req.body);
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({ message: "Please provide all fields" });
      }

      const existinguser = await UserModel.findOne({ email });
      if (existinguser) {
        return res.status(400).json({ message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await UserModel.create({
        name,
        email,
        password: hashedPassword,
      });

      const { password: _, ...userWithoutPassword } = newUser._doc;

      return res.status(201).json({
        message: "User created successfully",
        user: userWithoutPassword,
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Internal server Error", error: error.message });
    }
  },

  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res
          .status(400)
          .json({ success: false, message: "Please provide all fields" });
      }

      const user = await UserModel.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ success: false, message: "Email or password doesn't match" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res
          .status(400)
          .json({ success: false, message: "Email or password doesn't match" });
      }

      const { password: _, ...userWithoutPassword } = user._doc;

      return res.status(200).json({
        success: true,
        message: "Login successful",
        user: userWithoutPassword,
        token: generateToken(userWithoutPassword),
      });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  },
};
