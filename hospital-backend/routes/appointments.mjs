// routes/appointments.js
import express from "express";
import Appointment from "../models/Appointment.mjs";

const router = express.Router();

// Fetch all appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({ message: "Error fetching appointments" });
  }
});
// Create a new appointment
router.post("/", async (req, res) => {
    try {
      const newAppointment = new Appointment(req.body);
      await newAppointment.save();
      res.status(201).json(newAppointment);
    } catch (error) {
      console.error("Error creating appointment:", error);
      res.status(500).json({ message: "Error creating appointment" });
    }
  });

export default router;
