const Report = require("../models/Report");

exports.createReport = async (req, res) => {
  try {
    const report = await Report.create({
      ...req.body,
      media: req.file?.filename,
      user: req.user._id
    });
    res.status(201).json(report);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

exports.getMyReports = async (req, res) => {
  const reports = await Report.find({ user: req.user._id });
  res.json(reports);
};

exports.getAllReports = async (req, res) => {
  const reports = await Report.find().populate("user","name email");
  res.json(reports);
};

exports.updateReportStatus = async (req, res) => {
  const report = await Report.findById(req.params.id);
  if (!report) return res.status(404).json({ message: "Not found" });
  report.status = req.body.status;
  await report.save();
  res.json(report);
};

exports.deleteReport = async (req, res) => {
  await Report.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};