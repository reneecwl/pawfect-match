import express from "express";
import "dotenv/config";
import cors from "cors";

const PORT = process.env.PORT ?? 5050;

app.get("/", (req, res) => {
  try {
    const photosData = JSON.parse(fs.readFileSync("data/photos.json"));
    res.json(photosData);
  } catch (error) {
    console.error("Error reading photos.json.", error);
    res.status(500).send({ error: "Failed to read photos.json." });
  }
});

const app = express();
app.use(cors());

app.use(express.static("public"));

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
