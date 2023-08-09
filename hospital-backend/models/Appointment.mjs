// models/Appointment.js
import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  place: String,
  date: String,
  time: String,
  treatment: String,
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
