import express from 'express';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';

import { createProxyMiddleware } from 'http-proxy-middleware';
import router from './router.js';

const PORT = 3001;
const DB_URL = 'mongodb+srv://user:user@cluster0.bcskn.mongodb.net/Ts-React-Redux-Sandbox?retryWrites=true&w=majority';

const app = express();

app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload());
app.use('/api', router);
app.use('/api', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    app.listen(PORT, () => console.log('server started on port' + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();