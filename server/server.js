import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './configs/mongodb.js';
import { clerkWebhooks } from './controllers/webhooks.js';

dotenv.config();

const app = express();

// Middleware to parse JSON payloads
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send("API Working");
});

app.post('/clerk', express.json(), clerkWebhooks);

const startServer = async () => {
  try {
    // Connect to database
    await connectDB();

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

    // Increase max listeners limit
    process.setMaxListeners(20);
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();