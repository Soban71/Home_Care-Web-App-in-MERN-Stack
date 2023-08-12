import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  place: String,
  date: String,
  time: String,
  treatment: String,
  healthInsureCard: Buffer, // Store the uploaded image as Buffer
  medicationList: String,
  checklist: [Boolean],
  emergencyContact: String,
  name: String,
  age: String,
  gender: String,
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
