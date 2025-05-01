import Contact from '../models/contact.js';

export const submitContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, Email and Message are required' });
    }

    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
