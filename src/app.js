import express from "express";

const app = express();

// Middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Routes
app.get("/", (req, res) => {
    res.json({ message: "Backend is running!" });
});

export default app;
