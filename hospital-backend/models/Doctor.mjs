// models/Doctor.js

import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: String,
  expertise: String,
  timing: String,
  fee: String,
});

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
