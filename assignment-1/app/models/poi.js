'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const poiSchema = new Schema({
  poiName: String,
  poiDescription: String,
  poiCategory: String,
  poiLatitude: Number,
  poiLongitude: Number
});

module.exports = Mongoose.model('POI', poiSchema);