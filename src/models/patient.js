const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://jolumapi92:foamyFOAMY@cluster0.ukcjm.mongodb.net/Care?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const PatientSchema = new mongoose.Schema({
    name: { 
      type: String,
      required: true
    },
    age: {
        type: Number,
        required: true
    },
    tank: Object
  })
const Patient = mongoose.model('Patient', PatientSchema)

module.exports = Patient
  
// Connecting the database ///////////////////////////////////
const db = mongoose.connection;
db.on('error', (err) => {
  console.log('Error connecting to database', err)
})
db.once('open', () => {
  console.log('Connection successful')
})