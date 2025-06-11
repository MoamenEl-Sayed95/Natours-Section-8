const mongoose = require('mongoose');

const app = require('./app');

const DB = 'mongodb://127.0.0.1:27017/natours';
mongoose
  .connect(DB)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err.message));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
