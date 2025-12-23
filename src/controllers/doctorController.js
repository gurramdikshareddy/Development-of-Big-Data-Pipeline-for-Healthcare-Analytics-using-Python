import Doctor from '../models/Doctor.js';

export const createDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);
    res.status(201).json(doctor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getDoctors = async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
};
