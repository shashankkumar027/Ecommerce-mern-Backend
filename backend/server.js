const app = require("./app");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception.`);
  process.exit(1);
});

//config
dotenv.config({ path: "backend/config/config.env" });
const port = process.env.PORT;

// Connecting to Database
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.get("/", (req, res) => {
  res.send(
    "<h1 style='color: purple;'>Server is connected...!</h1><br><h3 style='color: brown;'>Server is running fine...!</h3><br><h2 style='color: green;'>Hello Shashank</h2><hr>"
  );
});

const server = app.listen(port, () => {
  console.log(`* Server is runnning on http://localhost:${port}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection.`);
  server.close(() => {
    process.exit(1);
  });
});
