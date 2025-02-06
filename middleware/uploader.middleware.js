const multer = require("multer");

const myStorage = multer.diskStorage({
  destination: (req, file, next) => {
    let path = "public";
    next(null, path);
  },
  filename: (req, file, next) => {
    let file_name = Date.now() + "-" + file.originalname;
    next(null, file_name);
  },
});

const imageFilter = (req, file, next) => {
  let allowed = ["jpg", "jpeg", "png", "bmp", "webp", "svg", "gif"];
  let fileparts = file.originalname.split(".");
  let ext = fileparts.pop();

  if (allowed.includes(ext.toLowerCase())) {
    next(null, true);
  } else {
    next({ status: 400, msg: "Image file format not supported" });
  }
};

const uploader = multer({
  storage: myStorage,
  fileFilter: imageFilter,
  limits: {
    fileSize: 5000000,
  },
});

module.exports = uploader;
