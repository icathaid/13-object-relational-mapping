'use strict';
import mongoose from 'mongoose';

const bikeSchema = mongoose.Schema({
  make: {type:String, required:true},
  model: {type:String, required:true},
  speed: {type:Number},
});

export default mongoose.model('bikes', bikeSchema);