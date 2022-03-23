const multer = require('multer');

const multerStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './src/uploads/image');
    },
    filename: function (req, file1, cb) {
      cb(null, Date.now() + "--" + file1.originalname)
    }
  })

const multerStoragefile = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './src/uploads/file');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "--" + file.originalname)
    }
  })
  const multerFilter = (req, file, cb) => {
    if ((file.mimetype).includes('jpeg') || (file.mimetype).includes('png') || (file.mimetype).includes('pdf')) {
        cb(null, true);
    } else {
        cb(new Error("Not a PDF File!!"), false);
    }
  };

  const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});

const uploadfile = multer({
  storage: multerStoragefile,
  fileFilter: multerFilter
});

const uploadpdf = uploadfile.single('file')
const uploadimage = upload.single('file')
module.exports = {
  uploadpdf,
  uploadimage
}

 
