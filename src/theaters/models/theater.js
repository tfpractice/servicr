import mongoose, { Schema } from 'mongoose';

const TheaterSchema = new Schema(
  {
    id: { type: String, required: true },
    name: { type: String, default: 'default review text' },
    city: { type: Date, default: Date.now() },
    rooms: { type: String, default: 'default review text' },
  },
  { toObject: { virtuals: true }, toJSON: { virtuals: true }}
);

TheaterSchema.statics.findByTheaterID = function(id) {
  return this.find({ id });
};

TheaterSchema.statics.dropAll = function() {
  return this.deleteMany({});
};

const Theater = mongoose.model('Theater', TheaterSchema);

export default Theater;
