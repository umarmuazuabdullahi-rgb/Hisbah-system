const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");

exports.forgotPassword = async (req,res)=>{
  const user = await User.findOne({ email: req.body.email });
  if(!user) return res.status(404).json({ message:"Email not found" });

  const otp = crypto.randomInt(100000,999999).toString();
  user.resetOTP = otp;
  user.resetOTPExpire = Date.now() + 10*60*1000;
  await user.save();

  await sendEmail(user.email,"Hisbah OTP",`OTP: ${otp}`);
  res.json({ message:"OTP sent" });
};

exports.resetPassword = async (req,res)=>{
  const user = await User.findOne({
    resetOTP: req.body.otp,
    resetOTPExpire: { $gt: Date.now() }
  });
  if(!user) return res.status(400).json({ message:"Invalid OTP" });

  user.password = await bcrypt.hash(req.body.password,10);
  user.resetOTP = undefined;
  user.resetOTPExpire = undefined;
  await user.save();
  res.json({ message:"Password reset success" });

const generateToken = require("../utils/generateToken");
};