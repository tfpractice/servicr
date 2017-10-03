import mongoose, { Schema } from 'mongoose';
import faker from 'faker';

const TheaterSchema = new Schema(
  {
    id: { type: String, required: true },
    name: { type: String, default: 'default review text' },
    city: { type: Date, default: Date.now() },
    rooms: [{ type: Schema.Types.ObjectId, ref: 'Room' }],
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
export const fakeTheater = () => ({
  name: faker.lorem.word(),
  city: faker.address.city(),
  rooms: [],
});

export const w = (num = 5) =>
  Theater.create([ ...Array(5).keys() ].map(fakeTheater));
