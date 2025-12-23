import mongoose from 'mongoose';

const prescriptionSchema = new mongoose.Schema(
  {
    prescription_id: {
      type: String,
      required: true,
      unique: true
    },

    visit_id: {
      type: String,
      required: true
    },

    patient_id: {
      type: String,
      required: true
    },

    drug_name: {
      type: String,
      required: true
    },

    dosage: {
      type: String,
      required: true
    },

    quantity: {
      type: Number,
      required: true
    },

    days_supply: {
      type: Number,
      required: true
    },

    prescribed_date: {
      type: Date,
      required: true
    },

    cost: {
      type: Number
    },

    drug_category: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Prescription', prescriptionSchema);
