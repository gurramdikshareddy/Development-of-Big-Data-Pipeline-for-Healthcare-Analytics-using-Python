import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema(
  {
    patient_id: {
      type: String,
      required: true,
      unique: true
    },

    fullname: {
      type: String,
      required: true
    },

    age: {
      type: Number,
      required: true
    },

    gender: {
      type: String,
      enum: ['M', 'F', 'Other'],
      required: true
    },

    blood_group: {
      type: String
    },

    phone_number: {
      type: String
    },

    email: {
      type: String
    },

    emergency_contact: {
      type: String
    },

    location: {
      type: String
    },

    bmi: {
      type: Number
    },

    smoker_status: {
      type: Boolean,
      default: false
    },

    alcohol_use: {
      type: Boolean,
      default: false
    },

    chronic_conditions: {
      type: [String], // multi-select dropdown
      default: []
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Patient', patientSchema);
