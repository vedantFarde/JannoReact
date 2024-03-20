const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
  ListObjectsCommand,
} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const fs = require("fs");
const stream = require("stream");

const uplodControlers = {};

const s3Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.AWS_ASSID,
    secretAccessKey: process.env.AWS_ASSEC,
  },
});

const bucketName = "vedantbucketbot";

uplodControlers.uplodpdf = async (req, res) => {
  const userId = req.user.userId;
  const userFilePath = `${userId}/`;
  console.log(req.user);

  const { filename, size, type } = req.body;
  console.log(filename, size, type, req.user);

  const putObject = async (filename, type) => {
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: `${userFilePath}pdf/${filename}`,
      ContentType: type,
    });
    const url = await getSignedUrl(s3Client, command);
    return url;
  };

  try {
    const uploadUrl = await putObject(filename, type);
    console.log(uploadUrl);
    res.status(200).json({ msg: "File uploaded successfully", url: uploadUrl });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

uplodControlers.uplodtext = async (req, res) => {
  const userId = req.user.userId;
  const userFilePath = `${userId}/`;
  console.log(req.user);

  const { filename, type, des } = req.body;
  console.log(filename, des, type, req.user);

  const putObject = async (filename, type) => {
    try {
      const command = new PutObjectCommand({
        Bucket: bucketName,
        Key: `${userFilePath}text/${filename}`,
        ContentType: type,
      });
      const url = await getSignedUrl(s3Client, command);
      return url;
    } catch (err) {
      console.log(err);
    }
  };
  try {
    const uploadUrl = await putObject(filename, type);
    console.log(uploadUrl);
    res.status(200).json({ msg: "File uploaded successfully", url: uploadUrl });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

uplodControlers.getdoc = async (req, res) => {
  const userId = req.user.userId;
  const userFilePath = `${userId}/`;
  console.log(req.user);

  const getObject = async () => {
    const command = new ListObjectsCommand({
      Bucket: bucketName,
      Prefix: userFilePath,
    });

    try {
      const response = await s3Client.send(command);
      console.log(response);
      res.status(200).json({ err: false, data: response });
    } catch (err) {
      console.error(err);
    }
  };

  getObject();
};

uplodControlers.DeleteDoc = async (req, res) => {
  const { key } = req.body;
  console.log("hguyuguu", key);

  const deleteObject = async () => {
    const command = new DeleteObjectCommand({
      Bucket: bucketName,
      Key: key,
    });

    try {
      const response = await s3Client.send(command);
      console.log(response);
      res.status(200).json({ err: false, data: response });
    } catch (err) {
      console.error(err);
      res.status(500).json({ err: true, message: err.message }); // Return the error message in the response
    }
  };

  deleteObject();
};
uplodControlers.getpreview = async (req, res) => {
  const { key } = req.body;
  try {
    const command = new GetObjectCommand({
      Bucket: bucketName,
      Key: key,
      Expires: 1800,
    });
    const url = await getSignedUrl(s3Client, command);
    res.status(200).json({ err: false, data: url });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: true, msg: "Internal server error" });
  }
};

module.exports = uplodControlers;
