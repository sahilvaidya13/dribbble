const express = require("express");
const router = express.Router();

const {
  fetcher,
  uploader,
  upload,
  signup,
  authenticateToken,
  addRoles,
  sendMail,
} = require("../controller/main");

router.get("/fetch", fetcher);
router.post("/upload", upload.single("image"), uploader);
router.post("/signup", signup);
router.post(
  "/upload-avatar",
  upload.single("image"),
  authenticateToken,

  uploader
);
router.put("/add-roles", authenticateToken, addRoles);
router.get("/send-mail", authenticateToken, sendMail);
module.exports = router;
