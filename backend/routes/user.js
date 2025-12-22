const express = require("express");
const { protect, authorize } = require("../middleware/auth");
const { getUsers, deleteUser, updateRole } = require("../controllers/userController");

const router = express.Router();

router.get("/", protect, authorize("admin"), getUsers);
router.delete("/:id", protect, authorize("admin"), deleteUser);
router.put("/:id/role", protect, authorize("admin"), updateRole);

module.exports = router;