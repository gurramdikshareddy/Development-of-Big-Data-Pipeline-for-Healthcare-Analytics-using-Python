import Patient from '../models/Patients.js';

// Create patient
export const createPatient = async (req, res) => {
  try {
    const patient = await Patient.create(req.body);
    res.status(201).json(patient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all patients
export const getPatients = async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
};

// Get patient by patient_id
export const getPatientById = async (req, res) => {
  const patient = await Patient.findOne({ patient_id: req.params.patient_id });
  if (!patient) return res.status(404).json({ message: 'Patient not found' });
  res.json(patient);
};
