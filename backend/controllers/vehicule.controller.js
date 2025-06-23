import Vehicule from "../models/vehicule.model.js";


export const createVehicule = async (req, res) => {
  try {
    const vehicule = new Vehicule(req.body);
    await vehicule.save();
    res.status(201).json(vehicule);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getVehicules = async (req, res) => {
  try {
    const vehicules = await Vehicule.find();
    res.status(200).json(vehicules);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getVehicule = async (req, res) => {
  try {
    const vehicule = await Vehicule.findById(req.params.id);
    if (!vehicule) {
      return res.status(404).json({ message: 'Vehicule not found' });
    }
    res.status(200).json(vehicule);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateVehicule = async (req, res) => {
  try {
    const vehicule = await Vehicule.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!vehicule) {
      return res.status(404).json({ message: 'Vehicule not found' });
    }
    res.status(200).json(vehicule);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteVehicule = async (req, res) => {
  try {
    const vehicule = await Vehicule.findByIdAndDelete(req.params.id);
    if (!vehicule) {
      return res.status(404).json({ message: 'Vehicule not found' });
    }
    res.status(200).json({ message: 'Vehicule deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};