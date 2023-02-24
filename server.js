const app = require('./app');
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
const { DB_HOST } = process.env;
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log('database connected');
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });

// app.listen(3000, () => {
//   console.log('Server running. Use our API on port: 3000');
// });
