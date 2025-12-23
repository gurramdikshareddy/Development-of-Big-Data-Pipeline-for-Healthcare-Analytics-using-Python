import Visit from '../models/Visit.js';

// Create visit
export const createVisit = async (req, res) => {
  try {
    const visit = await Visit.create(req.body);
    res.status(201).json(visit);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all visits
export const getVisits = async (req, res) => {
  const visits = await Visit.find();
  res.json(visits);
};

// Get visits by patient_id
export const getVisitsByPatient = async (req, res) => {
  const visits = await Visit.find({ patient_id: req.params.patient_id });
  res.json(visits);
};
