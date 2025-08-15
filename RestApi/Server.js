import express from 'express';
import productRouter from './routes/product.route.js';
import DatabaseConnnection from './lib/dbconnect.js';
import AuthRouter from './routes/auth.route.js';
import VideoRouter from './routes/video.js'
import cors from "cors";



const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(cors());


// Routes
app.use('/product', productRouter);
app.use('/auth', AuthRouter);
app.use('/video' , VideoRouter)

// Test route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Connect to DB first, then start server
DatabaseConnnection.then(() => {
  app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
  });
}).catch((error) => {
  console.error("❌ Failed to connect to the database:", error.message);
});


