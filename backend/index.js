import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";


import { connectDB } from "./db/connectDB.js";


import authRoutes from "./routes/auth.route.js";
import vehiculesRoutes from "./routes/vehicules.routes.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(cors({origin:"http://localhost:5173", credentials:true}));

const PORT = process.env.PORT || 3000;

app.use("/api/auth",authRoutes);
app.use("/api/vehicules",vehiculesRoutes);

app.listen(PORT, () =>{
    connectDB();
    console.log("Server is running on port " + PORT);
});


