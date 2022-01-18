const mongoose = require('mongoose');

const modelName = 'post';
const modelSchema = mongoose.Schema({
  title: { type: String },
  content: { type: String },
  created: { type: Number },
});

const model = mongoose.model(modelName, modelSchema);

module.exports = model;