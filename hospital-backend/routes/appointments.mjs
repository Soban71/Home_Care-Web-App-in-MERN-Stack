import express from "express";
import Appointment from "../models/Appointment.mjs";
import multer from 'multer';
import Doctor from "../models/Doctor.mjs";
const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find();

   
    const appointmentsWithBase64 = appointments.map(appointment => {
      const { _id, ...rest } = appointment.toObject();
      return {
        ...rest,
        healthInsureCard: appointment.healthInsureCard
          ? appointment.healthInsureCard.toString("base64")
          : null,
      };
    });

    res.json(appointmentsWithBase64);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({ message: "Error fetching appointments" });
  }
});

// Create a new appointment

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/", upload.single("healthInsureCard"), async (req, res) => {
  try {
    const {
      place,
      date,
      time,
      treatment,
      medicationList,
      checklist,
      emergencyContact,
      name,
      age,
      gender,
    } = req.body;

    const newAppointment = new Appointment({
      place,
      date,
      time,
      treatment,
      healthInsureCard: req.file ? req.file.buffer : null,
      medicationList,
      checklist,
      emergencyContact,
      name,
      age,
      gender,
    });

    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    console.error("Error creating appointment:", error);
    res.status(500).json({ message: "Error creating appointment" });
  }
});

router.post("/doctor", async (req, res) => {
  try {
    const newDoctor = new Doctor(req.body);
    await newDoctor.save();
    res.status(201).json(newDoctor);
   // console.log("Added");
  } catch (error) {
    console.error("Error creating doctor:", error);
    res.status(500).json({ message: "Error creating doctor" });
  }
});



router.get("/doctor", async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    console.log("Error fetching doctors:", error);
    res.status(500).json({ message: "Error fetching doctors" });
  }
});

export default router;
