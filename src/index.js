import dotenv from "dotenv";
import connectDB from "../db/index.js";
import app from "./app.js";

// Load environment variables first
dotenv.config({ path: './.env' });

const PORT = process.env.PORT || 8000;

console.log('Environment check:', {
    PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI ? 'Set' : 'Not Set'
});

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`⚙️  Server is running at port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!! ", err);
    });
