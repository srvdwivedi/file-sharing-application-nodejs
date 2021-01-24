const router = require("express").Router;
const multer = require("multer");
const path = require("path");
const File = require('../models/file');
const {v4 : uuid4} = require('uuid'); 

let storage = multer.diskStorage({
  destination: (req, file, callback) => callback(null, "./uploads/"),
  filename: (req, file, callback) => {
    const name = `${Date.now()}-${Math.round(
      Math.random() * 1e4
    )}${path.extname(file, originalname)}`;
    callback(null, name);
  },
});

let upload = multer({
  storage,
  limit: { fileSize: 1000000 * 100 },
}).single("");

router.post("/", (req, res) => {
    if (!req.file) {
        return res.json({ error: "Please add your file " });
    }

    upload(req, res, async (err) => {
    if (err) {
        return res.status(500).send({ error: err.message });
    }

    const file = new File({
        filename : req.file.filename,
        uuid : uuid4(),
        path : req.file.path,
        size : req.file.size 
    });

    const response = await file.save();
    return res.json({file : `${process.env.APP_BASE_URL}/files/${response.uuid}`});  
    
    });

});

module.exports = router;
