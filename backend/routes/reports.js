const express = require("express");
const { protect, authorize } = require("../middleware/auth");
const upload = require("../middleware/upload");
const {
  createReport,
  getMyReports,
  getAllReports,
  updateReportStatus,
  deleteReport
} = require("../controllers/reportController");

const router = express.Router();

router.post("/", protect, upload.single("media"), createReport);
router.get("/mine", protect, getMyReports);
router.get("/", protect, authorize("officer","admin"), getAllReports);
router.put("/:id/status", protect, authorize("officer","admin"), updateReportStatus);
router.delete("/:id", protect, authorize("admin"), deleteReport);

module.exports = router;