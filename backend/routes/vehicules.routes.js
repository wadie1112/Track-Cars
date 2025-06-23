import express from "express"; 
import { createVehicule, deleteVehicule, getVehicule, getVehicules, updateVehicule } from "../controllers/vehicule.controller.js";

const router = express.Router();
    router.post("/Create", createVehicule);
    router.get("/get", getVehicules);
    router.get("/getby:id", getVehicule);
    router.put("/update:id", updateVehicule);
    router.delete("/delete:id", deleteVehicule);
export default router;

