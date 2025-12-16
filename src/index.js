import dotenv from "dotenv";
import connectDB from "../db/index.js";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 8000;

// Start server with or without MongoDB
connectDB()
    .then(() => {
        console.log(" MongoDB connected successfully");
    })
    .catch((err) => {
        console.log("  MongoDB connection failed. Server will run without database.");
        console.log("   To fix: Install MongoDB locally or use MongoDB Atlas");
    })
    .finally(() => {
        app.listen(PORT, () => {
            console.log(`  Server is running at port: ${PORT}`);
            console.log(`   Visit: http://localhost:${PORT}`);
        });
    });
