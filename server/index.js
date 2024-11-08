import express from "express";
import multer from "multer";
import cors from "cors";
import Attachment from "./models/fileModel.js";
import { connectDb } from "./helpers/dbConfig.js";
import path from "path";
import Task from "./models/taskModel.js";

const PORT = process.env.PORT || 5000;

connectDb();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.array("files", 10), async (req, res) => {
  try {
    const { trackId } = req.query;
    const files = req.files;

    for (const file of files) {
      const newFile = new Attachment({
        trackId: trackId,
        name: file.originalname,
        data: file.buffer,
        contentType: file.mimetype,
        size: file.size,
      });
      await newFile.save();
    }
    const result = await Attachment.find({ trackId });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.get("/get-data", async (req, res) => {
  try {
    const pipeline = [
      { $match: {} },
      {
        $lookup: {
          from: "attachments",
          localField: "_id",
          foreignField: "trackId",
          as: "files",
        },
      },
      {
        $group: {
          _id: "$categoryId",
          tasks: {
            $push: {
              _id: "$_id",
              clientName: "$clientName",
              username: "$username",
              files: "$files",
            },
          },
        },
      },
      {
        $lookup: {
          from: "categories",
          localField: "_id",
          foreignField: "_id",
          as: "categoryInfo",
        },
      },
      {
        $unwind: "$categoryInfo",
      },
      {
        $sort: {
          ["categoryInfo.createdAt"]: 1,
        },
      },
      {
        $project: {
          categoryId: "$_id",
          category: "$categoryInfo.category",
          colorLabel: "$categoryInfo.colorLabel",
          tasks: 1,
          _id: 0,
        },
      },
    ];
    const result = await Task.aggregate(pipeline);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
});

// app.get("/demo", async (req, res) => {
//   try {
//     const result = await Category.create({ category: "Incomplete", colorLabel: "" });

//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

//------------- Deployment -------------//

const __dirname1 = path.resolve();

app.use(express.static(path.join(__dirname1, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname1, "../client", "build", "index.html"));
});

//------------- Deployment -------------//

app.get("/", (req, res) => {
  res.send("welcome to seoPage1 task");
});

app.listen(PORT, () => console.log("Listening on port", PORT));

// "build": "npm install && npm --prefix ../client install && npm --prefix ../client run build"
