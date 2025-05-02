import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('API is running ✅');
  });
  
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
