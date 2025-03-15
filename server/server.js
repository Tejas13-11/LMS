import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './configs/mongodb.js';
import { cleekWebhooks } from './controllers/webhooks.js';

dotenv.config();

const app = express();

// Function to connect to the database and start the server
const startServer = async () => {
  try {
    // Connect to database
    await connectDB();

    app.use(cors());

    app.get('/', (req, res) => {
      res.send("API is running...");
    })
    app.post('/clerk',express.json(),cleekWebhooks)

    const PORT = process.env.PORT || 5001;

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};


startServer();