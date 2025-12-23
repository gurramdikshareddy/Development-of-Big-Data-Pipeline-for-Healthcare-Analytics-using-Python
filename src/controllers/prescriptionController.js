import Prescription from '../models/Prescription.js';

// Create prescription
export const createPrescription = async (req, res) => {
  try {
    const prescription = await Prescription.create(req.body);
    res.status(201).json(prescription);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all prescriptions
export const getPrescriptions = async (req, res) => {
  const prescriptions = await Prescription.find();
  res.json(prescriptions);
};

// Get prescriptions by patient
export const getPrescriptionsByPatient = async (req, res) => {
  const prescriptions = await Prescription.find({
    patient_id: req.params.patient_id
  });
  res.json(prescriptions);
};
