const { addVideo, getAllVideos } = require("../controllers/video");
const { videoUpload } = require("../middlewares/videoUpload");
const router = require("express").Router();

// router.get("/", (req, res) => {
//   res.send("Hello World");
// });

router
  .post("/upload", videoUpload.single("video"), addVideo)
  .get("/videos", getAllVideos);

module.exports = router;
