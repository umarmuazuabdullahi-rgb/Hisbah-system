const User = require("../models/User");

exports.getUsers = async (_, res) => {
  res.json(await User.find().select("-password"));
};

exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};

exports.updateRole = async (req, res) => {
  const user = await User.findById(req.params.id);
  user.role = req.body.role;
  await user.save();
  res.json(user);
};