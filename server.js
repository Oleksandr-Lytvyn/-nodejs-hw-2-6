const app = require('./app');
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
const DB_HOST =
  'mongodb+srv://Tvinlee:lSnidN4VAebBsDqN@cluster0.rqfgtfx.mongodb.net/contacts?retryWrites=true&w=majority';
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
