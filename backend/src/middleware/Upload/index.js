const multer = require('multer');

//image
const multerStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './src/uploads/image');
    },
    filename: function (req, file1, cb) {
      cb(null, Date.now() + "--" + file1.originalname)
    }
  })

//document
const multerStoragefile = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './src/uploads/file');
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "--" + file.originalname)
    }
  })

  //type file 
  const multerFilter = (req, file, cb) => {
    if ((file.mimetype).includes('jpeg') || (file.mimetype).includes('png') || (file.mimetype).includes('pdf')) {
        cb(null, true);
    } else {
        cb(new Error("Not a PDF File!!"), false);
    }
  };

//image
const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});

//document
const uploadfile = multer({
  storage: multerStoragefile,
  fileFilter: multerFilter
});

const uploadpdf = uploadfile.single('file')
const uploadimage = upload.single('images')
//const uploadimage = upload.fields([{ name: 'images', maxCount: 10 }, { name: 'images', maxCount: 10 }])

module.exports = {
  uploadpdf,
  uploadimage
}

 
