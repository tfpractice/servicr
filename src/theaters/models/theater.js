import mongoose, { Schema } from 'mongoose';
import faker from 'faker';

import { seedRooms } from './room';

const TheaterSchema = new Schema(
  {
    name: { type: String, default: 'theaterName' },
    city: { type: String, default: 'Brooklyn' },
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

export const seedTheaters = (num = 5) => {
  const inserted = [ ...Array(5).keys() ].map(fakeTheater);

  console.log('inserted', inserted);
  return Theater.create(inserted);
};

export const setRooms = rooms => theater => theater.update({ rooms });
export const updateTheaters = () =>
  Theater.find()
    .exec()
    .then((trs) => {
      console.log('trs', trs);
      return Promise.all(
        trs.map(t => seedRooms().then(rms => setRooms(rms)(t)))
      );
    });
