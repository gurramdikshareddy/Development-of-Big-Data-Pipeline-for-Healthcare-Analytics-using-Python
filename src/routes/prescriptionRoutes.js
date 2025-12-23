import express from 'express';
import {
  createPrescription,
  getPrescriptions,
  getPrescriptionsByPatient
} from '../controllers/prescriptionController.js';

const router = express.Router();

router.post('/', createPrescription);
router.get('/', getPrescriptions);
router.get('/patient/:patient_id', getPrescriptionsByPatient);

export default router;
