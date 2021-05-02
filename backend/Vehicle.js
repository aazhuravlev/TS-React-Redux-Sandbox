import mongoose from 'mongoose';

const Vehicle = new mongoose.Schema({
  id: {type: String},
  name: {type: String, required: true},
  type: {type: String, required: true},
  description: {type: String, required: true},
  specifications_text: {type: String},
  team_text: {type: String},
  term_text: {type: String},
  rent: {type: String, required: true},
  preview: {type: String},
  image: {type: String},
})

export default mongoose.model('Vehicle', Vehicle);