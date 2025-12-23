import mongoose from 'mongoose';

const visitSchema = new mongoose.Schema(
  {
    visit_id: {
      type: String,
      required: true,
      unique: true
    },

    patient_id: {
      type: String,
      required: true
    },

    visit_date: {
      type: Date,
      required: true
    },

    diagnosis_code: {
      type: String
    },

    diagnosis_description: {
      type: String
    },

    severity_score: {
      type: Number,
      min: 0,
      max: 5
    },

    visit_type: {
      type: String,
      enum: ['OP', 'IP'],
      required: true
    },

    length_of_stay: {
      type: Number,
      default: 0
    },

    bp: {
      type: String
    },

    previous_visit_days: {
      type: Number
    },

    readmitted_30_days: {
      type: Boolean,
      default: false
    },

    visit_cost: {
      type: Number
    },

    doctor_name: {
      type: String,
      required: true
    },

    doctor_speciality: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Visit', visitSchema);
