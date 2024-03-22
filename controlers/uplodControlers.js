const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
  ListObjectsCommand,
} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const fs = require("fs");
const puppeteer = require("puppeteer");

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

  const { filename, size, type } = req.body;

  const putObject = async (filename, type) => {
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: `${userFilePath}pdf/${filename}`,
      ContentType: "pdf",
    });
    const url = await getSignedUrl(s3Client, command);
    return url;
  };

  try {
    const uploadUrl = await putObject(filename, type);
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

  const { filename, type, des } = req.body;

  const putObject = async (filename, type) => {
    try {
      const command = new PutObjectCommand({
        Bucket: bucketName,
        Key: `${userFilePath}text/${filename}`,
        ContentType: "text",
      });
      const url = await getSignedUrl(s3Client, command);
      return url;
    } catch (err) {
      console.log(err);
    }
  };
  try {
    const uploadUrl = await putObject(filename, type);
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

  const getObject = async () => {
    const command = new ListObjectsCommand({
      Bucket: bucketName,
      Prefix: userFilePath,
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

uplodControlers.DeleteDoc = async (req, res) => {
  const { key } = req.body;

  const deleteObject = async () => {
    const command = new DeleteObjectCommand({
      Bucket: bucketName,
      Key: key,
    });

    try {
      const response = await s3Client.send(command);
      res.status(200).json({ err: false, data: response });
    } catch (err) {
      console.error(err);
      res.status(500).json({ err: true, message: err.message });
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
    });
    const url = await getSignedUrl(s3Client, command);
    res.status(200).json({ err: false, data: url });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: true, msg: "Internal server error" });
  }
};

uplodControlers.uplodurl = async (req, res) => {
  const userId = req.user.userId;
  const userFilePath = `${userId}/`;
  console.log(req.user);

  const { filename } = req.body;
  const url = filename.split("/")[2];
  console.log(url);

  console.log(filename);
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  try {
    await page.goto(filename, { waitUntil: "networkidle2" });

    await new Promise((resolve) => {
      setTimeout(resolve, 5000);
    });
    const htmlContent = await page.content();

    // const htmlContent = await page.evaluate(() => {
    //   function extractText(node) {
    //     let text = "";
    //     if (node.nodeType === Node.TEXT_NODE) {
    //       text += node.textContent;
    //     } else if (node.nodeType === Node.ELEMENT_NODE) {
    //       for (const childNode of node.childNodes) {
    //         text += extractText(childNode);
    //       }
    //     }
    //     return text;
    //   }
    //   return extractText(document.body);
    // });

    console.log(htmlContent);
    const params = {
      Bucket: bucketName,
      Key: `${userFilePath}html/${url}`,
      Body: htmlContent,
      ContentType: "text/html",
    };

    const command = new PutObjectCommand(params);

    try {
      const data = await s3Client.send(command);
      console.log("Successfully uploaded HTML content to S3");
      res
        .status(200)
        .json({ message: "HTML content uploaded to S3 successfully" });
    } catch (err) {
      console.error("Error uploading HTML content to S3:", err);
      res.status(500).json({ error: "Failed to upload HTML content to S3" });
    }
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Failed to extract HTML content from URL" });
  } finally {
    await browser.close();
  }
};

module.exports = uplodControlers;
