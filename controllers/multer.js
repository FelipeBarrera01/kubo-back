const multer = require('multer');
const path = require('path');
const shortid = require('shortid');

 const storage = multer.diskStorage({
    destination:'uploads',
    filename:(req, file, cb)=>{
        cb(null, shortid.generate() + path.extname(file.originalname))
    }
});

module.exports = multer({storage});
