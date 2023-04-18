const { uploadToCloudinary } = require("../../../../middleware/cloudinary.js");
const router = require("express").Router();
const fs = require("fs");
const { resolve } = require("path");

exports.uploadVideo = async (req, res, next) => {
  console.log("Hey");
  console.log(req.body);
  if (!req.file) {
    return next(createError(404, "Please upload video"));
  } else {
    console.log("Body:", req.body);
    // const result = await uploadToCloudinary(req.file, "users", "videos");
    // console.log(result);
    console.log(req.file);
    const absolutePath = resolve(`./uploads/${req.file.filename}`);
    console.log(absolutePath);
    result = absolutePath;
    const PyPool = require("py-runner");
    const pool = new PyPool({
      count: 1,
      script:'D:\\pythoncode.py'
    });
    const args = [result];
    // takes an available process and executes with args
    pool.execute(args, result =>{ 
      console.log('Result in execute'+result.length);
      console.log(args);
      res.status(200).json({
        summary: result,
      }); // print value from python file
    });
    // res.status(200).json({
    //   statusCode: 200,
    //   message: "success",
    //   data: result,
    // });
  }
};

// router.post("/hello", async (request, response) => {
//   console.log("hEy");
//   const PyPool = require("py-runner");
//   // creates a pool of five readily available processes running the same script
//   const pool = new PyPool({
//     count: 5,
//     script: "C:\\Users\\msvsu\\Desktop\\pythoncode.py",
//   });
//   const args = [result];
//   // takes an available process and executes with args
//   pool.execute(args, (result) => {
//     console.log(result); // print value from python file
//   });
// });

exports.sendLink = async (req, res, next) => {
  console.log("hEy");
  const PyPool = require("py-runner");
  // creates a pool of five readily available processes running the same script
  const pool = new PyPool({
    count: 1,
    script: "C:\\Users\\msvsu\\Desktop\\pythoncode.py",
  });
  const args = ["link"];
  // takes an available process and executes with args
  pool.execute(args, (result) => {
    res.json({
      summary: result,
    }); // print value from python file
  });
};
