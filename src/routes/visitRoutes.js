import express from 'express';
import {
  createVisit,
  getVisits,
  getVisitsByPatient
} from '../controllers/visitController.js';

const router = express.Router();

router.post('/', createVisit);
router.get('/', getVisits);
router.get('/patient/:patient_id', getVisitsByPatient);

export default router;
