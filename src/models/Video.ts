import * as mongoose from 'mongoose';

const { Schema } = mongoose;

const videoSchema = new Schema({
  video: String,
  title: String,
  created_at: {type:Date,default: new Date()},
  updated_at:{type:Date,default: new Date()}
});

export default mongoose.model('Video', videoSchema);
