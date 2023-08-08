import mongoose from 'mongoose';
//import config from '../config/dev';

const MONGODB_URI = 'mongodb://localhost:27017/mydb';
mongoose.connect(MONGODB_URI, {
  
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


export default db