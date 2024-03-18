const {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
  ListObjectsV2Command,
} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
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
      Key: `${userFilePath}${filename}`,
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

uplodControlers.getDoc = async (req, res) => {
  const userId = req.user.userId;
  const userFilePath = `${userId}/`;
  console.log(req.user);

  const getObject = async () => {
    const command = new ListObjectsV2Command({
      Bucket: bucketName,
      Key: `${userFilePath}`,
    });

    try {
      const response = await s3Client.send(command);
      res.status(200).json({ err: false, data: response });
    } catch (err) {
      console.error(err);
    }
  };

  getObject();
};

module.exports = uplodControlers;
