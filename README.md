# Contact Form API

A simple backend API built using **Node.js**, **Express**, and **MongoDB** to handle contact form submissions. It supports submitting contact details and retrieving all submissions. This project demonstrates basic CRUD operations, API validation, and RESTful design — perfect for beginner backend developers.

---

##  Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- Postman (for testing)
- Render (for deployment)

---

##  Features

- Submit contact form (name, email, phone, message)
- Fetch all contact submissions
- Input validation
- Error handling
- RESTful API structure

---

##  API Endpoints

### `POST /api/contact`

Submit contact form data.

#### Request Body:

```json
{
  "name": "Sanjay",
  "email": "sanjay@example.com",
  "phone": "8056638834",
  "message": "This is a test submission"
}
