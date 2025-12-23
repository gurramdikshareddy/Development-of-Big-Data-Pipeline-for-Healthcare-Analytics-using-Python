import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema(
  {
    doctor_id: {
      type: String,
      required: true,
      unique: true
    },

    doctor_name: {
      type: String,
      required: true
    },

    doctor_speciality: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true
    },

    is_active: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model('Doctor', doctorSchema);
