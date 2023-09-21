import multer from 'multer';
import path from 'path';

//upload images
const storage = multer.diskStorage({
  destination: function(req, file, next) {
    next(null, path.join(`${process.cwd()}/build/img`));
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});
const fileImgFilter = (req, file, cb) => {
  if (
    file.mimetype == 'image/png' ||
    file.mimetype == 'image/jpg' ||
    file.mimetype == 'image/jpeg' ||
    file.mimetype == 'application/pdf'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
  }
};

export const upload = multer({
  storage: storage,
  limits: { file: 1024 * 1024 * 5 },
  fileFilter: fileImgFilter
}).single('img');

//upload files

const storagePdf = multer.diskStorage({
  destination: function(req, file, next) {
    next(null, path.join(`${process.cwd()}/build/upload`));
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype == 'application/pdf') {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error('Only .pdf format allowed!'));
  }
};

export const uploadPDF = multer({
  storage: storagePdf,
  fileFilter: fileFilter
}).single('cv');
