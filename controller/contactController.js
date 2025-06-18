const contactModel = require("../models/contactModel");

exports.createContact = async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newContact = new contactModel({ name, email, phone });
    await newContact.save();

    res.status(201).json({ message: "Contact saved successfully",newContact });
  } catch (error) {
    console.error("Contact creation error:", error);
    res.status(500).json({ message: "Server Error" });
  }
};
