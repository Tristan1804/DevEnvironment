const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../frontend")));

// API endpoint to send a test response
app.get("/api/data", (req, res) => {
    res.json({ message: "Hello from the backend!" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});